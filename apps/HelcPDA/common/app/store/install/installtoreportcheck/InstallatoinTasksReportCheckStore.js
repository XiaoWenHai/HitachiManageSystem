Ext.define('HelcPDA.store.install.installtoreportcheck.InstallatoinTasksReportCheckStore',{
	id:'store',
	extend:'Ext.data.Store',
	requires:['HelcPDA.model.install.installtoreportcheck.InstallatoinTasksReportCheckModel'],
	config:{
		model:'HelcPDA.model.install.installtoreportcheck.InstallatoinTasksReportCheckModel'
	},
});