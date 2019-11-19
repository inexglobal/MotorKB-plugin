Blockly.Blocks['motor_kb_digital_read'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.DIGTIAL_READ_PIN)
			.appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "ch");
		this.setOutput(true, ["Number", "Boolean"]);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_digital_write'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.DIGTIAL_WRITE_PIN)
			.appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "ch");
		this.appendValueInput("value")
			.setCheck(["Number", "Boolean"])
			.appendField(Blockly.Msg.MOTOR_KB.TO);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_analog_read'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.ANALOG_READ_PIN)
			.appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "ch");
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_motor'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SET_MOTOR)
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "ch")
			.appendField(Blockly.Msg.MOTOR_KB.DIRECTION)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.MOTOR_KB.FORWARD,"1"], [Blockly.Msg.MOTOR_KB.BACKWARD,"2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField(Blockly.Msg.MOTOR_KB.SPEED);
		this.appendDummyInput()
			.appendField("%");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_servo'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SET_SERVO)
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "ch");
		this.appendValueInput("angle")
			.setCheck("Number")
			.appendField(Blockly.Msg.MOTOR_KB.DEGREE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_servo2'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SET_SERVO2)
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "ch")
			.appendField(Blockly.Msg.MOTOR_KB.DIRECTION)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.MOTOR_KB.FORWARD,"1"], [Blockly.Msg.MOTOR_KB.BACKWARD,"2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField(Blockly.Msg.MOTOR_KB.SPEED);
		this.appendDummyInput()
			.appendField("%");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_config'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_SET_BAUD)
			.appendField(new Blockly.FieldDropdown([["9600","9600"], ["2400","2400"], ["57600","57600"], ["115200","115200"]]), "baud");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_write'] = {
	init: function() {
		this.appendValueInput("data")
			.setCheck(["String", "Number", "Boolean"])
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_WRITE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_write_line'] = {
	init: function() {
		this.appendValueInput("data")
			.setCheck(["String", "Number", "Boolean"])
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_WRITE_NEW_LINE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_available'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_AVAILABLE);
		this.setInputsInline(true);
		this.setOutput(true, ["Number", "Boolean"]);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_read_one_byte'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_READ_ONE_BYTE);
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_read'] = {
	init: function() {
		this.appendValueInput("count")
			.setCheck("Number")
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_READ);
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.BYTES);
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_read_string'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_READ_STRING);
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_read_line'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_READ_LINE);
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};

Blockly.Blocks['motor_kb_serial_read_until'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_KB.SERIAL_READ_UNTIL)
			.appendField(new Blockly.FieldTextInput("$"), "until");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
}

Blockly.Blocks['motor_kb_motor_forward'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_FORWARD_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_FORWARD_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_backward'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_BACKWARD_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 20,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_BACKWARD_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_forward2'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_FORWARD_2_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_FORWARD_2_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_backward2'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_BACKWARD_2_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_BACKWARD_2_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_turn_left'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_TRUE_LEFT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_TRUE_LEFT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_turn_right'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_TRUE_RIGHT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_TRUE_RIGHT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_spin_left'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_SPIN_LEFT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_SPIN_LEFT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_spin_right'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_SPEN_RIGHT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_SPEN_RIGHT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['motor_kb_motor_stop'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MOTOR_KB_MOTOR_STOP_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MOTOR_KB_MOTOR_STOP_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};
