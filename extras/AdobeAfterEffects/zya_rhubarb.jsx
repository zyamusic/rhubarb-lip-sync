﻿// Polyfill for Object.assign
"function"!=typeof Object.assign&&(Object.assign=function(a,b){"use strict";if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(c[f]=e[f])}return c});

// Polyfill for Array.isArray
Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)});

// Polyfill for Array.prototype.map
Array.prototype.map||(Array.prototype.map=function(r){var t,n,o;if(null==this)throw new TypeError("this is null or not defined");var e=Object(this),i=e.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=new Array(i),o=0;o<i;){var a,p;o in e&&(a=e[o],p=r.call(t,a,o,e),n[o]=p),o++}return n});

// Polyfill for Array.prototype.every
Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";var e,n;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;n<i;){var y;if(n in o&&(y=o[n],!r.call(e,y,n,o)))return!1;n++}return!0});

// Polyfill for Array.prototype.find
Array.prototype.find||(Array.prototype.find=function(r){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof r)throw new TypeError("callback must be a function");for(var n=Object(this),t=n.length>>>0,o=arguments[1],e=0;e<t;e++){var f=n[e];if(r.call(o,f,e,n))return f}});

// Polyfill for Array.prototype.filter
Array.prototype.filter||(Array.prototype.filter=function(r){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError;for(var i=[],o=arguments.length>=2?arguments[1]:void 0,n=0;n<e;n++)if(n in t){var f=t[n];r.call(o,f,n,t)&&i.push(f)}return i});

// Polyfill for Array.prototype.forEach
Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d;if(null===this)throw new TypeError(" this is null or not defined");var e=Object(this),f=e.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=0;d<f;){var g;d in e&&(g=e[d],a.call(c,g,d,e)),d++}});

// Polyfill for Array.prototype.includes
Array.prototype.includes||(Array.prototype.includes=function(r,t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if(0===n)return!1;for(var i=0|t,o=Math.max(i>=0?i:n-Math.abs(i),0);o<n;){if(function(r,t){return r===t||"number"==typeof r&&"number"==typeof t&&isNaN(r)&&isNaN(t)}(e[o],r))return!0;o++}return!1});

// Polyfill for Array.prototype.indexOf
Array.prototype.indexOf||(Array.prototype.indexOf=function(r,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),i=e.length>>>0;if(0===i)return-1;var o=0|t;if(o>=i)return-1;for(n=Math.max(o>=0?o:i-Math.abs(o),0);n<i;){if(n in e&&e[n]===r)return n;n++}return-1});

// Polyfill for Array.prototype.some
Array.prototype.some||(Array.prototype.some=function(r){"use strict";if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof r)throw new TypeError;for(var e=Object(this),o=e.length>>>0,t=arguments.length>=2?arguments[1]:void 0,n=0;n<o;n++)if(n in e&&r.call(t,e[n],n,e))return!0;return!1});

// Polyfill for String.prototype.trim
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});

// Polyfill for JSON
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return a<10?"0"+a:a}function this_value(){return this.valueOf()}function quote(a){return rx_escapable.lastIndex=0,rx_escapable.test(a)?'"'+a.replace(rx_escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,h,g=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,h=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=0===h.length?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;c<f;c+=1)"string"==typeof rep[c]&&(d=rep[c],(e=str(d,i))&&h.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i))&&h.push(quote(d)+(gap?": ":":")+e);return e=0===h.length?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;d<c;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

var lipsync = { 
  X_A: { start: 0, end: 6, transition: 'X_A' },
  A_D: { start: 6, end: 12, transition: 'A_D' },
  D_C: { start: 12, end: 18, transition: 'D_C' },
  C_E: { start: 18, end: 24, transition: 'C_E' },
  E_F: { start: 24, end: 30, transition: 'E_F' },
  F_G: { start: 30, end: 36, transition: 'F_G' },
  G_H: { start: 36, end: 42, transition: 'G_H' },
  H_X: { start: 42, end: 48, transition: 'H_X' },
  X_B: { start: 48, end: 54, transition: 'X_B' },
  B_D: { start: 54, end: 60, transition: 'B_D' },
  D_F: { start: 60, end: 66, transition: 'D_F' },
  F_H: { start: 66, end: 72, transition: 'F_H' },
  H_A: { start: 72, end: 78, transition: 'H_A' },
  A_B: { start: 78, end: 84, transition: 'A_B' },
  B_C: { start: 84, end: 90, transition: 'B_C' },
  C_G: { start: 90, end: 96, transition: 'C_G' },
  G_B: { start: 96, end: 102, transition: 'G_B' },
  B_F: { start: 102, end: 108, transition: 'B_F' },
  F_A: { start: 108, end: 114, transition: 'F_A' },
  A_E: { start: 114, end: 120, transition: 'A_E' },
  E_X: { start: 120, end: 126, transition: 'E_X' },
  X_D: { start: 126, end: 132, transition: 'X_D' },
  D_G: { start: 132, end: 138, transition: 'D_G' },
  G_A: { start: 138, end: 144, transition: 'G_A' },
  A_C: { start: 144, end: 150, transition: 'A_C' },
  C_H: { start: 150, end: 156, transition: 'C_H' },
  H_E: { start: 156, end: 162, transition: 'H_E' },
  E_B: { start: 162, end: 168, transition: 'E_B' },
  B_H: { start: 168, end: 174, transition: 'B_H' },
  H_D: { start: 174, end: 180, transition: 'H_D' },
  D_E: { start: 180, end: 186, transition: 'D_E' },
  E_G: { start: 186, end: 192, transition: 'E_G' },
  G_X: { start: 192, end: 198, transition: 'G_X' },
  X_C: { start: 198, end: 204, transition: 'X_C' },
  C_F: { start: 204, end: 210, transition: 'C_F' },
  F_X: { start: 210, end: 216, transition: 'F_X' } };


function last(array) {
	return array[array.length - 1];
}

function createGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0;
		var v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

function toArray(list) {
	var result = [];
	for (var i = 0; i < list.length; i++) {
		result.push(list[i]);
	}
	return result;
}

function toArrayBase1(list) {
	var result = [];
	for (var i = 1; i <= list.length; i++) {
		result.push(list[i]);
	}
	return result;
}

function pad(n, width, z) {
	z = z || '0';
	n = String(n);
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

// Checks whether scripts are allowed to write files by creating and deleting a dummy file
function canWriteFiles() {
	try {
		var file = new File();
		file.open('w');
		file.writeln('');
		file.close();
		file.remove();
		return true;
	} catch (e) {
		return false;
	}
}

function frameToTime(frameNumber, compItem) {
	return frameNumber * compItem.frameDuration;
}

function timeToFrame(time, compItem) {
	return time * compItem.frameRate;
}

// To prevent rounding errors
var epsilon = 0.001;

function isFrameVisible(compItem, frameNumber) {
	if (!compItem) return false;

	var time = frameToTime(frameNumber + epsilon, compItem);
	var videoLayers = toArrayBase1(compItem.layers).filter(function(layer) {
		return  layer.hasVideo;
	});
	var result = videoLayers.find(function(layer) {
		return layer.activeAtTime(time);
	});
	return Boolean(result);
}

var appName = 'Zya Lip Sync';

var settingsFilePath = Folder.userData.fullName + '/rhubarb-ae-settings.json';

function readTextFile(fileOrPath) {
	var filePath = fileOrPath.fsName || fileOrPath;
	var file = new File(filePath);
	function check() {
		if (file.error) throw new Error('Error reading file "' + filePath + '": ' + file.error);
	}
	try {
		file.open('r'); check();
		file.encoding = 'UTF-8'; check();
		var result = file.read(); check();
		return result;
	} finally {
		file.close(); check();
	}
}

function writeTextFile(fileOrPath, text) {
	var filePath = fileOrPath.fsName || fileOrPath;
	var file = new File(filePath);
	function check() {
		if (file.error) throw new Error('Error writing file "' + filePath + '": ' + file.error);
	}
	try {
		file.open('w'); check();
		file.encoding = 'UTF-8'; check();
		file.write(text); check();
	} finally {
		file.close(); check();
	}
}

function readSettingsFile() {
	try {
		return JSON.parse(readTextFile(settingsFilePath));
	} catch (e) {
		return {};
	}
}

function writeSettingsFile(settings) {
	try {
		writeTextFile(settingsFilePath, JSON.stringify(settings, null, 2));
	} catch (e) {
		alert('Error persisting settings. ' + e.message);
	}
}

var osIsWindows = (system.osName || $.os).match(/windows/i);

// Depending on the operating system, the syntax for escaping command-line arguments differs.
function cliEscape(argument) {
	return osIsWindows
		? '"' + argument + '"'
		: "'" + argument.replace(/'/g, "'\\''") + "'";
}

function exec(command) {
	return system.callSystem(command);
}

function execInWindow(command) {
	if (osIsWindows) {
		system.callSystem('cmd /C "' + command + '"');
	} else {
		// I didn't think it could be so complicated on OS X to open a new Terminal window,
		// execute a command, then close the Terminal window.
		// If you know a better solution, let me know!
		var escapedCommand = command.replace(/"/g, '\\"');
		var appleScript = '\
			tell application "Terminal" \
				-- Quit terminal \
				-- Yes, that\'s undesirable if there was an open window before. \
				-- But all solutions I could find were at least as hacky. \
				quit \
				-- Open terminal \
				activate \
				-- Run command in new tab \
				set newTab to do script ("' + escapedCommand + '") \
				-- Wait until command is done \
				tell newTab \
					repeat while busy \
						delay 0.1 \
					end repeat \
				end tell \
				quit \
			end tell';
		exec('osascript -e ' + cliEscape(appleScript));
	}
}

var rhubarbPath = osIsWindows ? 'rhubarb.exe' : '/usr/local/bin/rhubarb';

// ExtendScript's resource strings are a pain to write.
// This function allows them to be written in JSON notation, then converts them into the required
// format.
// For instance, this string: '{ "__type__": "StaticText", "text": "Hello world" }'
// is converted to this: 'StaticText { "text": "Hello world" }'.
// This code relies on the fact that, contrary to the language specification, all major JavaScript
// implementations keep object properties in insertion order.
function createResourceString(tree) {
	var result = JSON.stringify(tree, null, 2);
	result = result.replace(/(\{\s*)"__type__":\s*"(\w+)",?\s*/g, '$2 $1');
	return result;
}

// Object containing functions to create control description trees.
// For instance, `controls.StaticText({ text: 'Hello world' })`
// returns `{ __type__: StaticText, text: 'Hello world' }`.
var controlFunctions = (function() {
	var controlTypes = [
		// Strangely, 'dialog' and 'palette' need to start with a lower-case character
		['Dialog', 'dialog'], ['Palette', 'palette'],
		'Panel', 'Group', 'TabbedPanel', 'Tab', 'Button', 'IconButton', 'Image', 'StaticText',
		'EditText', 'Checkbox', 'RadioButton', 'Progressbar', 'Slider', 'Scrollbar', 'ListBox',
		'DropDownList', 'TreeView', 'ListItem', 'FlashPlayer'
	];
	var result = {};
	controlTypes.forEach(function(type){
		var isArray = Array.isArray(type);
		var key = isArray ? type[0] : type;
		var value = isArray ? type[1] : type;
		result[key] = function(options) {
			return Object.assign({ __type__: value }, options);
		};
	});
	return result;
})();

// Returns the path of a project item within the project
function getItemPath(item) {
	if (item === app.project.rootFolder) {
		return '/';
	}

	var result = item.name;
	while (item.parentFolder !== app.project.rootFolder) {
		result = item.parentFolder.name + ' / ' + result;
		item = item.parentFolder;
	}
	return '/ ' + result;
}

// Selects the item within an item control whose text matches the specified text.
// If no such item exists, selects the first item, if present.
function selectByTextOrFirst(itemControl, text) {
	var targetItem = toArray(itemControl.items).find(function(item) {
		return item.text === text;
	});
	if (!targetItem && itemControl.items.length) {
		targetItem = itemControl.items[0];
	}
	if (targetItem) {
		itemControl.selection = targetItem;
	}
}

function getWaveFileProjectItems() {
	var result = toArrayBase1(app.project.items).filter(function(item) {
		var isAudioFootage = item instanceof FootageItem && item.hasAudio && !item.hasVideo;
		if (!isAudioFootage) return false;

		var isWaveFile = item.file && item.file.exists && item.file.name.match(/\.wav$/i);
		return isWaveFile;
	});
	return result;
}

var mouthShapeNames = 'ABCDEFGHX'.split('');
var basicMouthShapeCount = 6;
var mouthShapeCount = mouthShapeNames.length;
var basicMouthShapeNames = mouthShapeNames.slice(0, basicMouthShapeCount);
var extendedMouthShapeNames = mouthShapeNames.slice(basicMouthShapeCount);

function getSuperMouthCompHelpTip() {
	var result = 'A composition containing the mouth transitions, should contains at least 217 frames';
	return result;
}

function createExtendedShapeCheckboxes() {
	var result = {};
	extendedMouthShapeNames.forEach(function(shapeName) {
		result[shapeName.toLowerCase()] = controlFunctions.Checkbox({
			text: shapeName,
			helpTip: 'Controls whether to use the optional ' + shapeName + ' shape.'
		});
	});
	return result;
}

function createDialogWindow() {
	var resourceString;
	with (controlFunctions) {
		resourceString = createResourceString(
			Dialog({
				text: appName,
				settings: Group({
					orientation: 'column',
					alignChildren: ['left', 'top'],
					audioFile: Group({
						label: StaticText({
							text: 'Audio file:',
							// If I don't explicitly activate a control, After Effects has trouble
							// with keyboard focus, so I can't type in the text edit field below.
							active: true
						}),
						value: DropDownList({
							helpTip: 'An audio file containing recorded dialog.\n'
								+ 'This field shows all audio files of type .wav that exist in '
								+ 'your After Effects project.'
						})
					}),
					dialogText: Group({
						label: StaticText({ text: 'Dialog text (optional):' }),
						value: EditText({
							properties: { multiline: true },
							characters: 60,
							minimumSize: [0, 100],
							helpTip: 'For better animation results, you can specify the text of '
								+ 'the recording here. This field is optional.'
						})
					}),
					extendedMouthShapes: Group(
						Object.assign(
							{ label: StaticText({ text: 'Extended mouth shapes:' }) },
							createExtendedShapeCheckboxes()
						)
					),
					superMouthComp: Group({
						label: StaticText({ text: 'Super Mouth composition:' }),
						value: DropDownList({ helpTip: getSuperMouthCompHelpTip() })
					}),
					targetFolder: Group({
						label: StaticText({ text: 'Target folder:' }),
						value: DropDownList({
							helpTip: 'The project folder in which to create the animation '
								+ 'composition. The composition will be named like the audio file.'
						})
					}),
					frameRate: Group({
						label: StaticText({ text: 'Frame rate:' }),
						value: EditText({
							characters: 8,
							helpTip: 'The frame rate for the animation.'
						}),
						auto: Checkbox({
							text: 'From mouth composition',
							helpTip: 'If checked, the animation will use the same frame rate as '
								+ 'the mouth composition.'
						})
					})
				}),
				separator: Group({ preferredSize: ['', 3] }),
				buttons: Group({
					alignment: 'right',
					animate: Button({
						properties: { name: 'ok' },
						text: 'Animate'
					}),
					cancel: Button({
						properties: { name: 'cancel' },
						text: 'Cancel'
					})
				})
			})
		);
	}

	// Create window and child controls
	var window = new Window(resourceString);
	var controls = {
		audioFile: window.settings.audioFile.value,
		dialogText: window.settings.dialogText.value,
		superMouthComp: window.settings.superMouthComp.value,
		targetFolder: window.settings.targetFolder.value,
		frameRate: window.settings.frameRate.value,
		autoFrameRate: window.settings.frameRate.auto,
		animateButton: window.buttons.animate,
		cancelButton: window.buttons.cancel
	};
	extendedMouthShapeNames.forEach(function(shapeName) {
		controls['mouthShape' + shapeName] =
			window.settings.extendedMouthShapes[shapeName.toLowerCase()];
	});

	// Add audio file options
	getWaveFileProjectItems().forEach(function(projectItem) {
		var listItem = controls.audioFile.add('item', getItemPath(projectItem));
		listItem.projectItem = projectItem;
	});

	// Add mouth composition options
	var comps = toArrayBase1(app.project.items).filter(function (item) {
		return item instanceof CompItem;
	});
	comps.forEach(function(projectItem) {
		var superListItem = controls.superMouthComp.add('item', getItemPath(projectItem));
		superListItem.projectItem = projectItem;
	});

	// Add target folder options
	var projectFolders = toArrayBase1(app.project.items).filter(function (item) {
		return item instanceof FolderItem;
	});
	projectFolders.unshift(app.project.rootFolder);
	projectFolders.forEach(function(projectFolder) {
		var listItem = controls.targetFolder.add('item', getItemPath(projectFolder));
		listItem.projectItem = projectFolder;
	});

	// Load persisted settings
	var settings = readSettingsFile();
	selectByTextOrFirst(controls.audioFile, settings.audioFile);
	controls.dialogText.text = settings.dialogText || '';

	selectByTextOrFirst(controls.superMouthComp, settings.superMouthComp);

	extendedMouthShapeNames.forEach(function(shapeName) {
		controls['mouthShape' + shapeName].value =
			(settings.extendedMouthShapes || {})[shapeName.toLowerCase()];
	});
	selectByTextOrFirst(controls.targetFolder, settings.targetFolder);
	controls.frameRate.text = settings.frameRate || '';
	controls.autoFrameRate.value = settings.autoFrameRate;

	// Align controls
	window.onShow = function() {
		// Give uniform width to all labels
		var groups = toArray(window.settings.children);
		var labelWidths = groups.map(function(group) { return group.children[0].size.width; });
		var maxLabelWidth = Math.max.apply(Math, labelWidths);
		groups.forEach(function (group) {
			group.children[0].size.width = maxLabelWidth;
		});

		// Give uniform width to inputs
		var valueWidths = groups.map(function(group) {
			return last(group.children).bounds.right - group.children[1].bounds.left;
		});
		var maxValueWidth = Math.max.apply(Math, valueWidths);
		groups.forEach(function (group) {
			var multipleControls = group.children.length > 2;
			if (!multipleControls) {
				group.children[1].size.width = maxValueWidth;
			}
		});

		window.layout.layout(true);
	};

	var updating = false;

	function update() {
		if (updating) return;

		updating = true;
		try {
			// Handle auto frame rate
			var autoFrameRate = controls.autoFrameRate.value;
			controls.frameRate.enabled = !autoFrameRate;
			if (autoFrameRate) {
				// Take frame rate from mouth comp
				var superMouthComp = (controls.superMouthComp.selection || {}).projectItem;
				controls.frameRate.text = superMouthComp ? superMouthComp.frameRate : '';
			} else {
				// Sanitize frame rate
				var sanitizedFrameRate = controls.frameRate.text.match(/\d*\.?\d*/)[0];
				if (sanitizedFrameRate !== controls.frameRate.text) {
					controls.frameRate.text = sanitizedFrameRate;
				}
			}

			// Store settings
			var settings = {
				audioFile: (controls.audioFile.selection || {}).text,
				dialogText: controls.dialogText.text,
				extendedMouthShapes: {},
				superMouthComp: (controls.superMouthComp.selection || {}).text,
				targetFolder: (controls.targetFolder.selection || {}).text,
				frameRate: Number(controls.frameRate.text),
				autoFrameRate: controls.autoFrameRate.value
			};
			extendedMouthShapeNames.forEach(function(shapeName) {
				settings.extendedMouthShapes[shapeName.toLowerCase()] =
					controls['mouthShape' + shapeName].value;
			});
			writeSettingsFile(settings);
		} finally {
			updating = false;
		}
	}

	// Validate user input. Possible return values:
	// * Non-empty string: Validation failed. Show error message.
	// * Empty string: Validation failed. Don't show error message.
	// * Undefined: Validation succeeded.
	function validate() {
		// Check input values
		if (!controls.audioFile.selection) return 'Please select an audio file.';
		if (!controls.superMouthComp.selection) return 'Please select a super mouth composition.';
		if (!controls.targetFolder.selection) return 'Please select a target folder.';
		if (Number(controls.frameRate.text) < 12) {
			return 'Please enter a frame rate of at least 12 fps.';
		}

		// Check super mouth
		var superComp = controls.superMouthComp.selection.projectItem;

		if(superComp.frameRate * superComp.duration <= 216){
			return 'The super mouth comp should contains at least 217 frames';
		}

		// Check for correct Rhubarb version
		var version = exec(rhubarbPath + ' --version') || '';
		var match = version.match(/Rhubarb Lip Sync version ((\d+)\.(\d+).(\d+))/);
		if (!match) {
			var instructions = osIsWindows
				? 'Make sure your PATH environment variable contains the ' + appName + ' '
					+ 'application directory.'
				: 'Make sure you have created this file as a symbolic link to the ' + appName + ' '
					+ 'executable (rhubarb).';
			return 'Cannot find executable file "' + rhubarbPath + '". \n' + instructions;
		}
		var versionString = match[1];
		var major = Number(match[2]);
		var minor = Number(match[3]);
		if (major != 1 || minor < 6) {
			return 'This script requires ' + appName + ' 1.6.0 or a later 1.x version. '
				+ 'Your installed version is ' + versionString + ', which is not compatible.';
		}
	}

	function generateMouthCues(audioFileFootage, dialogText, extendedMouthShapeNames,
		targetProjectFolder, frameRate)
	{
		var basePath = Folder.temp.fsName + '/' + createGuid();
		var dialogFile = new File(basePath + '.txt');
		var logFile = new File(basePath + '.log');
		var jsonFile = new File(basePath + '.json');
		try {
			// Create text file containing dialog
			writeTextFile(dialogFile, dialogText);

			// Create command line
			var commandLine = rhubarbPath
				+ ' --dialogFile ' + cliEscape(dialogFile.fsName)
				+ ' --exportFormat json'
				+ ' --extendedShapes ' + cliEscape(extendedMouthShapeNames.join(''))
				+ ' --logFile ' + cliEscape(logFile.fsName)
				+ ' --logLevel fatal'
				+ ' --output ' + cliEscape(jsonFile.fsName)
				+ ' ' + cliEscape(audioFileFootage.file.fsName);

			// Run Rhubarb
			execInWindow(commandLine);

			// Check log for fatal errors
			if (logFile.exists) {
				var fatalLog = readTextFile(logFile).trim();
				if (fatalLog) {
					// Try to extract only the actual error message
					var match = fatalLog.match(/\[Fatal\] ([\s\S]*)/);
					var message = match ? match[1] : fatalLog;
					throw new Error('Error running ' + appName + '.\n' + message);
				}
			}

			var result;
			try {
				result = JSON.parse(readTextFile(jsonFile));
				$.writeln(readTextFile(jsonFile));
			} catch (e) {
				throw new Error('No animation result. Animation was probably canceled.');
			}
			return result;
		} finally {
			dialogFile.remove();
			logFile.remove();
			jsonFile.remove();
		}
	}

	function animateMouthCues(mouthCues, audioFileFootage, superMouthComp,targetProjectFolder,
		frameRate)
	{
		// Find an unconflicting comp name
		// ... strip extension .wav, if present
		var baseName = audioFileFootage.name.match(/^(.*?)(\.wav)?$/i)[1];
		var compName = baseName;
		// ... add numeric suffix, if needed
		var existingItems = toArrayBase1(targetProjectFolder.items);
		var counter = 1;
		while (existingItems.some(function(item) { return item.name === compName; })) {
			counter++;
			compName = baseName + ' ' + counter;
		}

		// Create new comp
		var comp = targetProjectFolder.items.addComp(compName, superMouthComp.width, superMouthComp.height,
			superMouthComp.pixelAspect, audioFileFootage.duration, frameRate);

		// Show new comp
		comp.openInViewer();

		// Add audio layer
		comp.layers.add(audioFileFootage);

		// Add super mouth layer
		var superMouthLayer = comp.layers.add(superMouthComp);
		superMouthLayer.timeRemapEnabled = true;
		superMouthLayer.outPoint = comp.duration;

		var superTimeRemap = superMouthLayer['Time Remap'];
		//superTimeRemap.removeKey(1);
		superTimeRemap.removeKey(2);

		for(var i = 1; i < mouthCues.mouthCues.length; i++){
			var prev = mouthCues.mouthCues[i-1];
			var curr = mouthCues.mouthCues[i];

			var startLipFrame = 0;
			var endLipFrame = 0;
			var transFrame = 6;
			if(lipsync[prev.value + '_' + curr.value]){
				startLipFrame = lipsync[prev.value + '_' + curr.value].start;
				endLipFrame = lipsync[prev.value + '_' + curr.value].end;
				transFrame = endLipFrame - startLipFrame;
			}else{
				startLipFrame = lipsync[curr.value + '_' + prev.value].end;
				endLipFrame = lipsync[curr.value + '_' + prev.value].start;
				transFrame = startLipFrame - endLipFrame;
			}

			if(transFrame < 0){
				transFrame = -transFrame;
			}else if(transFrame == 0){
				transFrame = 6;
			}

			var startLipTime = startLipFrame !== 0 ? frameToTime(startLipFrame, superMouthComp) : 0;
			var endLipTime = endLipFrame !== 0 ? frameToTime(endLipFrame, superMouthComp) : 0;

			var prevFrame = Math.floor(timeToFrame(prev.start, comp)) + 1;
			var prevTime = prevFrame !== 0 ? frameToTime(prevFrame - epsilon, comp) : 0;

			var currFrame = Math.floor(timeToFrame(curr.start, comp));
			var currTime = currFrame !== 0 ? frameToTime(currFrame - epsilon, comp) : 0;

			if(i == 1){
				superTimeRemap.setValueAtTime(0, startLipTime);
			}

			if(prevFrame < currFrame){
				superTimeRemap.setValueAtTime(prevTime, startLipTime);
			}

			if(prevFrame < currFrame - transFrame){
				prevFrame = currFrame - transFrame;
				prevTime = prevFrame !== 0 ? frameToTime(prevFrame - epsilon, comp) : 0;
				superTimeRemap.setValueAtTime(prevTime, startLipTime);
			}

			//superTimeRemap.setValueAtTime(prevTime, startLipTime);
			superTimeRemap.setValueAtTime(currTime, endLipTime);
		}
	}

	function animate(audioFileFootage, dialogText, superMouthComp,extendedMouthShapeNames,
		targetProjectFolder, frameRate)
	{
		try {
			var mouthCues = generateMouthCues(audioFileFootage, dialogText,
				extendedMouthShapeNames, targetProjectFolder, frameRate);

			app.beginUndoGroup(appName + ': Animation');
			animateMouthCues(mouthCues, audioFileFootage, superMouthComp, targetProjectFolder,
				frameRate);
			app.endUndoGroup();
		} catch (e) {
			Window.alert(e.message, appName, true);
			return;
		}
	}

	// Handle changes
	update();
	controls.audioFile.onChange = update;
	controls.dialogText.onChanging = update;
	controls.superMouthComp.onChange = update;
	extendedMouthShapeNames.forEach(function(shapeName) {
		controls['mouthShape' + shapeName].onClick = update;
	});
	controls.targetFolder.onChange = update;
	controls.frameRate.onChanging = update;
	controls.autoFrameRate.onClick = update;

	// Handle animation
	controls.animateButton.onClick = function() {
		var validationError = validate();
		if (typeof validationError === 'string') {
			if (validationError) {
				Window.alert(validationError, appName, true);
			}
		} else {
			window.close();
			animate(
				controls.audioFile.selection.projectItem,
				controls.dialogText.text || '',
				controls.superMouthComp.selection.projectItem,
				extendedMouthShapeNames.filter(function(shapeName) {
					return controls['mouthShape' + shapeName].value;
				}),
				controls.targetFolder.selection.projectItem,
				Number(controls.frameRate.text)
			);
		}
	};

	// Handle cancelation
	controls.cancelButton.onClick = function() {
		window.close();
	};

	return window;
}

function checkPreconditions() {
	if (!canWriteFiles()) {
		Window.alert('This script requires file system access.\n\n'
			+ 'Please enable Preferences > General > Allow Scripts to Write Files and Access Network.',
			appName, true);
		return false;
	}
	return true;
}

if (checkPreconditions()) {
	createDialogWindow().show();
}
