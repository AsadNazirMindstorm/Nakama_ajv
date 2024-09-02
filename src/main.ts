let InitModule: nkruntime.InitModule =
        function(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    logger.info("Hello World!");
}
// Reference InitModule to avoid it getting removed on build
!InitModule && InitModule.bind(null);
