param webAppName string
param sku string = 'B1'
param linuxFxVersion string = 'node|16-lts'
param startUpCommand string = 'pm2 serve /home/site/wwwroot --no-daemon --spa'
param location string = 'West Europe'
var appServicePlanName = toLower('AppServicePlan-${webAppName}')
var webSiteName = toLower('${webAppName}')
resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: appServicePlanName
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: sku
  }
  kind: 'linux'
}
resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: webSiteName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      appCommandLine: startUpCommand
    }
  }
}
