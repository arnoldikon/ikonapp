package audit

import java.time.LocalDateTime

class LogFunction{

	public static void addLogActivity(String log, String username, String fullname,String application, String refId) {
			
			def logData = new id.ikon.audit.LogActivity(),
				now = LocalDateTime.now()
			
			logData.logTime = now
			logData.logNote = log
			logData.username = username
			logData.fullname = fullname
			logData.application = application
			logData.refId =  refId	
		
	}
}