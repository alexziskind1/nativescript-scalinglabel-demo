var label = require( "ui/label/label" );
function ScalingLabel() {
	this.mylabel = UILabel.alloc().init();
	this.ios.adjustsFontSizeToFitWidth = true;
	this.ios.addSubview( this.mylabel );
}
ScalingLabel.prototype = new label.Label();
exports.ScalingLabel = ScalingLabel;
