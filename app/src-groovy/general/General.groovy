package general

class Options {
	String label
	def value
	
	String cekOption() {
		return "Label : ${label}, Value : ${value}"
	}
	
}
