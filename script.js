// Set your Power BI report embed URL here
const reportEmbedUrl = "https://app.powerbi.com/reportEmbed?reportId=308f9a99-e535-40ca-b7bc-871d8da241c1&autoAuth=true&ctid=350695a2-f2cc-4642-ae03-97ce4c5938f1";

// Set the access token for embedding Power BI reports
const accessToken = "YOUR_ACCESS_TOKEN";

// Create the Power BI configuration
const config = {
  type: 'report',
  tokenType: models.TokenType.Embed,
  accessToken: accessToken,
  embedUrl: reportEmbedUrl,
  id: 'reportContainer',
  permissions: models.Permissions.All,
  settings: {
    filterPaneEnabled: false,
    navContentPaneEnabled: false
  }
};

// Embed the Power BI report
const reportContainer = document.getElementById('reportContainer');
const report = powerbi.embed(reportContainer, config);
