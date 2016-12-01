'use strict';

app.customer2View = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('customer2View');

// START_CUSTOM_CODE_customer2View
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_customer2View
(function(parent) {
    var provider = app.data.miet4,
        mode = 'signin',
        registerRedirect = 'home',
        signinRedirect = 'home',
        rememberKey = 'miet4_authData_customer2ViewModel',
        init = function(error, result) {
            $('.status').text('');

            if (error) {
                if (error.message) {
                    $('.status').text(error.message);
                }

                return false;
            }

            var activeView = mode === 'signin' ? '.signin-view' : '.signup-view',
                model = parent.customer2ViewModel;

            if (provider.setup && provider.setup.offlineStorage && !app.isOnline()) {
                $('.signin-view', 'signup-view').hide();
                $('.offline').show();
            } else {
                $('.offline').hide();

                if (mode === 'signin') {
                    $('.signup-view').hide();
                } else {
                    $('.signin-view').hide();
                }

                $(activeView).show();
            }

            if (model && model.set) {
                model.set('logout', null);
            }

            var rememberedData = localStorage ? JSON.parse(localStorage.getItem(rememberKey)) : app[rememberKey];
            if (rememberedData && rememberedData.email && rememberedData.password) {

                parent.customer2ViewModel.set('email', rememberedData.email);
                parent.customer2ViewModel.set('password', rememberedData.password);
                parent.customer2ViewModel.signin();
            }
        },
        successHandler = function(data) {
            var redirect = mode === 'signin' ? signinRedirect : registerRedirect,
                model = parent.customer2ViewModel || {},
                logout = model.logout;

            if (logout) {
                model.set('logout', null);
            }
            if (data && data.result) {
                if (logout) {
                    provider.Users.logout(init, init);
                    return;
                }
                var rememberedData = {
                    email: model.email,
                    password: model.password
                };
                if (model.rememberme && rememberedData.email && rememberedData.password) {
                    if (localStorage) {
                        localStorage.setItem(rememberKey, JSON.stringify(rememberedData));
                    } else {
                        app[rememberKey] = rememberedData;
                    }
                }
                app.user = data.result;

                setTimeout(function() {
                    app.mobileApp.navigate('components/' + redirect + '/view.html');
                }, 0);
            } else {
                init();
            }
        },
        customer2ViewModel = kendo.observable({
            displayName: '',
            email: '',
            password: '',
            errorMessage: '',
            validateData: function(data) {
                var model = customer2ViewModel;

                if (!data.email && !data.password) {
                    model.set('errorMessage', 'Missing credentials.');
                    return false;
                }

                if (!data.email) {
                    model.set('errorMessage', 'Missing username or email.');
                    return false;
                }

                if (!data.password) {
                    model.set('errorMessage', 'Missing password.');
                    return false;
                }

                return true;
            },
            signin: function() {
                var model = customer2ViewModel,
                    email = model.email.toLowerCase(),
                    password = model.password;

                if (!model.validateData(model)) {
                    return false;
                }

                provider.Users.login(email, password, successHandler, init);

            },
            register: function() {
                var model = customer2ViewModel,
                    email = model.email.toLowerCase(),
                    password = model.password,
                    displayName = model.displayName,
                    attrs = {
                        Email: email,
                        DisplayName: displayName
                    };

                if (!model.validateData(model)) {
                    return false;
                }

                provider.Users.register(email, password, attrs, successHandler, init);

            },
            toggleView: function() {
                var model = customer2ViewModel;
                model.set('errorMessage', '');

                mode = mode === 'signin' ? 'register' : 'signin';

                init();
            }
        });

    parent.set('customer2ViewModel', customer2ViewModel);
    parent.set('afterShow', function(e) {
        if (e && e.view && e.view.params && e.view.params.logout) {
            if (localStorage) {
                localStorage.setItem(rememberKey, null);
            } else {
                app[rememberKey] = null;
            }
            customer2ViewModel.set('logout', true);
        }
        provider.Users.currentUser().then(successHandler, init);
    });
})(app.customer2View);

// START_CUSTOM_CODE_customer2ViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_customer2ViewModel