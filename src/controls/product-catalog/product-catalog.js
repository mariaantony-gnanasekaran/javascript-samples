/**
 * Product Catalog - This RDLC report demonstrates the list of products rendered in Syncfusion Report Viewer.
 */
$(function () {
    $("#container").boldReportViewer({
        // Specifies the report Web API service URL. It is used to process the reports.
        reportServiceUrl: window.Globals.SERVICE_URL,
        // Specifies the path of the RDL report file
        reportPath: 'product-catalog.rdlc',
        toolbarSettings: window.Globals.TOOLBAR_OPTIONS,
        toolBarItemClick: window.Globals.EDIT_REPORT,
        reportLoaded: onReportLoaded,
        processingMode: 'Local',
        exportItemClick: window.Globals.EXPORT_ITEM_CLICK
    });
});

function onReportLoaded(args) {
    let reportNameWithoutExt = args.model.reportPath.split(".")[0];
    let reportObj = $('#container').data("boldReportViewer");
    reportObj.model.dataSources = rdlcData[reportNameWithoutExt];
}
