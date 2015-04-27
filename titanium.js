{
    "Font": {
        "textStyle": {
            "!doc": "The text style for the font.",
            "!type": "string"
        },
        "fontStyle": {
            "!doc": "Font style. Valid values are \"italic\" or \"normal\".",
            "!type": "string"
        },
        "fontFamily": {
            "!doc": "Specifies the font family or specific font to use.",
            "!type": "string"
        },
        "!doc": "An abstract datatype for specifying a text font.",
        "fontWeight": {
            "!doc": "Font weight. Valid values are \"bold\" or \"normal\".",
            "!type": "string"
        },
        "fontSize": {
            "!doc": "Font size, in platform-dependent units.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Font"
    },
    "CloudPostsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPostsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "posts": {
                "!doc": "Set of `posts` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "MapLocationType": {
        "!doc": "Simple object used as an argument to [setLocation](Titanium.Map.View.setLocation).\n",
        "longitude": {
            "!doc": "Longitude value for the center point of the map, in decimal degrees.",
            "!type": "numder"
        },
        "latitudeDelta": {
            "!doc": "The amount of north-to-south distance displayed on the map, measured in decimal degrees.",
            "!type": "numder"
        },
        "regionFit": {
            "!doc": "If `true`, the specified region is modified to fit the aspect ratio of the\nmap view, while remaining centered on `latitude`,`longitude`.\n",
            "!type": "bool"
        },
        "latitude": {
            "!doc": "Latitude value for the center point of the map, in decimal degrees.",
            "!type": "numder"
        },
        "longitudeDelta": {
            "!doc": "The amount of east-to-west distance displayed on the map, measured in decimal degrees.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MapLocationType",
        "animate": {
            "!doc": "Set to `true` to animate the move to the new location.",
            "!type": "bool"
        }
    },
    "!doc": "The APIs that reside in the global scope, which may be called without a namespace prefix.",
    "DecodeStringDict": {
        "!doc": "Named parameters for <Titanium.Codec.decodeString>.",
        "charset": {
            "!doc": "Character set to use when encoding this string to bytes.",
            "!type": "string"
        },
        "source": {
            "!doc": "Buffer to decode.",
            "!type": "+Titanium.Buffer"
        },
        "length": {
            "!doc": "Number of bytes to decode.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/DecodeStringDict",
        "position": {
            "!doc": "Index in the `source` buffer of the first byte of data to decode.",
            "!type": "numder"
        }
    },
    "APSConnectionDelegate": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/APSConnectionDelegate",
        "!doc": "An extension of the [NSURLConnectionDelegate](https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLConnectionDelegate_Protocol/Reference/Reference.html#//apple_ref/occ/intf/NSURLConnectionDelegate) protocol to allow users to participate in authentication and resource management for this HTTPClient."
    },
    "hideStatusBarParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/hideStatusBarParams",
        "!doc": "Dictionary of options for the <Titanium.UI.iPhone.hideStatusBar> method.",
        "animated": {
            "!doc": "Determines whether to animate the dialog as it is hidden.",
            "!type": "bool"
        },
        "animationStyle": {
            "!doc": "Style of the animation.",
            "!type": "numder"
        }
    },
    "CameraOptionsType": {
        "videoQuality": {
            "!doc": "Constant to indicate the video quality during capture.",
            "!type": "numder"
        },
        "inPopOver": {
            "!doc": "Show the camera in a popover.",
            "!type": "bool"
        },
        "saveToPhotoGallery": {
            "!doc": "Specifies if the media should be saved to the photo gallery upon successful capture.",
            "!type": "bool"
        },
        "success": {
            "!doc": "Function to call when the camera is closed after a successful capture/selection.",
            "!type": "+Callback<CameraMediaItemType>"
        },
        "overlay": {
            "!doc": "View to added as an overlay to the camera UI (on top).",
            "!type": "+Titanium.UI.View"
        },
        "!doc": "Simple object for specifying options to [showCamera](Titanium.Media.showCamera).",
        "popoverView": {
            "!doc": "View to position the camera or photo gallery popover on top of.",
            "!type": "+Titanium.UI.View"
        },
        "transform": {
            "!doc": "Transformation matrix to apply to the camera or photogallery view.",
            "!type": "+Titanium.UI.2DMatrix"
        },
        "showControls": {
            "!doc": "Indicates if the built-in camera controls should be displayed.",
            "!type": "bool"
        },
        "cancel": {
            "!doc": "Function to call if the user presses the cancel button.",
            "!type": "+Callback<FailureResponse>"
        },
        "arrowDirection": {
            "!doc": "Controls the type of arrow and position of the popover.",
            "!type": "numder"
        },
        "autohide": {
            "!doc": "Specifies if the camera should be hidden automatically after the media capture is completed.",
            "!type": "bool"
        },
        "autorotate": {
            "!doc": "Determines if the camera preview should rotate or not.",
            "!type": "bool"
        },
        "error": {
            "!doc": "Function to call upon receiving an error.",
            "!type": "+Callback<FailureResponse>"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CameraOptionsType",
        "videoMaximumDuration": {
            "!doc": "Maximum duration (in milliseconds) to allow video capture before completing.",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Specifies if the dialog should be animated upon showing and hiding.",
            "!type": "bool"
        },
        "allowEditing": {
            "!doc": "Specifies if the media should be editable after capture/selection.",
            "!type": "bool"
        },
        "mediaTypes": {
            "!doc": "Array of media type constants to allow.",
            "!type": "[string]"
        }
    },
    "console": {
        "info": {
            "!doc": "Log a message at the `info` level.",
            "!type": "fn(message: +Object)"
        },
        "log": {
            "!doc": "Log a message at the `info` level.",
            "!type": "fn(message: +Object)"
        },
        "!doc": "Console logging facilities.",
        "warn": {
            "!doc": "Log a message at the `warn` level.",
            "!type": "fn(message: +Object)"
        },
        "debug": {
            "!doc": "Log a message at the `debug` level.",
            "!type": "fn(message: +Object)"
        },
        "error": {
            "!doc": "Log a message at the `error` level.",
            "!type": "fn(message: +Object)"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Global.console"
    },
    "MatrixCreationDict": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MatrixCreationDict",
        "!doc": "Simple object passed to <Titanium.UI.create2DMatrix> to initialize a matrix.",
        "scale": {
            "!doc": "Scale the matrix by the specified scaling factor. The same scaling factor is used\nfor both horizontal and vertical scaling.\n",
            "!type": "numder"
        },
        "anchorPoint": {
            "!doc": "Point to rotate around, specified as a dictionary object with `x` and `y`\nproperties, where { x: 0.5, y: 0.5 } represents the center of whatever is being\nrotated.\n",
            "!type": "+Dictionary"
        },
        "rotate": {
            "!doc": "Rotation angle, in degrees. See the [rotate](Titanium.UI.2DMatrix.rotate) method\nfor a discussion of rotation.\n",
            "!type": "numder"
        }
    },
    "TableViewIndexEntry": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/TableViewIndexEntry",
        "!doc": "A simple object that represents an index entry in a `TableView`.",
        "index": {
            "!doc": "Row index associated with this item.",
            "!type": "numder"
        },
        "title": {
            "!doc": "Title to display in the index bar for this item.",
            "!type": "string"
        }
    },
    "FacebookRESTResponsev1": {
        "success": {
            "!doc": "Indicates if the request succeeded.",
            "!type": "bool"
        },
        "!doc": "Argument passed to the REST API callback when a request completes (successfully\nor unsuccessfully).\n",
        "result": {
            "!doc": "JSON response returned by Facebook.",
            "!type": "string"
        },
        "error": {
            "!doc": "Error message, if request failed.",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/FacebookRESTResponsev1",
        "method": {
            "!doc": "REST method call you specified.",
            "!type": "string"
        }
    },
    "RowActionType": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/RowActionType",
        "!doc": "Represents the custom edit action for a ListItem.",
        "style": {
            "!doc": "The style of the row action.",
            "!type": "numder"
        },
        "color": {
            "!doc": "The background color of the row action.",
            "!type": "string"
        },
        "title": {
            "!doc": "The title of the row action.",
            "!type": "string"
        }
    },
    "CloudSocialIntegrationsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudSocialIntegrationsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "users": {
                "!doc": "Set of `users` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "ListDataItem": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ListDataItem",
        "!doc": "Represents displayed item data.",
        "properties": {
            "!doc": "Contains key-value pairs of view properties and their values that are applied to the\n`ListItem`.\n",
            "!type": "+Dictionary<Titanium.UI.ListItem>"
        },
        "template": {
            "!doc": "Template ID configured with the <Titanium.UI.ListView.templates> property or\n<Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT>.\n",
            "!type": "string"
        }
    },
    "ListViewContentInsetOption": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ListViewContentInsetOption",
        "!doc": "Optional parameter for [setContentInsets](Titanium.UI.ListView.setContentInsets) method.",
        "duration": {
            "!doc": "The duration in `milliseconds` for animation while the content inset is  being changed.",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Determines whether the list view's content inset change is animated.",
            "!type": "bool"
        }
    },
    "ItemTemplate": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ItemTemplate",
        "!doc": "Template that represents the basic appearance of a list item.",
        "childTemplates": {
            "!doc": "Contains an array of subview templates to be added (in order) as children to this view.\n",
            "!type": "[+ViewTemplate]"
        },
        "properties": {
            "!doc": "Contains key-value pairs of view properties and their values that are applied to the ListItem.",
            "!type": "+Dictionary<Titanium.UI.ListItem>"
        },
        "events": {
            "!doc": "Contains key-value pairs of view events and their listeners that are applied to the ListItem.",
            "!type": "+Dictionary"
        }
    },
    "MovieSize": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MovieSize",
        "!doc": "Simple object used to describe the size of a movie.",
        "height": {
            "!doc": "Height of the movie.",
            "!type": "numder"
        },
        "width": {
            "!doc": "Width of the movie.",
            "!type": "numder"
        }
    },
    "titleAttributesParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/titleAttributesParams",
        "!doc": "Dictionary of options for the <Titanium.UI.Window.titleAttributes> property.",
        "shadow": {
            "!doc": "Shadow color and offset for the window title.",
            "!type": "+shadowDict"
        },
        "font": {
            "!doc": "Font to use for the window title.",
            "!type": "+Font"
        },
        "color": {
            "!doc": "Color of the window title, as a color name or hex triplet.",
            "!type": "string"
        }
    },
    "MapRegionType": {
        "!doc": "Simple object representing a map location and zoom level.",
        "longitude": {
            "!doc": "Longitude value for the center point of the map, in decimal degrees.",
            "!type": "numder"
        },
        "latitudeDelta": {
            "!doc": "The amount of north-to-south distance displayed on the map, measured in decimal degrees.",
            "!type": "numder"
        },
        "latitude": {
            "!doc": "Latitude value for the center point of the map, in decimal degrees.",
            "!type": "numder"
        },
        "longitudeDelta": {
            "!doc": "The amount of east-to-west distance displayed on the map, measured in decimal degrees.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MapRegionType"
    },
    "L": {
        "!doc": "An alias for <Titanium.Locale.getString>.",
        "!type": "fn(key: string, hint: string) -> string"
    },
    "CropRectType": {
        "y": {
            "!doc": "Y coordinate of the crop rectangle's upper-left corner.",
            "!type": "numder"
        },
        "!doc": "Simple object for describing the crop rectangle for an image.",
        "height": {
            "!doc": "Height of the crop rectangle, in pixels.",
            "!type": "numder"
        },
        "width": {
            "!doc": "Width of the crop rectangle, in pixels.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CropRectType",
        "x": {
            "!doc": "X coordinate of the crop rectangle's upper-left corner.",
            "!type": "numder"
        }
    },
    "ListViewIndexEntry": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ListViewIndexEntry",
        "!doc": "A simple object that represents an index entry in a `ListView`.",
        "index": {
            "!doc": "Section index associated with this title.",
            "!type": "numder"
        },
        "title": {
            "!doc": "Title to display in the index bar.",
            "!type": "string"
        }
    },
    "LocationResults": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/LocationResults",
        "!doc": "Argument passed to the [getCurrentPosition](Titanium.Geolocation.getCurrentPosition) callback.\n",
        "prototype": {
            "!proto": "ErrorResponse.prototype",
            "coords": {
                "!doc": "If `success` is true, actual location data for this update.",
                "!type": "+LocationCoordinates"
            },
            "provider": {
                "!doc": "If `success` is true, object describing the location provider generating this update.",
                "!type": "+LocationProviderDict"
            }
        }
    },
    "HeadingResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/HeadingResponse",
        "!doc": "Argument passed to the [getCurrentHeading](Titanium.Geolocation.getCurrentHeading) callback.\n",
        "prototype": {
            "code": {
                "!doc": "Error code.",
                "!type": "numder"
            },
            "!proto": "ErrorResponse.prototype",
            "heading": {
                "!doc": "If `success` is true, the actual heading data.",
                "!type": "+HeadingData"
            },
            "success": {
                "!doc": "Indicates a successful operation.",
                "!type": "bool"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "CloudStreamProgress": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudStreamProgress",
        "!doc": "Argument passed to the callback as a request is transmitted or received.",
        "url": {
            "!doc": "The URL for the request, to help identify it.",
            "!type": "string"
        },
        "progress": {
            "!doc": "A value from 0.0-1.0 with the progress of the exchange.",
            "!type": "numder"
        }
    },
    "CloudPushNotificationsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype"
        }
    },
    "textFieldSelectedParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/textFieldSelectedParams",
        "!doc": "Dictionary object of parameters for the <Titanium.UI.TextField.selection> property that describes \nposition and length of the selected text.\n",
        "length": {
            "!doc": "Number of characters selected.",
            "!type": "numder"
        },
        "location": {
            "!doc": "Starting position of selected text.",
            "!type": "numder"
        }
    },
    "zoomScaleOption": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/zoomScaleOption",
        "!doc": "Optional parameter for [setZoomScale](Titanium.UI.ScrollView.setZoomScale) method.",
        "animated": {
            "!doc": "Determines whether the scroll view's zooming is animated.",
            "!type": "bool"
        }
    },
    "MusicLibraryResponseType": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MusicLibraryResponseType",
        "!doc": "Simple object passed to the [openMusicLibrary](Titanium.Media.openMusicLibrary)\n`success` callback function.\n",
        "representative": {
            "!doc": "A single representative of the selected items.",
            "!type": "+Titanium.Media.Item"
        },
        "types": {
            "!doc": "Media types in this collection, represented as the bitwise OR of the media type\nvalues for all media types represented in `items`.\n",
            "!type": "numder"
        },
        "items": {
            "!doc": "A list of all the items chosen by the user.",
            "!type": "+Array<Titanium.Media.Item>"
        }
    },
    "ListViewEdgeInsets": {
        "right": {
            "!doc": "Value specifying the right insets for the enclosing scroll view of the list view.",
            "!type": "numder"
        },
        "bottom": {
            "!doc": "Value specifying the bottom insets for the enclosing scroll view of the list view.",
            "!type": "numder"
        },
        "!doc": "The parameter for [setContentInsets](Titanium.UI.TableView.setContentInsets) method.",
        "top": {
            "!doc": "Value specifying the top insets for the enclosing scroll view of the list view.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ListViewEdgeInsets",
        "left": {
            "!doc": "Value specifying the left insets for the enclosing scroll view of the list view.",
            "!type": "numder"
        }
    },
    "CloudEmailsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudEmailsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype"
        }
    },
    "recurrenceEndDictionary": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/recurrenceEndDictionary",
        "!doc": "Dictionary containing either `endDate` or `occurrenceCount` property.",
        "occurrenceCount": {
            "!doc": "Occurrence count of the recurrence end, or 0 if the recurrence end is date-based.",
            "!type": "numder"
        },
        "endDate": {
            "!doc": "End date of the recurrence end, or undefined if the recurrence end is count-based.",
            "!type": "+Date"
        }
    },
    "RouteDescription": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/RouteDescription",
        "!doc": "An Object describing the current audio route.",
        "outputs": {
            "!doc": "An Array of current output ports for the session. See the `AUDIO_SESSION_PORT` constants.",
            "!type": "[+Object]"
        },
        "inputs": {
            "!doc": "An Array of current input ports for the session. See the `AUDIO_SESSION_PORT` constants.",
            "!type": "[+Object]"
        }
    },
    "ViewTemplate": {
        "childTemplates": {
            "!doc": "Contains an array of subview templates to be added (in order) as children to this view.\n",
            "!type": "[+ViewTemplate]"
        },
        "bindId": {
            "!doc": "View's ID (or set of IDs) used for data binding. This value must be unique.",
            "!type": "string"
        },
        "!doc": "Template that represents a view subcomponent of an <ItemTemplate>.",
        "events": {
            "!doc": "Contains key-value pairs of view events and their listeners that are applied to this view component.\n",
            "!type": "+Dictionary"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ViewTemplate",
        "type": {
            "!doc": "View's class name, for example, `Ti.UI.Button`.",
            "!type": "string"
        },
        "properties": {
            "!doc": "Contains key-value pairs of view properties and their values that are applied to this view component.\n",
            "!type": "+Dictionary"
        }
    },
    "Attribute": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Attribute",
        "!doc": "An abstract datatype for specifying an attributed string attribute.",
        "range": {
            "!doc": "Attribute range.",
            "!type": "[numder]"
        },
        "type": {
            "!doc": "Attribute to apply to the text.",
            "!type": "numder"
        },
        "value": {
            "!doc": "Attribute value.",
            "!type": "numder"
        }
    },
    "hideParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/hideParams",
        "!doc": "Dictionary of options for the <Titanium.UI.OptionDialog.hide> method.",
        "animated": {
            "!doc": "Determines whether to animate the dialog as it is dismissed.",
            "!type": "bool"
        }
    },
    "SuccessResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/SuccessResponse",
        "!doc": "Properties used in any event or callback which needs to report a success.",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0.",
                "!type": "numder"
            },
            "!proto": "ErrorResponse.prototype",
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `true`.",
                "!type": "bool"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "require": {
        "!doc": "Loads either a native Titanium module or a CommonJS module.",
        "!type": "fn(moduleId: string) -> +Object"
    },
    "CloudPushNotificationsQueryResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationsQueryResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "subscriptions": {
                "!doc": "Set of `subscription` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "clearInterval": {
        "!doc": "Cancels an interval timer.",
        "!type": "fn(timerId: numder)"
    },
    "CloudPlacesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPlacesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "places": {
                "!doc": "Set of `places` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "BarItemType": {
        "title": {
            "!doc": "Button title, used if no `image` is specified.",
            "!type": "string"
        },
        "!doc": "Object describing a button bar or tabbed bar item.",
        "image": {
            "!doc": "Button icon. If specified, takes precedence over `title`.",
            "!type": "string"
        },
        "enabled": {
            "!doc": "Whether the button is enabled initially.",
            "!type": "bool"
        },
        "width": {
            "!doc": "Width for this button.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/BarItemType",
        "accessibilityLabel": {
            "!doc": "A succint label associated with the bar item for the device's accessibility service.",
            "!type": "string"
        }
    },
    "CloudGeoFenceResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudGeoFenceResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "geo_fences": {
                "!doc": "Set of geo-fence objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "ScreenshotResult": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ScreenshotResult",
        "!doc": "The parameter passed to the <Titanium.Media.takeScreenshot> callback.",
        "media": {
            "!doc": "The screenshot image.",
            "!type": "+Titanium.Blob"
        }
    },
    "EncodeNumberDict": {
        "dest": {
            "!doc": "Destination buffer.",
            "!type": "+Titanium.Buffer"
        },
        "!doc": "Named parameters for <Titanium.Codec.encodeNumber>.",
        "source": {
            "!doc": "Number to encode.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/EncodeNumberDict",
        "position": {
            "!doc": "Index in the `dest` buffer of the first byte of encoded data.",
            "!type": "numder"
        },
        "type": {
            "!doc": "Encoding type to use.",
            "!type": "string"
        },
        "byteOrder": {
            "!doc": "Byte order to encode with.",
            "!type": "numder"
        }
    },
    "CloudUsersResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudUsersResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "users": {
                "!doc": "Set of `user` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "TableViewContentInsetOption": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/TableViewContentInsetOption",
        "!doc": "Optional parameter for [setContentInsets](Titanium.UI.TableView.setContentInsets) method.",
        "duration": {
            "!doc": "The duration in `milleseconds` for animation while the content inset is  being changed.",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Determines whether the table view's content inset change is animated.",
            "!type": "bool"
        }
    },
    "CloudCheckinsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudCheckinsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "checkins": {
                "!doc": "Set of `checkins` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "showContactsParams": {
        "!doc": "Dictionary of options for the <Titanium.Contacts.showContacts> method.",
        "selectedProperty": {
            "!doc": "Function to call when a property is selected. Must not be used with `selectedPerson` \nproperty.\nNote: If ringtone or texttone is selected, null values are returned, since these are unsupported\nby Apple.\n",
            "!type": "+Callback<Object>"
        },
        "cancel": {
            "!doc": "Function to call when selection is canceled.",
            "!type": "+Callback<Object>"
        },
        "fields": {
            "!doc": "Field names to show when selecting properties. By default, shows all available.",
            "!type": "[string]"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/showContactsParams",
        "selectedPerson": {
            "!doc": "Function to call when a person is selected. Must not be used with `selectedProperty` property.\n",
            "!type": "+Callback<Object>"
        },
        "animated": {
            "!doc": "Determines whether to animate the show/hide of the contacts picker (iPhone, iPad only.)",
            "!type": "bool"
        }
    },
    "String": {
        "formatDecimal": {
            "!doc": "Formats a number into the decimal format, including decimal symbol, of the locale \nconfigured for the system.\n",
            "!type": "fn(value: numder, locale: string, pattern: string) -> string"
        },
        "format": {
            "!doc": "Formats a string using `printf`-style substitution.",
            "!type": "fn(formatString: string, value: string) -> string"
        },
        "!doc": "The JavaScript built-in String type.",
        "formatTime": {
            "!doc": "Formats a date into the time format of the locale configured for the system.",
            "!type": "fn(date: +Date, format: string) -> string"
        },
        "formatDate": {
            "!doc": "Formats a date into the date format of the locale configured for the system.",
            "!type": "fn(date: +Date, format: string) -> string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Global.String",
        "formatCurrency": {
            "!doc": "Formats a number into the currency format, including currency symbol, of the locale \nconfigured for the system.\n",
            "!type": "fn(value: numder) -> string"
        }
    },
    "CloudFriendRequestsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudFriendRequestsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "friend_requests": {
                "!doc": "Set of `user` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "LocationProviderDict": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/LocationProviderDict",
        "!doc": "Simple object describing a location provider.",
        "name": {
            "!doc": "Name of the location provider.",
            "!type": "string"
        },
        "power": {
            "!doc": "Power consumption for this provider, either low (1), medium (2), or high (3).\n",
            "!type": "numder"
        },
        "accuracy": {
            "!doc": "Accuracy of the location provider, either fine (1) or coarse (2).\n",
            "!type": "numder"
        }
    },
    "CreateBufferArgs": {
        "!doc": "Arguments to be passed to createBuffer",
        "value": {
            "!doc": "An initial value which will be encoded and placed in the buffer. If value is a Number, type must also be set. (this is simply a convenient way of calling <Titanium.Codec.encodeString> or <Titanium.Codec.encodeNumber> and placing the encoded value in the returned buffer.)",
            "!type": "string"
        },
        "length": {
            "!doc": "The length of the buffer.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CreateBufferArgs",
        "type": {
            "!doc": "The type of data encoding to use with `value`.",
            "!type": "string"
        },
        "byteOrder": {
            "!doc": "The byte order of this buffer.",
            "!type": "numder"
        }
    },
    "CloudACLsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudACLsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "acls": {
                "!doc": "Set of ACL objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "HeadingData": {
        "x": {
            "!doc": "Raw geomagnetic data for the X axis.",
            "!type": "numder"
        },
        "timestamp": {
            "!doc": "Timestamp for the heading data, in milliseconds.",
            "!type": "numder"
        },
        "!doc": "Simple object holding compass heading data.",
        "y": {
            "!doc": "Raw geomagnetic data for the Y axis.",
            "!type": "numder"
        },
        "magneticHeading": {
            "!doc": "Declination in degrees from magnetic North.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/HeadingData",
        "trueHeading": {
            "!doc": "Declination in degrees from true North.",
            "!type": "numder"
        },
        "z": {
            "!doc": "Raw geomagnetic data for the Z axis.",
            "!type": "numder"
        },
        "accuracy": {
            "!doc": "Accuracy of the compass heading, in platform-specific units.",
            "!type": "numder"
        }
    },
    "PhotoGalleryOptionsType": {
        "success": {
            "!doc": "Function to call when the photogallery is closed after a successful selection.",
            "!type": "+Callback<CameraMediaItemType>"
        },
        "!doc": "Simple object for specifying options to \n[openPhotoGallery](Titanium.Media.openPhotoGallery).\n",
        "popoverView": {
            "!doc": "View to position the photo gallery popover on top of.",
            "!type": "+Titanium.UI.View"
        },
        "cancel": {
            "!doc": "Function to call if the user presses the cancel button.",
            "!type": "+Callback<FailureResponse>"
        },
        "arrowDirection": {
            "!doc": "Controls the type of arrow and position of the popover.",
            "!type": "numder"
        },
        "autohide": {
            "!doc": "Specifies if the photo gallery should be hidden automatically after the media selection is completed.",
            "!type": "bool"
        },
        "error": {
            "!doc": "Function to call upon receiving an error.",
            "!type": "+Callback<FailureResponse>"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PhotoGalleryOptionsType",
        "animated": {
            "!doc": "Specifies if the dialog should be animated upon showing and hiding.",
            "!type": "bool"
        },
        "allowEditing": {
            "!doc": "Specifies if the media should be editable after capture/selection.",
            "!type": "bool"
        },
        "mediaTypes": {
            "!doc": "Array of media type constants to allow.\n",
            "!type": "[string]"
        }
    },
    "FacebookDialogResponsev1": {
        "success": {
            "!doc": "Indicates if the request succeeded.",
            "!type": "bool"
        },
        "!doc": "Argument passed to the dialog callback when a dialog is completed or canceled.",
        "cancelled": {
            "!doc": "Indicates if the user canceled the dialog.",
            "!type": "bool"
        },
        "result": {
            "!doc": "JSON response containing the `post_id` of the new post, if successful.\n`undefined` if the user canceled the dialog.\n",
            "!type": "string"
        },
        "error": {
            "!doc": "Error message, if request failed.",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/FacebookDialogResponsev1"
    },
    "CloudPushNotificationConfig": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationConfig",
        "!doc": "Simple object for specifying token retrieval options to [retrieveDeviceToken](Modules.CloudPush.retrieveDeviceToken).\n",
        "success": {
            "!doc": "Callback function called when the push registration is successfully completed.\n",
            "!type": "+Callback<CloudPushNotificationSuccessArg>"
        },
        "error": {
            "!doc": "Callback function called when an error occurs during registration.\n",
            "!type": "+Callback<CloudPushNotificationErrorArg>"
        }
    },
    "CloudFilesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudFilesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "files": {
                "!doc": "Set of `file` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "textAreaSelectedParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/textAreaSelectedParams",
        "!doc": "Dictionary object of parameters for the <Titanium.UI.TextArea.selected> event and <Titanium.UI.TextArea.selection> property that describes \nposition and length of the selected text.\n",
        "length": {
            "!doc": "Number of characters selected.",
            "!type": "numder"
        },
        "location": {
            "!doc": "Starting position of selected text.",
            "!type": "numder"
        }
    },
    "Modules": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules",
        "!doc": "Optional Titanium modules.",
        "CloudPush": {
            "showTrayNotification": {
                "!doc": "Whether or not to show a tray notification when a new push is received.",
                "!type": "bool"
            },
            "singleCallback": {
                "!doc": "Set to true to trigger a single callback for the selected push notification when multiple push notifications are displayed in the tray.",
                "!type": "bool"
            },
            "SERVICE_DISABLED": {
                "!doc": "Code returned from <Modules.CloudPush.isGooglePlayServicesAvailable>. Google Play services has been disabled on this device.",
                "!type": "numder"
            },
            "focusAppOnPush": {
                "!doc": "Whether or not your application is brought to the foreground whenever a new push is received.",
                "!type": "bool"
            },
            "SUCCESS": {
                "!doc": "Code returned from <Modules.CloudPush.isGooglePlayServicesAvailable>. Google Play services is available, and the connection is successful.",
                "!type": "numder"
            },
            "!doc": "Provides support for Android push notifications.\n",
            "showAppOnTrayClick": {
                "!doc": "Whether or not clicking the tray notification will bring your application to the foreground.",
                "!type": "bool"
            },
            "enabled": {
                "!doc": "Whether or not this device will receive push notifications.",
                "!type": "bool"
            },
            "SERVICE_INVALID": {
                "!doc": "Code returned from <Modules.CloudPush.isGooglePlayServicesAvailable>. The version of Google Play services installed on this device is not authentic.",
                "!type": "numder"
            },
            "showTrayNotificationsWhenFocused": {
                "!doc": "Whether or not to show tray notifications when your application is in the foreground.",
                "!type": "bool"
            },
            "SERVICE_MISSING": {
                "!doc": "Code returned from <Modules.CloudPush.isGooglePlayServicesAvailable>. Google Play services is not installed on the device.",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.CloudPush",
            "retrieveDeviceToken": {
                "!doc": "Asynchronously retrieves the application specific device token.",
                "!type": "fn(config: +CloudPushNotificationConfig)"
            },
            "SERVICE_VERSION_UPDATE_REQUIRED": {
                "!doc": "Code returned from <Modules.CloudPush.isGooglePlayServicesAvailable>. Google Play services is out of date.",
                "!type": "numder"
            },
            "clearStatus": {
                "!doc": "Clears the CloudPush module's stored status, including the push type, device token, GCM sender ID, etc.",
                "!type": "fn()"
            },
            "isGooglePlayServicesAvailable": {
                "!doc": "Returns a code to indicate whether Google Play Services is available on the device.",
                "!type": "fn() -> numder"
            }
        },
        "Cloud": {
            "!doc": "The top level Cloud module for making calls to Arrow DB and Push.",
            "SocialIntegrations": {
                "externalAccountUnlink": {
                    "!doc": "Disassociate an external account from a Arrow DB user account.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudSocialIntegrationsResponse>)"
                },
                "!doc": "Provides methods for access Arrow DB social integrations.",
                "searchFacebookFriends": {
                    "!doc": "Returns a list of the current user's Facebook friends who are also using this application.",
                    "!type": "fn(callback: +Callback<CloudSocialIntegrationsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.SocialIntegrations",
                "externalAccountLogin": {
                    "!doc": "Login to Arrow DB using an external account such as Facebook, Twitter,LinkedIn, etc.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudSocialIntegrationsResponse>)"
                },
                "externalAccountLink": {
                    "!doc": "Associate an external account with an existing Arrow DB user account.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudSocialIntegrationsResponse>)"
                }
            },
            "PushNotifications": {
                "resetBadge": {
                    "!doc": "Resets the badge value to zero but does not update it on the device.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "subscribeToken": {
                    "!doc": "Subscribe a mobile device to a push notification channel using a device token.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "notifyTokens": {
                    "!doc": "Send a push notification to a channel to the specified devices.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow push notification channels.",
                "subscribe": {
                    "!doc": "Subscribe a mobile device to a push notification channel.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "showChannels": {
                    "!doc": "Returns the number of devices subscribed to the specified channel.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsShowChannelResponse>)"
                },
                "setBadge": {
                    "!doc": "Sets the badge value but does not update it on the device.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "updateSubscription": {
                    "!doc": "Updates a user's notification subscription with the device's location.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "unsubscribe": {
                    "!doc": "Unsubscribe a mobile device from a push notification channel.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "notify": {
                    "!doc": "Send a push notification to a channel.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                },
                "query": {
                    "!doc": "Custom query of push notification subscriptions with paginating.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsQueryResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.PushNotifications",
                "queryChannels": {
                    "!doc": "Returns a list of push notification channels the user is subscribed to.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsQueryChannelResponse>)"
                },
                "unsubscribeToken": {
                    "!doc": "Unsubscribe a mobile device from a push notification channel using a device token.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushNotificationsResponse>)"
                }
            },
            "sendRequest": {
                "!doc": "Makes a REST API call to the Arrow DB server.",
                "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudResponse>) -> +void"
            },
            "Events": {
                "search": {
                    "!doc": "Retrieve a list of events with full text search.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventsResponse>)"
                },
                "show": {
                    "!doc": "Retrieve a list of events.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventsResponse>)"
                },
                "showOccurrences": {
                    "!doc": "Retrieve a list of event occurrences for a given event.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventOccurrencesResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB events.",
                "create": {
                    "!doc": "Create a new event.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventsResponse>)"
                },
                "update": {
                    "!doc": "Update information about a event.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventsResponse>)"
                },
                "remove": {
                    "!doc": "Delete a event.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventsResponse>)"
                },
                "searchOccurrences": {
                    "!doc": "Retrieve a list of event occurrences with full text search.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventOccurrencesResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Events",
                "query": {
                    "!doc": "Retrieve a list of events with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventsResponse>)"
                },
                "queryOccurrences": {
                    "!doc": "Retrieve a list of event occurrences with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEventOccurrencesResponse>)"
                }
            },
            "expiresIn": {
                "!doc": "Indicates the number of seconds before the access token expires",
                "!type": "numder"
            },
            "Users": {
                "resendConfirmation": {
                    "!doc": "Re-send a user verification email.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "search": {
                    "!doc": "Retrieve a list of users based on the specified search criteria.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "secureStatus": {
                    "!doc": "Checks if the user is authenticated with 3-Legged OAuth.",
                    "!type": "fn() -> bool"
                },
                "show": {
                    "!doc": "Show public user information.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB user objects.",
                "create": {
                    "!doc": "Create a new user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "update": {
                    "!doc": "Update the current user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "remove": {
                    "!doc": "Delete the current user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "showMe": {
                    "!doc": "Show both public and private information about the user currently logged in.",
                    "!type": "fn(callback: +Callback<CloudUsersResponse>)"
                },
                "secureLogin": {
                    "!doc": "Log in a user using 3-Legged OAuth.",
                    "!type": "fn(parameters: +Dictionary<CloudUsersSecureDialog>, callback: +Callback<CloudUsersSecureResponse>)"
                },
                "logout": {
                    "!doc": "Log out the current user.",
                    "!type": "fn(callback: +Callback<CloudUsersResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Users",
                "query": {
                    "!doc": "Retrieve a list of users with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "login": {
                    "!doc": "Log in a user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "requestResetPassword": {
                    "!doc": "Send an email to user to recover lost password.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudUsersResponse>)"
                },
                "secureCreate": {
                    "!doc": "Create a new user using 3-Legged OAuth.",
                    "!type": "fn(parameters: +Dictionary<CloudUsersSecureDialog>, callback: +Callback<CloudUsersSecureResponse>)"
                }
            },
            "Photos": {
                "search": {
                    "!doc": "Retrieve a list of photos.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotosResponse>)"
                },
                "show": {
                    "!doc": "Retrieve information about a photo.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotosResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB photos.",
                "create": {
                    "!doc": "Create or upload a new photo.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotosResponse>)"
                },
                "update": {
                    "!doc": "Update a photo.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotosResponse>)"
                },
                "remove": {
                    "!doc": "Delete a photo.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotosResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Photos",
                "query": {
                    "!doc": "Retrieve a list of photos with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotosResponse>)"
                }
            },
            "retrieveStoredSession": {
                "!doc": "Returns the stored user session identifier.",
                "!type": "fn() -> string"
            },
            "Objects": {
                "show": {
                    "!doc": "Retrieve a list of custom objects of type `classname`.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudObjectsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB custom objects.",
                "create": {
                    "!doc": "Create a custom object of type `classname`.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudObjectsResponse>)"
                },
                "update": {
                    "!doc": "Update the fields of a custom object of type `classname`.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudObjectsResponse>)"
                },
                "remove": {
                    "!doc": "Delete a custom object of type `classname`.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudObjectsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Objects",
                "query": {
                    "!doc": "Retrieve a list of custom objects of type `classname`.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudObjectsResponse>)"
                }
            },
            "GeoFences": {
                "!doc": "Provides methods for accessing Arrow DB geo-fence objects.",
                "create": {
                    "!doc": "Create a new geofence object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudGeoFenceResponse>)"
                },
                "update": {
                    "!doc": "Update information about a place.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudGeoFenceResponse>)"
                },
                "remove": {
                    "!doc": "Delete a place.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudGeoFenceResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.GeoFences",
                "query": {
                    "!doc": "Retrieve a list of places with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudGeoFenceResponse>)"
                }
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud",
            "Friends": {
                "search": {
                    "!doc": "Retrieve a list of friends.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFriendsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB friends.",
                "remove": {
                    "!doc": "Removes one or more friends from the current user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFriendsResponse>)"
                },
                "add": {
                    "!doc": "Add friends to the current user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFriendsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Friends",
                "requests": {
                    "!doc": "View pending friend requests.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFriendRequestsResponse>)"
                },
                "approve": {
                    "!doc": "Approve existing friend requests.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFriendsResponse>)"
                }
            },
            "Emails": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Emails",
                "!doc": "Provides methods for accessing Arrow DB Email service.",
                "send": {
                    "!doc": "Send an email to a list of email adresses.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudEmailsResponse>)"
                }
            },
            "Chats": {
                "!doc": "Provides methods for accessing Arrow DB chat messages.",
                "create": {
                    "!doc": "Send a chat message to another user or a group of users.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudChatsResponse>)"
                },
                "remove": {
                    "!doc": "Deletes a chat message.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudResponse>)"
                },
                "getChatGroups": {
                    "!doc": "Retrieve a list of chat groups the current user belongs to.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudChatGroupsResponse>)"
                },
                "query": {
                    "!doc": "Retrieve a list of chat messages with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudChatsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Chats",
                "queryChatGroups": {
                    "!doc": "Retrieve a list of chat groups with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudChatGroupsResponse>)"
                }
            },
            "Places": {
                "search": {
                    "!doc": "Retrieve a list of places.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPlacesResponse>)"
                },
                "show": {
                    "!doc": "Retrieve information about a place.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPlacesResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB places.",
                "create": {
                    "!doc": "Create a new place.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPlacesResponse>)"
                },
                "update": {
                    "!doc": "Update information about a place.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPlacesResponse>)"
                },
                "remove": {
                    "!doc": "Delete a place.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPlacesResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Places",
                "query": {
                    "!doc": "Retrieve a list of places with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPlacesResponse>)"
                }
            },
            "ondatastream": {
                "!doc": "Function to be called at regular intervals as the request data is being received.",
                "!type": "+Callback<CloudStreamProgress>"
            },
            "Posts": {
                "show": {
                    "!doc": "Retrieve information about a post.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPostsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB posts.",
                "create": {
                    "!doc": "Create a post.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPostsResponse>)"
                },
                "update": {
                    "!doc": "Update the information for a post.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPostsResponse>)"
                },
                "remove": {
                    "!doc": "Delete a post.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPostsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Posts",
                "query": {
                    "!doc": "Retrieve a list of posts with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPostsResponse>)"
                }
            },
            "Clients": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Clients",
                "!doc": "Provides methods for accessing Arrow DB clients.",
                "geolocate": {
                    "!doc": "Locate a mobile device based on the IP address of the device.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudClientsResponse>)"
                }
            },
            "Messages": {
                "removeThread": {
                    "!doc": "Delete all messages in a thread.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "showThread": {
                    "!doc": "Retrieve a list of messages in a thread from the current user's inbox.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "show": {
                    "!doc": "Retrieve information about a message.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB messages.",
                "create": {
                    "!doc": "Create a message.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "remove": {
                    "!doc": "Delete a message.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "showSent": {
                    "!doc": "Retrieve a list of messages in the current user's inbox.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "showInbox": {
                    "!doc": "Retrieve a list of messages in the current user's inbox.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "showThreads": {
                    "!doc": "Retrieve a list of message threads in the current users' inbox.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Messages",
                "reply": {
                    "!doc": "Reply to all recipients of a message.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudMessagesResponse>)"
                }
            },
            "KeyValues": {
                "set": {
                    "!doc": "Sets a string or binary value referenced by the key name.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudKeyValuesResponse>)"
                },
                "get": {
                    "!doc": "Retrieve a string or binary value.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudKeyValuesResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB Key-Values storage.",
                "remove": {
                    "!doc": "Delete a value.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudKeyValuesResponse>)"
                },
                "increment": {
                    "!doc": "Increment the value by the given value.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudKeyValuesResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.KeyValues",
                "append": {
                    "!doc": "Add the given value to the end of an existing value.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudKeyValuesResponse>)"
                }
            },
            "Reviews": {
                "show": {
                    "!doc": "Retrieve details of a review.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudReviewsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB reviews.",
                "create": {
                    "!doc": "Add a review, comment, rating, or like.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudReviewsResponse>)"
                },
                "update": {
                    "!doc": "Update a review.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudReviewsResponse>)"
                },
                "remove": {
                    "!doc": "Delete a review.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudReviewsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Reviews",
                "query": {
                    "!doc": "Retrieve a list of reviews with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudReviewsResponse>)"
                }
            },
            "ACLs": {
                "checkUser": {
                    "!doc": "Checks a user's permission in an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsCheckResponse>)"
                },
                "show": {
                    "!doc": "Shows an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB access control lists (ACLs).",
                "create": {
                    "!doc": "Creates an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsResponse>)"
                },
                "addUser": {
                    "!doc": "Adds one or more users to an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsResponse>)"
                },
                "update": {
                    "!doc": "Updates an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsResponse>)"
                },
                "remove": {
                    "!doc": "Deletes an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsResponse>)"
                },
                "removeUser": {
                    "!doc": "Removes one or more users from an ACL object.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudACLsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.ACLs"
            },
            "PhotoCollections": {
                "search": {
                    "!doc": "Retrieves a list of top-level collections owned by a user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsResponse>)"
                },
                "show": {
                    "!doc": "Retrieves details about a photo collection.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsResponse>)"
                },
                "!doc": "Provides methods for Arrow DB photo collections.",
                "create": {
                    "!doc": "Creates a photo collection.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsResponse>)"
                },
                "update": {
                    "!doc": "Updates a photo collection.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsResponse>)"
                },
                "remove": {
                    "!doc": "Deletes an empty collection.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsResponse>)"
                },
                "showPhotos": {
                    "!doc": "Retrieves photos in a collection.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsPhotosResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.PhotoCollections",
                "showSubCollections": {
                    "!doc": "Retrieves a list of subcollections of a collection.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPhotoCollectionsResponse>)"
                }
            },
            "accessToken": {
                "!doc": "Identifies the current access token when using 3-Legged OAuth",
                "!type": "string"
            },
            "PushSchedules": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.PushSchedules",
                "!doc": "Provides methods for scheduling Arrow push notifications",
                "create": {
                    "!doc": "Schedules a push notification.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushSchedulesResponse>)"
                },
                "remove": {
                    "!doc": "Deletes a scheduled push notification.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushSchedulesResponse>)"
                },
                "query": {
                    "!doc": "Queries the list of scheduled push notifications.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudPushSchedulesResponse>)"
                }
            },
            "Checkins": {
                "show": {
                    "!doc": "Retrieve a checkin.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudCheckinsResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB checkins.",
                "create": {
                    "!doc": "Check in to a place or event.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudCheckinsResponse>)"
                },
                "remove": {
                    "!doc": "Delete a checkin.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudCheckinsResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Checkins",
                "query": {
                    "!doc": "Retrieve a list of checkins with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudCheckinsResponse>)"
                }
            },
            "sessionId": {
                "!doc": "Identifies the current session",
                "!type": "string"
            },
            "Likes": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Likes",
                "!doc": "Provides methods for accessing Arrow DB likes.",
                "create": {
                    "!doc": "Create a like.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudLikesResponse>)"
                },
                "remove": {
                    "!doc": "Delete a like.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudLikesResponse>)"
                }
            },
            "Files": {
                "show": {
                    "!doc": "Retrieve information about a file.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFilesResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB files.",
                "create": {
                    "!doc": "Create a file.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFilesResponse>)"
                },
                "update": {
                    "!doc": "Update the information for a file.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFilesResponse>)"
                },
                "remove": {
                    "!doc": "Delete a file.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFilesResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Files",
                "query": {
                    "!doc": "Retrieve a list of files with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudFilesResponse>)"
                }
            },
            "debug": {
                "!doc": "Indicates whether internal debug logging should be output to the console.",
                "!type": "bool"
            },
            "hasStoredSession": {
                "!doc": "Checks if there is a stored user session.",
                "!type": "fn() -> bool"
            },
            "onsendstream": {
                "!doc": "Function to be called at regular intervals as the request data is being transmitted.",
                "!type": "+Callback<CloudStreamProgress>"
            },
            "Statuses": {
                "search": {
                    "!doc": "Retrieve the statuses for a user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudStatusesResponse>)"
                },
                "show": {
                    "!doc": "Shows a status.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudStatusesResponse>)"
                },
                "!doc": "Provides methods for accessing Arrow DB Statuses.",
                "create": {
                    "!doc": "Creates a status for the currently logged in user.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudStatusesResponse>)"
                },
                "update": {
                    "!doc": "Updates a status.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudStatusesResponse>)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Cloud.Statuses",
                "query": {
                    "!doc": "Retrieve a list of statuses with sorting and pagination.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudStatusesResponse>)"
                },
                "delete": {
                    "!doc": "Deletes a status.",
                    "!type": "fn(parameters: +Dictionary, callback: +Callback<CloudResponse>)"
                }
            },
            "useSecure": {
                "!doc": "Indicates whether to use SSL when sending requests to Arrow DB.",
                "!type": "bool"
            }
        }
    },
    "CloudReviewsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudReviewsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "reviews": {
                "!doc": "Set of `reviews` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "PushNotificationSuccessArg": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PushNotificationSuccessArg",
        "!doc": "A simple object passed to the \n[registerForPushNotifications](Titanium.Network.registerForPushNotifications) success callback.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0.",
                "!type": "numder"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `true`.",
                "!type": "bool"
            },
            "!proto": "SuccessResponse.prototype",
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            },
            "type": {
                "!doc": "The value of this string is always \"remote\".",
                "!type": "string"
            },
            "deviceToken": {
                "!doc": "The device token which this device was registered for.",
                "!type": "string"
            }
        }
    },
    "setTimeout": {
        "!doc": "Executes code or a function after a delay.",
        "!type": "fn(function: +Callback, delay: numder) -> numder"
    },
    "EventsAuthorizationResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/EventsAuthorizationResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "code": {
            "!doc": "Error code, if any returned.",
            "!type": "numder"
        },
        "success": {
            "!doc": "Indicates whether the request succeeded.",
            "!type": "bool"
        },
        "error": {
            "!doc": "Error message, if any returned.",
            "!type": "string"
        }
    },
    "Dimension": {
        "width": {
            "!doc": "The width measurement.",
            "!type": "numder"
        },
        "!doc": "A simple object consisting of the position and size measurements.",
        "height": {
            "!doc": "The height measurement.",
            "!type": "numder"
        },
        "y": {
            "!doc": "The y-axis coordinate of the position.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Dimension",
        "x": {
            "!doc": "The x-axis coordinate of the position.",
            "!type": "numder"
        }
    },
    "SecurityManagerProtocol": {
        "!doc": "The protocol that the <Titanium.Network.HTTPClient.securityManager> must implement.",
        "willHandleURL": {
            "!doc": "Returns if the security manager will participate in authentication of this end point.",
            "!type": "fn(url: +Object) -> bool"
        },
        "getTrustManagers": {
            "!doc": "Returns an array of objects implementing the [X509TrustManager](http://developer.android.com/reference/javax/net/ssl/X509TrustManager.html) protocol for the SSL Context.",
            "!type": "fn(proxy: +Object) -> [+Object]"
        },
        "getKeyManagers": {
            "!doc": "Returns an array of objects implementing the [X509KeyManager](http://developer.android.com/reference/javax/net/ssl/X509KeyManager.html) protocol for the SSL Context.",
            "!type": "fn(proxy: +Object) -> [+Object]"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/SecurityManagerProtocol",
        "connectionDelegateForUrl": {
            "!doc": "The <APSConnectionDelegate> for this connection.",
            "!type": "fn(url: +Object) -> +APSConnectionDelegate"
        }
    },
    "PlayerQueue": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PlayerQueue",
        "!doc": "A simple object for specifying a queue of media items.",
        "items": {
            "!doc": "An array of media items.",
            "!type": "+Array<Titanium.Media.Item>"
        }
    },
    "windowToolbarParam": {
        "!doc": "Dictionary of options for the <Titanium.UI.Window.setToolbar> method.",
        "barColor": {
            "!doc": "Background color for the toolbar, as a color name or hex triplet.",
            "!type": "string"
        },
        "tintColor": {
            "!doc": "The tintColor to apply to the tool bar. Applicable on iOS 7 and above.",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/windowToolbarParam",
        "animated": {
            "!doc": "Defines if the toolbar appearance is animated.",
            "!type": "bool"
        },
        "translucent": {
            "!doc": "Defines if the toolbar is translucent.",
            "!type": "bool"
        }
    },
    "openWindowParams": {
        "fullscreen": {
            "!doc": "Determines if the window is fullscreen.",
            "!type": "bool"
        },
        "right": {
            "!doc": "Window's right position, in platform-specific units.",
            "!type": "numder"
        },
        "modalStyle": {
            "!doc": "Presentation style of this modal window.",
            "!type": "numder"
        },
        "bottom": {
            "!doc": "Window's bottom position, in platform-specific units.",
            "!type": "numder"
        },
        "!doc": "Dictionary of options for the <Titanium.UI.Window.open> method.",
        "navBarHidden": {
            "!doc": "For modal windows, hides the nav bar (`true`) or shows the nav bar (`false`).",
            "!type": "bool"
        },
        "transition": {
            "!doc": "Transition style of this non-modal window.",
            "!type": "numder"
        },
        "height": {
            "!doc": "Window's height, in platform-specific units.",
            "!type": "numder"
        },
        "width": {
            "!doc": "Window's width, in platform-specific units.",
            "!type": "numder"
        },
        "activityExitAnimation": {
            "!doc": "Animation resource to run on the activity that is being put in background as a heavyweight window is being opened above it.",
            "!type": "numder"
        },
        "modalTransitionStyle": {
            "!doc": "Transition style of this modal window.",
            "!type": "numder"
        },
        "modal": {
            "!doc": "Determines whether to open the window modal in front of other windows.",
            "!type": "bool"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/openWindowParams",
        "activityEnterAnimation": {
            "!doc": "Animation resource to run on the activity (heavyweight window) being opened.",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Determines whether to use an animated effect when the window is shown.\n",
            "!type": "bool"
        },
        "top": {
            "!doc": "Window's top position, in platform-specific units.",
            "!type": "numder"
        },
        "left": {
            "!doc": "Window's left position, in platform-specific units.",
            "!type": "numder"
        }
    },
    "Point": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Point",
        "!doc": "A pair of coordinates used to describe the location of a <Titanium.UI.View>.",
        "y": {
            "!doc": "The y-axis coordinate of this point.",
            "!type": "numder"
        },
        "x": {
            "!doc": "The x-axis coordinate of this point.",
            "!type": "numder"
        }
    },
    "LocationCoordinatesFloor": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/LocationCoordinatesFloor",
        "!doc": "Simple object holding floor of the building on which the user is located.\nIn places where floor information can be determined.\n",
        "level": {
            "!doc": "The logical floor of the building.",
            "!type": "numder"
        }
    },
    "CoverFlowImageType": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CoverFlowImageType",
        "!doc": "Simple object for defining a single image in a cover flow view.",
        "image": {
            "!doc": "Image to use, as a local file URL, `Blob`, or `File`.",
            "!type": "string"
        },
        "height": {
            "!doc": "Display height of the image, in Apple points.",
            "!type": "numder"
        },
        "width": {
            "!doc": "Display width for the image, in Apple points.",
            "!type": "numder"
        }
    },
    "Titanium": {
        "buildDate": {
            "!doc": "Date of the Titanium build.",
            "!type": "string"
        },
        "Accelerometer": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Accelerometer",
            "!doc": "The top-level Accelerometer module, used to determine the device's physical position.\n"
        },
        "Contacts": {
            "Group": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Contacts.Group",
                "!doc": "An object which represents a group in the system contacts address book.",
                "prototype": {
                    "name": {
                        "!doc": "Name of this group.",
                        "!type": "string"
                    },
                    "recordId": {
                        "!doc": "Record identifier of the group. Single value.",
                        "!type": "numder"
                    },
                    "remove": {
                        "!doc": "Removes a person from this group.",
                        "!type": "fn(person: +Titanium.Contacts.Person)"
                    },
                    "add": {
                        "!doc": "Adds a person to this group.",
                        "!type": "fn(person: +Titanium.Contacts.Person)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "sortedMembers": {
                        "!doc": "Gets people that are members of this group, sorted in the specified order.",
                        "!type": "fn(sortBy: numder) -> +Array<Titanium.Contacts.Person>"
                    },
                    "members": {
                        "!doc": "Gets people that are members of this group.",
                        "!type": "fn() -> +Array<Titanium.Contacts.Person>"
                    }
                }
            },
            "!doc": "The top-level Contacts module, used for accessing and modifying the system contacts address book.\n",
            "CONTACTS_SORT_LAST_NAME": {
                "!doc": "Specifies that group members will be sorted by last name.",
                "!type": "numder"
            },
            "AUTHORIZATION_DENIED": {
                "!doc": "A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value \nindicating that the application is not authorized to use the address book.\n",
                "!type": "numder"
            },
            "Person": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Contacts.Person",
                "!doc": "An object that represents a contact record for a person or organization in the system contacts \naddress book.\n",
                "prototype": {
                    "suffix": {
                        "!doc": "Suffix for the person. Single value.",
                        "!type": "string"
                    },
                    "image": {
                        "!doc": "Image for the person. Single value.",
                        "!type": "+Titanium.Blob"
                    },
                    "prefix": {
                        "!doc": "Prefix for the person. Single value.",
                        "!type": "string"
                    },
                    "id": {
                        "!doc": "Record identifier of the person. Single value.",
                        "!type": "numder"
                    },
                    "instantMessage": {
                        "!doc": "Instant messenger information of the person. Multi-value.\n",
                        "!type": "+Dictionary"
                    },
                    "middleName": {
                        "!doc": "Middle name of the person. Single value.",
                        "!type": "string"
                    },
                    "firstPhonetic": {
                        "!doc": "Phonetic first name of the person.  Single value.",
                        "!type": "string"
                    },
                    "note": {
                        "!doc": "Notes for the person. Single value.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "alternateBirthday": {
                        "!doc": "Alternate birthday of the person. Single Dictionary.\n",
                        "!type": "+Dictionary"
                    },
                    "middlePhonetic": {
                        "!doc": "Phonetic middle name of the person. Single value.",
                        "!type": "string"
                    },
                    "department": {
                        "!doc": "Department of the person. Single value.",
                        "!type": "string"
                    },
                    "email": {
                        "!doc": "Email addresses for the person. Multi-value. Read-only on Android.",
                        "!type": "+Dictionary"
                    },
                    "jobTitle": {
                        "!doc": "Job title of the person. Single value.",
                        "!type": "string"
                    },
                    "phone": {
                        "!doc": "Phone numbers for the person. Multi-value. Read-only on Android.",
                        "!type": "+Dictionary"
                    },
                    "birthday": {
                        "!doc": "Date of birth of the person. Single value.",
                        "!type": "string"
                    },
                    "address": {
                        "!doc": "Addresses for the person. Multi-value. Read-only on Android.",
                        "!type": "+Dictionary"
                    },
                    "date": {
                        "!doc": "Dates associated with the person. Multi-value.",
                        "!type": "+Dictionary"
                    },
                    "socialProfile": {
                        "!doc": "Social profile information of the person. Multi-value.\n",
                        "!type": "+Dictionary"
                    },
                    "fullName": {
                        "!doc": "Localized full name of the person. Single value. Read-only on Android.",
                        "!type": "string"
                    },
                    "nickname": {
                        "!doc": "Nickname of the person. Single value.",
                        "!type": "string"
                    },
                    "kind": {
                        "!doc": "Determines the type of information the person record contains; either person or organization. \nRead-only on Android.\n",
                        "!type": "numder"
                    },
                    "firstName": {
                        "!doc": "First name of the person. Single value.",
                        "!type": "string"
                    },
                    "created": {
                        "!doc": "Date and time that the person record was created. Single value.",
                        "!type": "string"
                    },
                    "url": {
                        "!doc": "URLs of webpages associated with the person. Multi-value.",
                        "!type": "+Dictionary"
                    },
                    "lastName": {
                        "!doc": "Last name of the person. Single value.",
                        "!type": "string"
                    },
                    "modified": {
                        "!doc": "Date and time that the person record was last modified. Single value.",
                        "!type": "string"
                    },
                    "recordId": {
                        "!doc": "Record identifier of the person. Single value.",
                        "!type": "numder"
                    },
                    "organization": {
                        "!doc": "Organization to which the person belongs. Single value.",
                        "!type": "string"
                    },
                    "lastPhonetic": {
                        "!doc": "Phonetic last name of the person. Single value.",
                        "!type": "string"
                    },
                    "relatedNames": {
                        "!doc": "Names of people to which the person is related. Multi-value.",
                        "!type": "+Dictionary"
                    }
                }
            },
            "AUTHORIZATION_RESTRICTED": {
                "!doc": "A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value \nindicating that the application is not authorized to use the address book *and*\nthe user cannot change this application's status.\n",
                "!type": "numder"
            },
            "createPerson": {
                "!doc": "Creates and returns an instance of <Titanium.Contacts.Person>, and commits all pending \nchanges to the underlying contacts database.\n",
                "!type": "fn(parameters: +Dictionary<Titanium.Contacts.Person>) -> +Titanium.Contacts.Person"
            },
            "getPersonByID": {
                "!doc": "Gets the person with the specified identifier.",
                "!type": "fn(id: numder) -> +Titanium.Contacts.Person"
            },
            "getAllGroups": {
                "!doc": "Gets all groups.",
                "!type": "fn() -> +Array<Titanium.Contacts.Group>"
            },
            "removeGroup": {
                "!doc": "Removes a group from the address book.",
                "!type": "fn(group: +Titanium.Contacts.Group)"
            },
            "requestAuthorization": {
                "!doc": "If authorization is unknown, will bring up a dialog requesting permission.",
                "!type": "fn(callback: +Callback<ContactsAuthorizationResponse>)"
            },
            "CONTACTS_KIND_ORGANIZATION": {
                "!doc": "Specifies that a contact is an organization.",
                "!type": "numder"
            },
            "getAllPeople": {
                "!doc": "Gets all people, unless a limit is specified.",
                "!type": "fn(limit: numder) -> +Array<Titanium.Contacts.Person>"
            },
            "save": {
                "!doc": "Commits all pending changes to the underlying contacts database.",
                "!type": "fn(contacts: +Array<Titanium.Contacts.Person>)"
            },
            "getGroupByID": {
                "!doc": "Gets the group with the specified identifier.",
                "!type": "fn(id: numder) -> +Titanium.Contacts.Group"
            },
            "showContacts": {
                "!doc": "Displays a picker that allows a person to be selected.",
                "!type": "fn(params: +showContactsParams)"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Contacts",
            "removePerson": {
                "!doc": "Removes a contact from the address book.",
                "!type": "fn(person: +Titanium.Contacts.Person)"
            },
            "AUTHORIZATION_UNKNOWN": {
                "!doc": "A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value \nindicating that the authorization state is unknown.\n",
                "!type": "numder"
            },
            "AUTHORIZATION_AUTHORIZED": {
                "!doc": "A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value \nindicating that the application is authorized to use the address book.\n",
                "!type": "numder"
            },
            "CONTACTS_SORT_FIRST_NAME": {
                "!doc": "Specifies that group members will be sorted by first name.",
                "!type": "numder"
            },
            "revert": {
                "!doc": "Reverts all changes made by the previous save to the address book.",
                "!type": "fn()"
            },
            "CONTACTS_KIND_PERSON": {
                "!doc": "Specifies that a contact is a person.",
                "!type": "numder"
            },
            "createGroup": {
                "!doc": "Creates and returns an instance of <Titanium.Contacts.Group>.",
                "!type": "fn(parameters: +Dictionary<Titanium.Contacts.Group>) -> +Titanium.Contacts.Group"
            },
            "contactsAuthorization": {
                "!doc": "Returns an authorization constant indicating if the application has access to the address book.",
                "!type": "numder"
            },
            "getPeopleWithName": {
                "!doc": "Gets people with a `firstName`, `middleName` or `lastName` field, or a combination \nof these fields, that match the specified name.\n",
                "!type": "fn(name: string) -> +Array<Titanium.Contacts.Person>"
            }
        },
        "!doc": "The top-level Titanium module.",
        "Namespace": {
            "Name": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Namespace.Name",
                "!doc": "A proxy",
                "prototype": {
                    "!proto": "Titanium.Proxy.prototype",
                    "exampleMethod": {
                        "!doc": "A method",
                        "!type": "fn()"
                    },
                    "exampleProperty": {
                        "!doc": "A property",
                        "!type": "string"
                    }
                }
            }
        },
        "Platform": {
            "locale": {
                "!doc": "System's default language.",
                "!type": "string"
            },
            "!doc": "The top-level Platform module.  The Platform module is used to access the device's platform-related \nfunctionality.\n",
            "is24HourTimeFormat": {
                "!doc": "Returns whether the system settings are configured to show times in 24-hour format.",
                "!type": "fn() -> bool"
            },
            "batteryState": {
                "!doc": "Indicates the state of the battery. Accessible only when `batteryMonitoring` is enabled.",
                "!type": "numder"
            },
            "Android": {
                "PHYSICAL_SIZE_CATEGORY_LARGE": {
                    "!doc": "Constant to indicate that the physical size category of the current device/emulator is large",
                    "!type": "numder"
                },
                "PHYSICAL_SIZE_CATEGORY_UNDEFINED": {
                    "!doc": "Constant to indicate that the physical size category of the current device/emulator is undefined",
                    "!type": "numder"
                },
                "PHYSICAL_SIZE_CATEGORY_XLARGE": {
                    "!doc": "Constant to indicate that the physical size category of the current device/emulator is extra large",
                    "!type": "numder"
                },
                "PHYSICAL_SIZE_CATEGORY_SMALL": {
                    "!doc": "Constant to indicate that the physical size category of the current device/emulator is small",
                    "!type": "numder"
                },
                "!doc": "The Android-specific Platform module, used to access the device's platform-related functionality.\n",
                "physicalSizeCategory": {
                    "!doc": "The physical size category of the Android device or emulator. \n",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Platform.Android",
                "PHYSICAL_SIZE_CATEGORY_NORMAL": {
                    "!doc": "Constant to indicate that the physical size category of the current device/emulator is normal",
                    "!type": "numder"
                },
                "API_LEVEL": {
                    "!doc": "Android API level identifier of the Operating System.",
                    "!type": "numder"
                }
            },
            "id": {
                "!doc": "Applications's globally-unique ID (UUID).",
                "!type": "string"
            },
            "DisplayCaps": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Platform.DisplayCaps",
                "!doc": "The Display Caps object returned by the <Titanium.Platform.displayCaps> property.\n",
                "prototype": {
                    "platformWidth": {
                        "!doc": "Absolute width of the display in relation to UI orientation. Measured in platform-specific \nunits; pixels on Android and density-independent pixels (dip) on iOS.\n",
                        "!type": "numder"
                    },
                    "density": {
                        "!doc": "Logical density of the display.",
                        "!type": "string"
                    },
                    "platformHeight": {
                        "!doc": "Absolute height of the display in relation to UI orientation. Measured in platform-specific \nunits; pixels on Android and density-independent pixels (dip) on iOS.\n",
                        "!type": "numder"
                    },
                    "xdpi": {
                        "!doc": "Physical pixels per inch of the display in the X dimension.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "logicalDensityFactor": {
                        "!doc": "Logical density of the display, as a scaling factor for the Density Independent Pixel (dip) \nunit.\n",
                        "!type": "numder"
                    },
                    "ydpi": {
                        "!doc": "Physical pixels per inch of the display in the Y dimension.",
                        "!type": "numder"
                    },
                    "dpi": {
                        "!doc": "Display density expressed as dots-per-inch.",
                        "!type": "numder"
                    }
                }
            },
            "version": {
                "!doc": "System's OS version.",
                "!type": "string"
            },
            "BATTERY_STATE_UNPLUGGED": {
                "!doc": "Constant to indicate that the system is unplugged.",
                "!type": "numder"
            },
            "BATTERY_STATE_CHARGING": {
                "!doc": "Constant to indicate that the system is plugged in and currently being charged.",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Platform",
            "batteryLevel": {
                "!doc": "Battery level in percent, accessible only when `batteryMonitoring` is enabled. Measured \nin 5% increments on iPhone/iPad.\n",
                "!type": "numder"
            },
            "BATTERY_STATE_UNKNOWN": {
                "!doc": "Constant to indicate that the battery state is not known or monitoring is disabled.",
                "!type": "numder"
            },
            "username": {
                "!doc": "System name, if set. On iOS, this can be found in Settings > General > About > Name.\n",
                "!type": "string"
            },
            "openURL": {
                "!doc": "Opens this URL using the system's default application for its protocol.\n",
                "!type": "fn(url: string) -> bool"
            },
            "osname": {
                "!doc": "Short name of the system's Operating System. Returns `android` for the Android platfrom,\n`iphone` for the iPhone or iPod Touch, `ipad` for the iPad, and `mobileweb` for the Mobile Web\nplatform.\n",
                "!type": "string"
            },
            "netmask": {
                "!doc": "System's WIFI network mask. No other network types are supported.",
                "!type": "string"
            },
            "batteryMonitoring": {
                "!doc": "Determines whether battery monitoring is enabled.",
                "!type": "bool"
            },
            "address": {
                "!doc": "System's WIFI IP address. No other network types are supported.",
                "!type": "string"
            },
            "BATTERY_STATE_FULL": {
                "!doc": "Constant to indicate that the battery is fully charged.",
                "!type": "numder"
            },
            "manufacturer": {
                "!doc": "Manufacturer of the device.",
                "!type": "string"
            },
            "macaddress": {
                "!doc": "System's network interface mac address, or app UUID.",
                "!type": "string"
            },
            "availableMemory": {
                "!doc": "System's unused memory, measured in megabytes on iOS and bytes on Android.",
                "!type": "numder"
            },
            "name": {
                "!doc": "Name of the platform. Returns `android` for the Android platform, `iPhone OS` for the iOS\nplatform (iPhone, iPad, or iPod Touch), and `mobileweb` for the Mobile Web platform.\n",
                "!type": "string"
            },
            "canOpenURL": {
                "!doc": "Returns whether the system is configured with a default application to handle the URL's protocol.\n",
                "!type": "fn(url: string) -> bool"
            },
            "processorCount": {
                "!doc": "Number of processing cores.",
                "!type": "numder"
            },
            "architecture": {
                "!doc": "System's processor architecture.",
                "!type": "string"
            },
            "ostype": {
                "!doc": "Operating System architecture. On Android, this is `32bit`.",
                "!type": "string"
            },
            "model": {
                "!doc": "Model of the device.",
                "!type": "string"
            },
            "runtime": {
                "!doc": "Short name of the JavaScript runtime in use.",
                "!type": "string"
            },
            "displayCaps": {
                "!doc": "Returns the DisplayCaps object.\n",
                "!type": "+Titanium.Platform.DisplayCaps"
            },
            "createUUID": {
                "!doc": "Creates a globally-unique identifier.",
                "!type": "fn() -> string"
            }
        },
        "Codec": {
            "LITTLE_ENDIAN": {
                "!doc": "Little endian byte order -- that is, the least significant byte first.",
                "!type": "numder"
            },
            "CHARSET_ASCII": {
                "!doc": "ASCII character encoding..",
                "!type": "string"
            },
            "TYPE_INT": {
                "!doc": "32-bit integer encoding type.",
                "!type": "string"
            },
            "decodeString": {
                "!doc": "Decodes the source buffer into a String using the supplied character set.\n",
                "!type": "fn(options: +DecodeStringDict) -> string"
            },
            "CHARSET_UTF16LE": {
                "!doc": "UTF-16 character encoding with little endian byte order.",
                "!type": "string"
            },
            "!doc": "A module for translating between primitive types and raw byte streams.\n",
            "CHARSET_UTF16": {
                "!doc": "UTF-16 character encoding with default byte order.",
                "!type": "string"
            },
            "encodeString": {
                "!doc": "Encodes a string into a series of bytes in a buffer using the specified character set.\n",
                "!type": "fn(options: +Dictionary<EncodeStringDict>) -> numder"
            },
            "CHARSET_ISO_LATIN_1": {
                "!doc": "ISO 8859-1 (Latin-1) character encoding.",
                "!type": "string"
            },
            "CHARSET_UTF16BE": {
                "!doc": "UTF-16 character encoding with big endian byte order.",
                "!type": "string"
            },
            "TYPE_LONG": {
                "!doc": "64-bit integer encoding type.",
                "!type": "string"
            },
            "TYPE_DOUBLE": {
                "!doc": "64-bit double precision floating-point type.",
                "!type": "string"
            },
            "getNativeByteOrder": {
                "!doc": "Get the OS native byte order (either <Titanium.Codec.BIG_ENDIAN> or\n<Titanium.Codec.LITTLE_ENDIAN>).\n",
                "!type": "fn() -> numder"
            },
            "encodeNumber": {
                "!doc": "Encodes a number and writes it to a buffer.",
                "!type": "fn(options: +EncodeNumberDict) -> numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Codec",
            "decodeNumber": {
                "!doc": "Decodes a number from the `source` buffer using the specified data type.\n",
                "!type": "fn(options: +DecodeNumberDict) -> numder"
            },
            "BIG_ENDIAN": {
                "!doc": "Big endian (network) byte order -- that is, the most significant byte first.",
                "!type": "numder"
            },
            "TYPE_FLOAT": {
                "!doc": "32-bit single precision floating-point type.",
                "!type": "string"
            },
            "TYPE_BYTE": {
                "!doc": "8-bit integer encoding type.",
                "!type": "string"
            },
            "TYPE_SHORT": {
                "!doc": "16-bit integer encoding type.",
                "!type": "string"
            },
            "CHARSET_UTF8": {
                "!doc": "UTF-8 character encoding.",
                "!type": "string"
            }
        },
        "Blob": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Blob",
            "!doc": "A container for binary data.",
            "prototype": {
                "mimeType": {
                    "!doc": "Mime type of the data in this blob.",
                    "!type": "string"
                },
                "imageWithRoundedCorner": {
                    "!doc": "Returns a copy of the underlying image with rounded corners added.",
                    "!type": "fn(cornerSize: numder, borderSize: numder) -> +Titanium.Blob"
                },
                "text": {
                    "!doc": "UTF-8 string representation of the data in this blob.",
                    "!type": "string"
                },
                "imageAsThumbnail": {
                    "!doc": "Returns a thumbnail version of the underlying image, optionally with a border and rounded corners.",
                    "!type": "fn(size: numder, borderSize: numder, cornerRadius: numder) -> +Titanium.Blob"
                },
                "nativePath": {
                    "!doc": "If this blob represents a [File](Titanium.Filesystem.File), this is the file URL\nthat represents it.\n",
                    "!type": "string"
                },
                "height": {
                    "!doc": "If this blob represents an image, this is the height of the image in pixels.",
                    "!type": "numder"
                },
                "width": {
                    "!doc": "If this blob represents an image, this is the width of the image in pixels.",
                    "!type": "numder"
                },
                "length": {
                    "!doc": "Length of this blob in bytes.",
                    "!type": "numder"
                },
                "!proto": "Titanium.Proxy.prototype",
                "toString": {
                    "!doc": "Returns a string representation of this blob.",
                    "!type": "fn() -> string"
                },
                "file": {
                    "!doc": "File object represented by this blob, or `null` if this blob is not\nassociated with a file.\n",
                    "!type": "+Titanium.Filesystem.File"
                },
                "imageWithTransparentBorder": {
                    "!doc": "Returns a copy of the underlying image with an added transparent border.",
                    "!type": "fn(size: numder) -> +Titanium.Blob"
                },
                "imageAsCropped": {
                    "!doc": "Creates a new blob by cropping the underlying image to the specified dimensions.",
                    "!type": "fn(options: +Dictionary<ImageAsCroppedDict>) -> +Titanium.Blob"
                },
                "imageAsResized": {
                    "!doc": "Creates a new blob by resizing and scaling the underlying image to the specified dimensions.",
                    "!type": "fn(width: numder, height: numder) -> +Titanium.Blob"
                },
                "imageWithAlpha": {
                    "!doc": "Returns a copy of the underlying image with an added alpha channel.",
                    "!type": "fn() -> +Titanium.Blob"
                },
                "append": {
                    "!doc": "Appends the data from another blob to this blob.",
                    "!type": "fn(blob: +Titanium.Blob)"
                },
                "size": {
                    "!doc": "Size of the blob in pixels (for image blobs) or bytes (for all other blobs).\n",
                    "!type": "numder"
                }
            }
        },
        "userAgent": {
            "!doc": "User-agent string used by Titanium.",
            "!type": "string"
        },
        "Android": {
            "ACTION_MANAGE_PACKAGE_STORAGE": {
                "!doc": "Indicates low memory condition notification acknowledged by user and package management should be started.",
                "!type": "string"
            },
            "ACTION_BATTERY_CHANGED": {
                "!doc": "Listen to battery state change status.",
                "!type": "string"
            },
            "Service": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Service",
                "!doc": "Android application component that executes in the background.",
                "prototype": {
                    "stop": {
                        "!doc": "Stops this running instance of the Service.",
                        "!type": "fn()"
                    },
                    "start": {
                        "!doc": "Starts the Service.",
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "intent": {
                        "!doc": "The intent used to start or bind to the Service.",
                        "!type": "+Titanium.Android.Intent"
                    },
                    "serviceInstanceId": {
                        "!doc": "A service can be started more than once -- this number (based on an incrementing integer)\nindicates which \"start number\" in the sequence the current service instance is.\n",
                        "!type": "numder"
                    }
                }
            },
            "ACTION_SEARCH": {
                "!doc": "Perform a search.",
                "!type": "string"
            },
            "!doc": "The top-level Android module.",
            "FLAG_SHOW_LIGHTS": {
                "!doc": "Use LED lights to alert the user to the notification.",
                "!type": "numder"
            },
            "CATEGORY_SAMPLE_CODE": {
                "!doc": "To be used as a sample code example (not part of the normal user experience).",
                "!type": "string"
            },
            "ACTION_DIAL": {
                "!doc": "Dial a number specified by the Intent's `data` property.",
                "!type": "string"
            },
            "ACTION_TIME_TICK": {
                "!doc": "The current time changed.  Sent every minute.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY": {
                "!doc": "Activity was launched from history.",
                "!type": "numder"
            },
            "VISIBILITY_PRIVATE": {
                "!doc": "Shows basic information about the notification.",
                "!type": "numder"
            },
            "ACTION_INPUT_METHOD_CHANGED": {
                "!doc": "An input method has been changed.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_REORDER_TO_FRONT": {
                "!doc": "If the activity already exists, place it at the top of the history stack.",
                "!type": "numder"
            },
            "ACTION_AIRPLANE_MODE_CHANGED": {
                "!doc": "User switched airplane mode on or off.",
                "!type": "string"
            },
            "ACTION_UMS_DISCONNECTED": {
                "!doc": "The device has exited USB Mass Storage mode.",
                "!type": "string"
            },
            "ACTION_SEND": {
                "!doc": "Deliver data to another activity.",
                "!type": "string"
            },
            "PRIORITY_DEFAULT": {
                "!doc": "Default priority if it does no fit into another priority category.",
                "!type": "numder"
            },
            "DEFAULT_ALL": {
                "!doc": "Use all default settings for a notification; see\n[Notification.defaults](Titanium.Android.Notification.defaults).\n",
                "!type": "numder"
            },
            "ACTION_CONFIGURATION_CHANGED": {
                "!doc": "The device's configuration changed.",
                "!type": "string"
            },
            "CATEGORY_OPENABLE": {
                "!doc": "Activity can open raw `file://` or `scheme://` URIs.",
                "!type": "string"
            },
            "ACTION_USER_PRESENT": {
                "!doc": "Sent when the user is present after device wakes up.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_RESET_TASK_IF_NEEDED": {
                "!doc": "If the task already exists, resets the task to its initial state.",
                "!type": "numder"
            },
            "FLAG_INSISTENT": {
                "!doc": "Repeat audio until the notification is cancelled or the notification window\nis opened.\n",
                "!type": "numder"
            },
            "ACTION_EDIT": {
                "!doc": "Provide editable access to the data specified by the Intent's `data` property.",
                "!type": "string"
            },
            "FLAG_FROM_BACKGROUND": {
                "!doc": "Indicates the intent is coming from a background operation.",
                "!type": "numder"
            },
            "CATEGORY_BROWSABLE": {
                "!doc": "Activity can browse the Internet.",
                "!type": "string"
            },
            "EXTRA_SHORTCUT_NAME": {
                "!doc": "Name of the shortcut.",
                "!type": "string"
            },
            "Intent": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Intent",
                "!doc": "Message objects passed between Android application components.",
                "prototype": {
                    "addFlags": {
                        "!doc": "Adds to the existing flags on the `Intent`.",
                        "!type": "fn(flags: numder)"
                    },
                    "putExtra": {
                        "!doc": "Puts an extra property on this `Intent`.",
                        "!type": "fn(name: string, value: +Object)"
                    },
                    "url": {
                        "!doc": "The URL to a Titanium JavaScript Activity.",
                        "!type": "string"
                    },
                    "type": {
                        "!doc": "The MIME type for this Intent.",
                        "!type": "string"
                    },
                    "packageName": {
                        "!doc": "The fully-qualified Java package name of the activity.",
                        "!type": "string"
                    },
                    "putExtraUri": {
                        "!doc": "Put a URI property on this `Intent` (useful for <Titanium.Android.EXTRA_STREAM>).",
                        "!type": "fn(name: string, value: string)"
                    },
                    "className": {
                        "!doc": "The Java class name of the activity associated with this intent\n([packageName](Titanium.Android.Intent.packageName) must also be set).\n",
                        "!type": "string"
                    },
                    "getDoubleExtra": {
                        "!doc": "Get a double property from this `Intent`.",
                        "!type": "fn(name: string) -> numder"
                    },
                    "hasExtra": {
                        "!doc": "Returns `true` if this `Intent` has the specified property.",
                        "!type": "fn(name: string) -> bool"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "flags": {
                        "!doc": "Intent flags.",
                        "!type": "numder"
                    },
                    "addCategory": {
                        "!doc": "Adds a category to this Intent.",
                        "!type": "fn(name: string)"
                    },
                    "getStringExtra": {
                        "!doc": "Get a string property from this `Intent`.",
                        "!type": "fn(name: string) -> string"
                    },
                    "action": {
                        "!doc": "The action associated with this intent.",
                        "!type": "string"
                    },
                    "getLongExtra": {
                        "!doc": "Get a long property from this `Intent`.",
                        "!type": "fn(name: string) -> numder"
                    },
                    "getData": {
                        "!doc": "Get the Data URI from this `Intent`.",
                        "!type": "fn() -> string"
                    },
                    "data": {
                        "!doc": "The Intent's Data URI.",
                        "!type": "string"
                    },
                    "getBlobExtra": {
                        "!doc": "Get a <Titanium.Blob> property from this `Intent`.",
                        "!type": "fn(name: string) -> +Titanium.Blob"
                    },
                    "getIntExtra": {
                        "!doc": "Get an integer property from this `Intent`.",
                        "!type": "fn(name: string) -> numder"
                    },
                    "getBooleanExtra": {
                        "!doc": "Get a boolean property from this Intent.",
                        "!type": "fn(name: string) -> bool"
                    }
                }
            },
            "FILL_IN_COMPONENT": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "ACTION_NEW_OUTGOING_CALL": {
                "!doc": "An outgoing call is about to be placed.",
                "!type": "string"
            },
            "ACTION_CLOSE_SYSTEM_DIALOGS": {
                "!doc": "User dismissed a temporary system dialog, such as the notification drawer or recent-app drawer.",
                "!type": "string"
            },
            "CATEGORY_SOCIAL": {
                "!doc": "Notification category for a social network or sharing update.",
                "!type": "string"
            },
            "CATEGORY_INFO": {
                "!doc": "Provides information about the package it is in.",
                "!type": "string"
            },
            "STREAM_VOICE_CALL": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the\nvoice call stream type for notifications be used.\n",
                "!type": "numder"
            },
            "CATEGORY_LAUNCHER": {
                "!doc": "Activity is in the device's launcher.",
                "!type": "string"
            },
            "ACTION_MEDIA_UNMOUNTABLE": {
                "!doc": "Corresponds to the Android `Intent.ACTION_MEDIA_UNMOUNTABLE` constant.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_BROUGHT_TO_FRONT": {
                "!doc": "If activity is already running, bring it to the foreground.",
                "!type": "numder"
            },
            "ACTION_MEDIA_SCANNER_SCAN_FILE": {
                "!doc": "Request the media scanner to scan a file and add it to the media database.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_PREVIOUS_IS_TOP": {
                "!doc": "Corresponds to the Android `Intent.FLAG_ACTIVITY_PREVIOUS_IS_TOP` constant.",
                "!type": "numder"
            },
            "createServiceIntent": {
                "!doc": "Create an `Intent` to be used to start a service.",
                "!type": "fn(options: +ServiceIntentOptions) -> +Titanium.Android.Intent"
            },
            "currentActivity": {
                "!doc": "Activity of the active context.",
                "!type": "+Titanium.Android.Activity"
            },
            "EXTRA_TEXT": {
                "!doc": "Corresponds to the Android `Intent.EXTRA_TEXT` constant.",
                "!type": "string"
            },
            "FLAG_GRANT_WRITE_URI_PERMISSION": {
                "!doc": "Grants write permission on the URI in the Intent's data or clipboard.",
                "!type": "numder"
            },
            "ACTION_SYNC": {
                "!doc": "Perform data synchronization.",
                "!type": "string"
            },
            "CATEGORY_MONKEY": {
                "!doc": "This activity may be exercised by the monkey or other automated test tools.",
                "!type": "string"
            },
            "EXTRA_SUBJECT": {
                "!doc": "Subject line of a message.",
                "!type": "string"
            },
            "SCREEN_ORIENTATION_NOSENSOR": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify that the sensor should be ignored and the display should not rotate.\n",
                "!type": "numder"
            },
            "EXTRA_BCC": {
                "!doc": "String array containing e-mail addresses for blind carbon copying.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_MULTIPLE_TASK": {
                "!doc": "Start the activity as a new task even if it exists.",
                "!type": "numder"
            },
            "STREAM_SYSTEM": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the\nsystem stream type for notifications be used.\n",
                "!type": "numder"
            },
            "FLAG_ACTIVITY_FORWARD_RESULT": {
                "!doc": "Return result to the original calling activity.",
                "!type": "numder"
            },
            "SCREEN_ORIENTATION_SENSOR": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify that orientation should be determined by the orientation sensor.\n",
                "!type": "numder"
            },
            "FLAG_CANCEL_CURRENT": {
                "!doc": "Cancel the current pending intent before creating a new one.",
                "!type": "numder"
            },
            "FLAG_DEBUG_LOG_RESOLUTION": {
                "!doc": "Enable a log message to print out the resolution of the intent.",
                "!type": "numder"
            },
            "CATEGORY_CALL": {
                "!doc": "Notification category indicating an incoming call (voice or video) or similar synchronous\ncommunication request.\n",
                "!type": "string"
            },
            "FLAG_ONE_SHOT": {
                "!doc": "The pending intent can only be used once.",
                "!type": "numder"
            },
            "SHOW_AS_ACTION_NEVER": {
                "!doc": "Never display this item as an action button in the action bar.",
                "!type": "numder"
            },
            "ACTION_SHUTDOWN": {
                "!doc": "Device is shutting down.",
                "!type": "string"
            },
            "DEFAULT_VIBRATE": {
                "!doc": "Use the default vibration settings for a notification; see\n[Notification.defaults](Titanium.Android.Notification.defaults).\n",
                "!type": "numder"
            },
            "BroadcastReceiver": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.BroadcastReceiver",
                "!doc": "Monitor and handle Android system broadcasts.",
                "prototype": {
                    "onReceived": {
                        "!doc": "The function called when a broadcast is received.",
                        "!type": "+Callback<Object>"
                    },
                    "url": {
                        "!doc": "URL of the JavaScript file to handle the broadcast.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype"
                }
            },
            "FLAG_ACTIVITY_NO_ANIMATION": {
                "!doc": "Prevent transition animation.",
                "!type": "numder"
            },
            "ACTION_MEDIA_REMOVED": {
                "!doc": "External media has been removed.",
                "!type": "string"
            },
            "ACTION_POWER_DISCONNECTED": {
                "!doc": "External power has been disconnected from the device.",
                "!type": "string"
            },
            "CATEGORY_ALARM": {
                "!doc": "Notification category indicating an alarm or timer.",
                "!type": "string"
            },
            "EXTRA_PHONE_NUMBER": {
                "!doc": "String holding the phone number to call or number that was called.",
                "!type": "string"
            },
            "DEFAULT_LIGHTS": {
                "!doc": "Use the default light settings for a notification; see\n[Notification.defaults](Titanium.Android.Notification.defaults).\n",
                "!type": "numder"
            },
            "ACTION_BUG_REPORT": {
                "!doc": "Show activity for reporting a bug.",
                "!type": "string"
            },
            "CATEGORY_UNIT_TEST": {
                "!doc": "To be used as a unit test (run through the Test Harness).",
                "!type": "string"
            },
            "ACTION_CAMERA_BUTTON": {
                "!doc": "The camera button was pressed.",
                "!type": "string"
            },
            "ACTION_PACKAGE_ADDED": {
                "!doc": "A new application package has been installed on the device.",
                "!type": "string"
            },
            "CATEGORY_TRANSPORT": {
                "!doc": "Notification category indicating media transport control for playback.",
                "!type": "string"
            },
            "DEFAULT_SOUND": {
                "!doc": "Use the default sound settings for a notification; see\n[Notification.defaults](Titanium.Android.Notification.defaults).\n",
                "!type": "numder"
            },
            "ACTION_GET_CONTENT": {
                "!doc": "Allow the user to select a particular kind of data specified by the Intent's `type` property.",
                "!type": "string"
            },
            "ACTION_BATTERY_LOW": {
                "!doc": "Indicates low battery condition on the device.",
                "!type": "string"
            },
            "FLAG_AUTO_CANCEL": {
                "!doc": "Cancel the notification when it is clicked by the user.",
                "!type": "numder"
            },
            "ACTION_TIME_CHANGED": {
                "!doc": "The time was set.",
                "!type": "string"
            },
            "currentService": {
                "!doc": "Service in the active context.",
                "!type": "+Titanium.Android.Service"
            },
            "CATEGORY_EMAIL": {
                "!doc": "Notification category indicating an asynchronous bulk message (email).",
                "!type": "string"
            },
            "ACTION_MEDIA_SCANNER_FINISHED": {
                "!doc": "The media scanner has finished scanning a directory.",
                "!type": "string"
            },
            "FLAG_NO_CLEAR": {
                "!doc": "Do not cancel the notification when the user clicks the Clear All button.",
                "!type": "numder"
            },
            "STREAM_DEFAULT": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the\ndefault stream type for notifications be used.\n",
                "!type": "numder"
            },
            "ACTION_DATE_CHANGED": {
                "!doc": "Date changed.",
                "!type": "string"
            },
            "EXTRA_SHORTCUT_INTENT": {
                "!doc": "Intent of a shortcut.",
                "!type": "string"
            },
            "ACTION_MAIN": {
                "!doc": "Start as the main entry point.",
                "!type": "string"
            },
            "NAVIGATION_MODE_TABS": {
                "!doc": "Action Bar tab navigation mode",
                "!type": "numder"
            },
            "ACTION_MEDIA_MOUNTED": {
                "!doc": "External media is present and mounted at its mount point.",
                "!type": "string"
            },
            "ACTION_MEDIA_NOFS": {
                "!doc": "External media is present, but is using an incompatible filesystem or is blank.",
                "!type": "string"
            },
            "RESULT_OK": {
                "!doc": "Used with [setResult](Titanium.Android.Activity.setResult) to specify that\nan activity succeeded.\n",
                "!type": "numder"
            },
            "ACTION_PROVIDER_CHANGED": {
                "!doc": "Content provider published new events or items.",
                "!type": "string"
            },
            "ACTION_SEARCH_LONG_PRESS": {
                "!doc": "Start action associated with long pressing on the search key.",
                "!type": "string"
            },
            "FLAG_ONGOING_EVENT": {
                "!doc": "Specifies that a notification is in reference to something that is ongoing, like a phone call.",
                "!type": "numder"
            },
            "ACTION_BATTERY_OKAY": {
                "!doc": "Inidicates the battery is now okay after being low.",
                "!type": "string"
            },
            "VISIBILITY_PUBLIC": {
                "!doc": "Shows the notification's full content on the lockscreen. This is the system default if visibility is left unspecified.",
                "!type": "numder"
            },
            "ACTION_ANSWER": {
                "!doc": "Handle an incoming phone call.",
                "!type": "string"
            },
            "ACTION_MEDIA_EJECT": {
                "!doc": "User has expressed the desire to remove the external storage media.",
                "!type": "string"
            },
            "ACTION_PACKAGE_CHANGED": {
                "!doc": "An existing application package has been changed.",
                "!type": "string"
            },
            "ACTION_UID_REMOVED": {
                "!doc": "A user ID was removed from the system.",
                "!type": "string"
            },
            "ACTION_MEDIA_UNMOUNTED": {
                "!doc": "External media is present, but not mounted at its mount point.",
                "!type": "string"
            },
            "START_NOT_STICKY": {
                "!doc": "A Service start mode indicating that if the host application is stopped by Android, the service should not be restarted automatically.\n",
                "!type": "numder"
            },
            "ACTION_PICK_ACTIVITY": {
                "!doc": "Pick an activity given an intent.",
                "!type": "string"
            },
            "ACTION_CREATE_SHORTCUT": {
                "!doc": "Create a shortcut.",
                "!type": "string"
            },
            "ACTION_DELETE": {
                "!doc": "Delete the data specified by the Intent's `data` property.",
                "!type": "string"
            },
            "ACTION_VOICE_COMMAND": {
                "!doc": "Start voice command.",
                "!type": "string"
            },
            "VISIBILITY_SECRET": {
                "!doc": "Shows the most minimal information of the notification on the lockscreen.",
                "!type": "numder"
            },
            "SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW": {
                "!doc": "The action view can collapse to a normal menu item.",
                "!type": "numder"
            },
            "createService": {
                "!doc": "Create a <Titanium.Android.Service> so you can start/stop it and listen for events from it.",
                "!type": "fn(intent: +Titanium.Android.Intent) -> +Titanium.Android.Service"
            },
            "FLAG_ACTIVITY_NO_USER_ACTION": {
                "!doc": "Disables the [onUserLeaveHint()](http://developer.android.com/reference/android/app/Activity.html#onUserLeaveHint()) callback.\n",
                "!type": "numder"
            },
            "ACTION_ALL_APPS": {
                "!doc": "List all applications.",
                "!type": "string"
            },
            "ACTION_PACKAGE_REPLACED": {
                "!doc": "A new version of an application package has been installed, replacing an existing version that was previously installed.",
                "!type": "string"
            },
            "stopService": {
                "!doc": "Stop a simple service that was started with `startService`.",
                "!type": "fn(intent: +Titanium.Android.Intent)"
            },
            "EXTRA_STREAM": {
                "!doc": "URI containing the stream data.",
                "!type": "string"
            },
            "ACTION_SYSTEM_TUTORIAL": {
                "!doc": "Start the platform-defined tutorial.",
                "!type": "string"
            },
            "EXTRA_DATA_REMOVED": {
                "!doc": "Boolean indicating full uninstall (true) or partial uninstall (false).",
                "!type": "string"
            },
            "EXTRA_CC": {
                "!doc": "String array containing e-mail addresses for carbon copying.",
                "!type": "string"
            },
            "isServiceRunning": {
                "!doc": "Check on state of Service.",
                "!type": "fn(intent: +Titanium.Android.Intent) -> bool"
            },
            "URI_INTENT_SCHEME": {
                "!doc": "The URI scheme used for intent URIs.",
                "!type": "numder"
            },
            "STREAM_MUSIC": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to\nrequest that the music stream type for notifications be used.\n",
                "!type": "numder"
            },
            "STREAM_NOTIFICATION": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the\nnotification stream type for notifications be used.\n",
                "!type": "numder"
            },
            "Calendar": {
                "!doc": "The Android.Calendar module provides proxies and methods for accessing the native Android \ncalendar functionality.\n",
                "VISIBILITY_CONFIDENTIAL": {
                    "!doc": "Event confidential visibility.",
                    "!type": "numder"
                },
                "VISIBILITY_PRIVATE": {
                    "!doc": "Event private visibility.",
                    "!type": "numder"
                },
                "STATUS_CONFIRMED": {
                    "!doc": "Event confirmed status.",
                    "!type": "numder"
                },
                "Reminder": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Calendar.Reminder",
                    "!doc": "An object that represents a single reminder for an event in an Android calendar.",
                    "prototype": {
                        "!proto": "Titanium.Proxy.prototype",
                        "minutes": {
                            "!doc": "Reminder notice period in minutes, that determines how long prior to the event this reminder \nshould trigger.\n",
                            "!type": "numder"
                        },
                        "id": {
                            "!doc": "Identifier of this reminder.",
                            "!type": "string"
                        },
                        "method": {
                            "!doc": "Method by which this reminder will be delivered.",
                            "!type": "numder"
                        }
                    }
                },
                "VISIBILITY_DEFAULT": {
                    "!doc": "Event default visibility.",
                    "!type": "numder"
                },
                "METHOD_DEFAULT": {
                    "!doc": "Reminder default delivery method.",
                    "!type": "numder"
                },
                "allAlerts": {
                    "!doc": "All alerts in selected calendars.",
                    "!type": "+Array<Titanium.Android.Calendar.Alert>"
                },
                "Alert": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Calendar.Alert",
                    "!doc": "An object that represents a single alert for an event in an Android calendar.",
                    "prototype": {
                        "eventId": {
                            "!doc": "Identifier of the event for which this alert is set.",
                            "!type": "numder"
                        },
                        "begin": {
                            "!doc": "Start date/time for the corresponding event.",
                            "!type": "+Date"
                        },
                        "end": {
                            "!doc": "End date/time for the corresponding event.",
                            "!type": "+Date"
                        },
                        "alarmTime": {
                            "!doc": "Date/time at which this alert alarm is set to trigger.",
                            "!type": "+Date"
                        },
                        "state": {
                            "!doc": "The current state of the alert.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "minutes": {
                            "!doc": "Reminder notice period in minutes, that determines how long prior to the event this alert \nshould trigger.\n",
                            "!type": "numder"
                        },
                        "id": {
                            "!doc": "Identifier of this alert.",
                            "!type": "string"
                        }
                    }
                },
                "STATE_SCHEDULED": {
                    "!doc": "Alert scheduled status.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Calendar",
                "STATE_FIRED": {
                    "!doc": "Alert fired state.",
                    "!type": "numder"
                },
                "METHOD_EMAIL": {
                    "!doc": "Reminder email delivery method.",
                    "!type": "numder"
                },
                "STATUS_TENTATIVE": {
                    "!doc": "Event tentative status.",
                    "!type": "numder"
                },
                "selectableCalendars": {
                    "!doc": "All calendars selected within the native calendar app, which may be a subset of `allCalendars`. \n",
                    "!type": "+Array<Titanium.Android.Calendar.Calendar>"
                },
                "STATUS_CANCELED": {
                    "!doc": "Event canceled status.",
                    "!type": "numder"
                },
                "METHOD_SMS": {
                    "!doc": "Reminder SMS delivery method.",
                    "!type": "numder"
                },
                "VISIBILITY_PUBLIC": {
                    "!doc": "Event public visibility.",
                    "!type": "numder"
                },
                "METHOD_ALERT": {
                    "!doc": "Reminder alert delivery method.",
                    "!type": "numder"
                },
                "STATE_DISMISSED": {
                    "!doc": "Alert dismissed state.",
                    "!type": "numder"
                },
                "getCalendarById": {
                    "!doc": "Gets the calendar with the specified identifier.",
                    "!type": "fn(id: numder) -> +Titanium.Android.Calendar.Calendar"
                },
                "Calendar": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Calendar.Calendar",
                    "!doc": "An object that represents a single calendar on Android.",
                    "prototype": {
                        "getEventsInDate": {
                            "!doc": "Gets events that occur on a specified date.",
                            "!type": "fn(year: numder, month: numder, day: numder) -> +Array<Titanium.Android.Calendar.Event>"
                        },
                        "name": {
                            "!doc": "Display name of this calendar.",
                            "!type": "string"
                        },
                        "getEventsInMonth": {
                            "!doc": "Gets events that occur during a specified month.",
                            "!type": "fn(year: numder, month: numder) -> +Array<Titanium.Android.Calendar.Event>"
                        },
                        "selected": {
                            "!doc": "Indicates whether the calendar is selected.",
                            "!type": "bool"
                        },
                        "getEventsBetweenDates": {
                            "!doc": "Gets events that occur between two dates.",
                            "!type": "fn(date1: +Date, date2: +Date) -> +Array<Titanium.Android.Calendar.Event>"
                        },
                        "getEventsInYear": {
                            "!doc": "Gets all events that occur during a specified year.",
                            "!type": "fn(year: numder) -> +Array<Titanium.Android.Calendar.Event>"
                        },
                        "getEventById": {
                            "!doc": "Gets the event with the specified identifier.",
                            "!type": "fn(id: numder) -> +Titanium.Android.Calendar.Event"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "hidden": {
                            "!doc": "Indicates whether this calendar is hidden.",
                            "!type": "bool"
                        },
                        "id": {
                            "!doc": "Identifier of this calendar.",
                            "!type": "string"
                        },
                        "createEvent": {
                            "!doc": "Creates an event in this calendar.",
                            "!type": "fn(properties: +Dictionary<Titanium.Android.Calendar.Event>) -> +Titanium.Android.Calendar.Event"
                        }
                    }
                },
                "Event": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Calendar.Event",
                    "!doc": "An object that represents a single event in an Android calendar.",
                    "prototype": {
                        "status": {
                            "!doc": "Status of this event.",
                            "!type": "numder"
                        },
                        "begin": {
                            "!doc": "Start date/time of this event.",
                            "!type": "+Date"
                        },
                        "allDay": {
                            "!doc": "Indicates whether this event is all day.",
                            "!type": "bool"
                        },
                        "end": {
                            "!doc": "End date/time of this event.",
                            "!type": "+Date"
                        },
                        "description": {
                            "!doc": "Description of this event.",
                            "!type": "string"
                        },
                        "title": {
                            "!doc": "Title of this event.",
                            "!type": "string"
                        },
                        "extendedProperties": {
                            "!doc": "Extended properties of this event.",
                            "!type": "+Dictionary"
                        },
                        "alerts": {
                            "!doc": "Existing alerts for this event.",
                            "!type": "+Array<Titanium.Android.Calendar.Alert>"
                        },
                        "reminders": {
                            "!doc": "Existing reminders for this event.",
                            "!type": "+Array<Titanium.Android.Calendar.Reminder>"
                        },
                        "visibility": {
                            "!doc": "Visibility of this event.",
                            "!type": "numder"
                        },
                        "createAlert": {
                            "!doc": "Creates an alert for this event.",
                            "!type": "fn(data: +Dictionary<Titanium.Android.Calendar.Alert>) -> +Titanium.Android.Calendar.Alert"
                        },
                        "getExtendedProperty": {
                            "!doc": "Gets the value of the specified extended property.",
                            "!type": "fn(name: string) -> string"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "location": {
                            "!doc": "Location of this event.",
                            "!type": "string"
                        },
                        "setExtendedProperty": {
                            "!doc": "Sets the value of the specified extended property.",
                            "!type": "fn(name: string, value: string)"
                        },
                        "createReminder": {
                            "!doc": "Creates a reminder for this event.",
                            "!type": "fn(data: +Dictionary<Titanium.Android.Calendar.Reminder>) -> +Titanium.Android.Calendar.Reminder"
                        },
                        "hasExtendedProperties": {
                            "!doc": "Indicates whether [extendedProperties](Titanium.Android.Calendar.Event.extendedProperties) \nexists for this event.\n",
                            "!type": "bool"
                        },
                        "id": {
                            "!doc": "Identifier of this event.",
                            "!type": "string"
                        },
                        "hasAlarm": {
                            "!doc": "Indicates whether an alarm is scheduled for this event.",
                            "!type": "bool"
                        }
                    }
                },
                "allCalendars": {
                    "!doc": "All calendars known to the native calendar app.",
                    "!type": "+Array<Titanium.Android.Calendar.Calendar>"
                }
            },
            "FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET": {
                "!doc": "Corresponds to the Android `Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET` constant.",
                "!type": "numder"
            },
            "FLAG_UPDATE_CURRENT": {
                "!doc": "If the current pending intent already exists, only update the current intent's extra data.",
                "!type": "numder"
            },
            "ACTION_PACKAGE_RESTARTED": {
                "!doc": "The user has restarted a package, and all of its processes have been killed.",
                "!type": "string"
            },
            "PENDING_INTENT_FOR_ACTIVITY": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "ACTION_INSERT_OR_EDIT": {
                "!doc": "Pick an existing item or insert an empty item, then edit it.",
                "!type": "string"
            },
            "ACTION_SENDTO": {
                "!doc": "Deliver data to the recipient specified by the Intent's `data` property.",
                "!type": "string"
            },
            "FILL_IN_DATA": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "ACTION_PACKAGE_INSTALL": {
                "!doc": "Trigger the download and eventual installation of a package.",
                "!type": "string"
            },
            "Notification": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Notification",
                "!doc": "UI notifications that can be sent while the application is in the background.",
                "prototype": {
                    "category": {
                        "!doc": "Sets the notification's category.",
                        "!type": "string"
                    },
                    "sound": {
                        "!doc": "A URL to the sound to play.",
                        "!type": "string"
                    },
                    "ledARGB": {
                        "!doc": "The color for the LED to blink.",
                        "!type": "numder"
                    },
                    "contentView": {
                        "!doc": "Custom layout to display in the notification.",
                        "!type": "+Titanium.Android.RemoteViews"
                    },
                    "contentIntent": {
                        "!doc": "The `PendingIntent` to execute when the expanded status entry is clicked.",
                        "!type": "+Titanium.Android.PendingIntent"
                    },
                    "audioStreamType": {
                        "!doc": "The audio stream type to use when playing the sound.",
                        "!type": "numder"
                    },
                    "when": {
                        "!doc": "The timestamp for the notification (defaults to the current time).",
                        "!type": "+Date"
                    },
                    "number": {
                        "!doc": "The number of events that this notification represents.",
                        "!type": "numder"
                    },
                    "visibility": {
                        "!doc": "Allows user to conceal private information of the notification on the lockscreen.",
                        "!type": "numder"
                    },
                    "contentTitle": {
                        "!doc": "Title of the notification.",
                        "!type": "string"
                    },
                    "priority": {
                        "!doc": "Sets the priority of the notification.",
                        "!type": "numder"
                    },
                    "contentText": {
                        "!doc": "Description text of the notification.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "flags": {
                        "!doc": "Set of flags for the notification.",
                        "!type": "numder"
                    },
                    "tickerText": {
                        "!doc": "Text to scroll across the screen when this item is added to the status bar.",
                        "!type": "string"
                    },
                    "defaults": {
                        "!doc": "Specifies which values should be taken from the defaults.",
                        "!type": "numder"
                    },
                    "setLatestEventInfo": {
                        "!doc": "Sets the latest event info using the built-in notification view for this notification.",
                        "!type": "fn(contentTitle: string, contentText: string, contentIntent: +Titanium.Android.PendingIntent)"
                    },
                    "ledOnMS": {
                        "!doc": "The number of milliseconds for the LED to be on while it's flashing.",
                        "!type": "numder"
                    },
                    "icon": {
                        "!doc": "Notification icon, specified as an Android resource ID, or a local URL to a density-specific image.",
                        "!type": "numder"
                    },
                    "ledOffMS": {
                        "!doc": "The number of milliseconds for the LED to be off while it's flashing.",
                        "!type": "numder"
                    },
                    "deleteIntent": {
                        "!doc": "The `PendingIntent` to execute when the status entry is deleted by the user with the \"Clear All Notifications\" button.",
                        "!type": "+Titanium.Android.PendingIntent"
                    }
                }
            },
            "CATEGORY_DEFAULT": {
                "!doc": "Activity should be used as the default action to perform on a piece of data.",
                "!type": "string"
            },
            "Activity": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Activity",
                "!doc": "The Titanium binding of an Android Activity.",
                "prototype": {
                    "onResume": {
                        "!doc": "Callback function called when the Android activity is resumed.\n",
                        "!type": "+Callback<Object>"
                    },
                    "getString": {
                        "!doc": "Gets an Android or Application string using the specified Resource ID and optional format arguments.",
                        "!type": "fn(resourceId: numder, format: +Object) -> string"
                    },
                    "setRequestedOrientation": {
                        "!doc": "Sets the requested Activity orientation.",
                        "!type": "fn(orientation: numder)"
                    },
                    "onStop": {
                        "!doc": "Callback function called when the Android activity is stopped.\n",
                        "!type": "+Callback<Object>"
                    },
                    "onCreate": {
                        "!doc": "Callback function called when the Android activity is created.\n",
                        "!type": "+Callback<Object>"
                    },
                    "startActivity": {
                        "!doc": "Starts a new activity, using the passed in `Intent` as the description.",
                        "!type": "fn(intent: +Titanium.Android.Intent)"
                    },
                    "invalidateOptionsMenu": {
                        "!doc": "Declares that the option menu has changed and should be recreated.",
                        "!type": "fn()"
                    },
                    "onDestroy": {
                        "!doc": "Callback function called when the Android activity is destroyed.\n",
                        "!type": "+Callback<Object>"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "onPause": {
                        "!doc": "Callback function called when the Android activity is paused.\n",
                        "!type": "+Callback<Object>"
                    },
                    "startActivityForResult": {
                        "!doc": "The same as `startActivity`, but also accepts a callback function for handling the result of the started Activity.",
                        "!type": "fn(intent: +Titanium.Android.Intent, callback: +Callback<ActivityResult>)"
                    },
                    "sendBroadcastWithPermission": {
                        "!doc": "Broadcast the passed in `Intent` to all `BroadcastReceiver`s with an optional permission.",
                        "!type": "fn(intent: +Titanium.Android.Intent, receiverPermission: string)"
                    },
                    "finish": {
                        "!doc": "Closes this activity.",
                        "!type": "fn()"
                    },
                    "onStart": {
                        "!doc": "Callback function called when the Android activity is started.\n",
                        "!type": "+Callback<Object>"
                    },
                    "intent": {
                        "!doc": "The `Intent` that was used to start this Activity.",
                        "!type": "+Titanium.Android.Intent"
                    },
                    "onRestart": {
                        "!doc": "Callback function called when the Android activity is restarted.\n",
                        "!type": "+Callback<Object>"
                    },
                    "openOptionsMenu": {
                        "!doc": "Programmatically opens the options menu.",
                        "!type": "fn()"
                    },
                    "actionBar": {
                        "!doc": "The action bar for this activity.",
                        "!type": "+Titanium.Android.ActionBar"
                    },
                    "onCreateOptionsMenu": {
                        "!doc": "Callback function called to initially create an Android options menu\nfor this Activity when the user presses the **Menu** button.\n",
                        "!type": "+Callback<Object>"
                    },
                    "onPrepareOptionsMenu": {
                        "!doc": "Callback function called to prepare an options menu for display when the user presses\nthe **Menu** button. \n",
                        "!type": "+Callback<Object>"
                    },
                    "requestedOrientation": {
                        "!doc": "Specifies a specific orientation for this activity.",
                        "!type": "numder"
                    },
                    "sendBroadcast": {
                        "!doc": "Broadcast the passed in `Intent` to all `BroadcastReceiver`s.",
                        "!type": "fn(intent: +Titanium.Android.Intent)"
                    },
                    "setResult": {
                        "!doc": "Sets the result of this activity using an `Intent`.",
                        "!type": "fn(resultCode: numder, intent: +Titanium.Android.Intent)"
                    }
                }
            },
            "EXTRA_UID": {
                "!doc": "UID of the assigned packaged.",
                "!type": "string"
            },
            "ACTION_MEDIA_SHARED": {
                "!doc": "External media is unmounted because it is being shared via USB mass storage.",
                "!type": "string"
            },
            "CATEGORY_DEVELOPMENT_PREFERENCE": {
                "!doc": "Activity is in the development preference panel.",
                "!type": "string"
            },
            "PENDING_INTENT_FOR_SERVICE": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "ACTION_PICK": {
                "!doc": "Pick an item from the directory indicated by the Intent's `data` property.",
                "!type": "string"
            },
            "ACTION_INSERT": {
                "!doc": "Insert an empty item into the given container.",
                "!type": "string"
            },
            "ACTION_RUN": {
                "!doc": "Run the data.",
                "!type": "string"
            },
            "createPendingIntent": {
                "!doc": "Creates a [PendingIntent](Titanium.Android.PendingIntent) to be used inside a\n[Notification](Titanium.Android.Notification).\n",
                "!type": "fn(parameters: +Dictionary<Titanium.Android.PendingIntent>) -> +Titanium.Android.PendingIntent"
            },
            "SCREEN_ORIENTATION_UNSPECIFIED": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify that the system should use its default rules for determining the best\norientation.\n",
                "!type": "numder"
            },
            "ACTION_UMS_CONNECTED": {
                "!doc": "The device has entered USB Mass Storage mode.",
                "!type": "string"
            },
            "CATEGORY_HOME": {
                "!doc": "Home activity, the first activity that is displayed when the device boots.",
                "!type": "string"
            },
            "ACTION_PACKAGE_REMOVED": {
                "!doc": "An existing application package has been removed from the device.",
                "!type": "string"
            },
            "PENDING_INTENT_MAX_VALUE": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "SCREEN_ORIENTATION_PORTRAIT": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify a portrait screen orientation.\n",
                "!type": "numder"
            },
            "EXTRA_TEMPLATE": {
                "!doc": "Initial data to place in a newly created record.",
                "!type": "string"
            },
            "ACTION_SCREEN_ON": {
                "!doc": "Sent when the device wakes up and becomes interactive.",
                "!type": "string"
            },
            "CATEGORY_SELECTED_ALTERNATIVE": {
                "!doc": "Activity should be considered as an alternative selection action to the data the user\nhas currently selected.\n",
                "!type": "string"
            },
            "ACTION_SCREEN_OFF": {
                "!doc": "Sent when the device goes to sleep and becomes non-interactive.",
                "!type": "string"
            },
            "ACTION_DEVICE_STORAGE_LOW": {
                "!doc": "Indicates a low memory condition on the device.",
                "!type": "string"
            },
            "CATEGORY_TEST": {
                "!doc": "To be used as a test (not part of the normal user experience).",
                "!type": "string"
            },
            "FLAG_GRANT_READ_URI_PERMISSION": {
                "!doc": "Grant read permission on the URI in the Intent's data or clipboard.",
                "!type": "numder"
            },
            "ACTION_SEND_MULTIPLE": {
                "!doc": "Deliver multiple data to another activity.",
                "!type": "string"
            },
            "ACTION_ATTACH_DATA": {
                "!doc": "Used to indicate that the data is an attachment.",
                "!type": "string"
            },
            "EXTRA_DONT_KILL_APP": {
                "!doc": "Boolean indicating to restart the application or not.",
                "!type": "string"
            },
            "EXTRA_REPLACING": {
                "!doc": "Boolean indicating if the package is being replaced.",
                "!type": "string"
            },
            "PRIORITY_LOW": {
                "!doc": "Use for low priority notifications like software updates.",
                "!type": "numder"
            },
            "FILL_IN_CATEGORIES": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "CATEGORY_STATUS": {
                "!doc": "Notification category indicating ongoing information about device or contextual status.",
                "!type": "string"
            },
            "CATEGORY_RECOMMENDATION": {
                "!doc": "Notification category indicating a specific, timely recommendation for a single thing.",
                "!type": "string"
            },
            "ACTION_CALL": {
                "!doc": "Perform a call to someone specified by the `data` property.",
                "!type": "string"
            },
            "PRIORITY_MIN": {
                "!doc": "Use for expired events.",
                "!type": "numder"
            },
            "SHOW_AS_ACTION_WITH_TEXT": {
                "!doc": "When this item is in the action bar, always show it with a text label.",
                "!type": "numder"
            },
            "R": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.R",
                "!doc": "The Titanium binding of the Android system-wide resources class.",
                "prototype": {
                    "dimen": {
                        "!doc": "Dimension resources.  See \n[http://developer.android.com/reference/android/R.dimen.html](http://developer.android.com/reference/android/R.dimen.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "anim": {
                        "!doc": "Animation resources. See \n[R.anim](http://developer.android.com/reference/android/R.anim.html) \nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "layout": {
                        "!doc": "Layout resources. See \n[R.layout](http://developer.android.com/reference/android/R.layout.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "attr": {
                        "!doc": "Attribute resources. See \n[R.attr](http://developer.android.com/reference/android/R.attr.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "color": {
                        "!doc": "Color resources. See \n[R.color](http://developer.android.com/reference/android/R.color.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "style": {
                        "!doc": "Style resources. See \n[R.style](http://developer.android.com/reference/android/R.style.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "styleable": {
                        "!doc": "Styleable reosurces. See \n[R.styleable](http://developer.android.com/reference/android/R.styleable.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "id": {
                        "!doc": "ID resources.  See \n[R.id](http://developer.android.com/reference/android/R.id.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "integer": {
                        "!doc": "Integer resources. See \n[R.integer](http://developer.android.com/reference/android/R.integer.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "array": {
                        "!doc": "Array resources. See [R.array](http://developer.android.com/reference/android/R.array.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "drawable": {
                        "!doc": "Drawable resources. See \n[R.drawable](http://developer.android.com/reference/android/R.drawable.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    },
                    "string": {
                        "!doc": "String resources. See \n[R.string](http://developer.android.com/reference/android/R.string.html)\nin the Android Developer Reference.\n",
                        "!type": "+Object"
                    }
                }
            },
            "SCREEN_ORIENTATION_USER": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify that the system should use the user's preferred orientation.\n",
                "!type": "numder"
            },
            "FLAG_ACTIVITY_NO_HISTORY": {
                "!doc": "Do not keep the activity in the history stack.",
                "!type": "numder"
            },
            "EXTRA_EMAIL": {
                "!doc": "String array containing e-mail addresses.",
                "!type": "string"
            },
            "CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST": {
                "!doc": "To be used as test code for framework instrumentation tests.",
                "!type": "string"
            },
            "ACTION_WALLPAPER_CHANGED": {
                "!doc": "The current system wallpaper has changed.",
                "!type": "string"
            },
            "ACTION_PACKAGE_DATA_CLEARED": {
                "!doc": "The user has cleared the data of a package.",
                "!type": "string"
            },
            "SCREEN_ORIENTATION_LANDSCAPE": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify a landscape screen orientation.\n",
                "!type": "numder"
            },
            "EXTRA_SHORTCUT_ICON": {
                "!doc": "Bitmap icon.",
                "!type": "string"
            },
            "CATEGORY_TAB": {
                "!doc": "Activity to be used in a tab activity.",
                "!type": "string"
            },
            "CATEGORY_MESSAGE": {
                "!doc": "Notification category indicating an incoming direct message (SMS, instant message, etc.).",
                "!type": "string"
            },
            "ACTION_POWER_CONNECTED": {
                "!doc": "External power has been connected to the device.",
                "!type": "string"
            },
            "FLAG_NO_CREATE": {
                "!doc": "If the current intent does not exist, do not create it.",
                "!type": "numder"
            },
            "createBroadcastIntent": {
                "!doc": "Create an `Intent` to be used in a broadcast.",
                "!type": "fn(parameters: +Dictionary<Titanium.Android.Intent>) -> +Titanium.Android.Intent"
            },
            "EXTRA_SHORTCUT_ICON_RESOURCE": {
                "!doc": "Resource of the shortcut.",
                "!type": "string"
            },
            "MenuItem": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem",
                "!doc": "The Titanium binding of an Android menu item.",
                "prototype": {
                    "setChecked": {
                        "!doc": "Sets the [checked](Titanium.Android.MenuItem.checked) state of the menu item.",
                        "!type": "fn(enabled: bool)"
                    },
                    "visible": {
                        "!doc": "Determines whether the menu item is visible.",
                        "!type": "bool"
                    },
                    "isCheckable": {
                        "!doc": "Returns the [checkable](Titanium.Android.MenuItem.checkable) state of the menu item.\n",
                        "!type": "fn() -> bool"
                    },
                    "expandActionView": {
                        "!doc": "Expand the action view associated with this menu item.",
                        "!type": "fn()"
                    },
                    "checked": {
                        "!doc": "Determines if the item is checked.",
                        "!type": "bool"
                    },
                    "title": {
                        "!doc": "Title of the item.",
                        "!type": "string"
                    },
                    "isEnabled": {
                        "!doc": "Returns the [enabled](Titanium.Android.MenuItem.enabled) state of the menu item.",
                        "!type": "fn() -> bool"
                    },
                    "collapseActionView": {
                        "!doc": "Collapse the action view associated with this menu item.",
                        "!type": "fn()"
                    },
                    "groupId": {
                        "!doc": "Group ID for this item.",
                        "!type": "numder"
                    },
                    "isChecked": {
                        "!doc": "Returns the [checked](Titanium.Android.MenuItem.checked) state of the menu item.",
                        "!type": "fn() -> bool"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "setCheckable": {
                        "!doc": "Sets the [checkable](Titanium.Android.MenuItem.checkable) state of the menu item.",
                        "!type": "fn(checkable: bool)"
                    },
                    "setEnabled": {
                        "!doc": "Sets the [enabled](Titanium.Android.MenuItem.enabled) state of the menu item.",
                        "!type": "fn(enabled: bool)"
                    },
                    "isActionViewExpanded": {
                        "!doc": "Returns the [actionViewExpanded](Titanium.Android.MenuItem.actionViewExpanded) state of the menu item.\n",
                        "!type": "fn() -> bool"
                    },
                    "checkable": {
                        "!doc": "Determines if the item can be checked.",
                        "!type": "bool"
                    },
                    "actionView": {
                        "!doc": "Custom view that replaces the default menu item button.",
                        "!type": "+Titanium.UI.View"
                    },
                    "showAsAction": {
                        "!doc": "A set of flags that controls how this item appears in the action bar.",
                        "!type": "numder"
                    },
                    "icon": {
                        "!doc": "Icon to display for the this menu item.",
                        "!type": "numder"
                    },
                    "itemId": {
                        "!doc": "Item ID for this item.",
                        "!type": "numder"
                    },
                    "actionViewExpanded": {
                        "!doc": "True if this menu item's action view has been expanded.",
                        "!type": "bool"
                    },
                    "titleCondensed": {
                        "!doc": "Shortened version of the item's title.",
                        "!type": "string"
                    },
                    "enabled": {
                        "!doc": "Determines if the item is enabled.",
                        "!type": "bool"
                    },
                    "isVisible": {
                        "!doc": "Returns the [visible](Titanium.Android.MenuItem.visible) state of the menu item.",
                        "!type": "fn() -> bool"
                    },
                    "setVisible": {
                        "!doc": "Sets the [visible](Titanium.Android.MenuItem.visible) state of the menu item.",
                        "!type": "fn(visible: bool)"
                    },
                    "order": {
                        "!doc": "Integer used for controlling the category and sort order for menu items.",
                        "!type": "numder"
                    }
                }
            },
            "CATEGORY_PROGRESS": {
                "!doc": "Notification category indicating the progress of a long-running background operation.",
                "!type": "string"
            },
            "ACTION_VIEW": {
                "!doc": "Display data to the user.",
                "!type": "string"
            },
            "EXTRA_INTENT": {
                "!doc": "An Intent describing the choices you would like shown.",
                "!type": "string"
            },
            "SHOW_AS_ACTION_IF_ROOM": {
                "!doc": "Show this item as an action button if the system decides there is room for it.\n",
                "!type": "numder"
            },
            "PRIORITY_MAX": {
                "!doc": "Use for urgent or time-critical notifications, for example, turn-by-turn directions or\nemergency alerts.\n",
                "!type": "numder"
            },
            "ActionBar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.ActionBar",
                "!doc": "An action bar is a window feature that identifies the application and user location,\nand provides user actions and navigation modes.\n",
                "prototype": {
                    "setDisplayShowHomeEnabled": {
                        "!doc": "Shows or hides the action bar home icon",
                        "!type": "fn(show: bool)"
                    },
                    "hide": {
                        "!doc": "Hides the action bar if it is currently showing.",
                        "!type": "fn()"
                    },
                    "subtitle": {
                        "!doc": "Sets the subtitle of the action bar.",
                        "!type": "string"
                    },
                    "homeButtonEnabled": {
                        "!doc": "Enable or disable the \"home\" button in the corner of the action bar.",
                        "!type": "bool"
                    },
                    "title": {
                        "!doc": "Sets the title of the action bar.",
                        "!type": "string"
                    },
                    "onHomeIconItemSelected": {
                        "!doc": "Callback function called when the home icon is clicked.",
                        "!type": "+Callback"
                    },
                    "show": {
                        "!doc": "Shows the action bar if it is currently hidden.",
                        "!type": "fn()"
                    },
                    "navigationMode": {
                        "!doc": "Controls the navigation mode.",
                        "!type": "numder"
                    },
                    "setDisplayShowTitleEnabled": {
                        "!doc": "Shows or hides the action bar title/subtitle",
                        "!type": "fn(show: bool)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "backgroundImage": {
                        "!doc": "The background image for the action bar, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "logo": {
                        "!doc": "Sets the application logo displayed in the \"home\" area of the action bar, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "displayHomeAsUp": {
                        "!doc": "Displays an \"up\" affordance on the \"home\" area of the action bar.",
                        "!type": "bool"
                    },
                    "icon": {
                        "!doc": "Sets the application icon displayed in the \"home\" area of the action bar, specified as a local file path or URL.",
                        "!type": "string"
                    }
                }
            },
            "ACTION_GTALK_SERVICE_DISCONNECTED": {
                "!doc": "GTalk connections has been disconnected.",
                "!type": "string"
            },
            "PRIORITY_HIGH": {
                "!doc": "Use for high priority notifications like real-time chat messages.",
                "!type": "numder"
            },
            "SCREEN_ORIENTATION_BEHIND": {
                "!doc": "Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to\nspecify the activity should run in the same orientation as the activity behind it\nin the activity stack.\n",
                "!type": "numder"
            },
            "Menu": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Menu",
                "!doc": "The Titanium binding of an Android Options Menu.",
                "prototype": {
                    "setGroupVisible": {
                        "!doc": "Shows or hides a group of menu items identified by a\n[groupId](Titanium.Android.MenuItem.groupId).\n",
                        "!type": "fn(groupId: numder, visible: bool)"
                    },
                    "removeGroup": {
                        "!doc": "Removes all menu items with the specified\n[groupId](Titanium.Android.MenuItem.groupId).\n",
                        "!type": "fn(groupId: numder)"
                    },
                    "items": {
                        "!doc": "Array of menu items in this menu.",
                        "!type": "+Array<Titanium.Android.MenuItem>"
                    },
                    "clear": {
                        "!doc": "Clears all items from this menu.",
                        "!type": "fn()"
                    },
                    "setGroupEnabled": {
                        "!doc": "Enables or disables a group of menu items identified by a\n[groupId](Titanium.Android.MenuItem.groupId).\n",
                        "!type": "fn(groupId: numder, enabled: bool)"
                    },
                    "hasVisibleItems": {
                        "!doc": "Returns `true` if this menu has visible items.",
                        "!type": "fn() -> bool"
                    },
                    "add": {
                        "!doc": "Creates a <Titanium.Android.MenuItem> from the passed creation options.",
                        "!type": "fn(options: +Object) -> +Titanium.Android.MenuItem"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "getItem": {
                        "!doc": "Returns the [MenuItem](Titanium.Android.MenuItem) at a specific index.",
                        "!type": "fn(index: numder) -> +Titanium.Android.MenuItem"
                    },
                    "removeItem": {
                        "!doc": "Removes a specific [MenuItem](Titanium.Android.MenuItem) identified by its\n[itemId](Titanium.Android.MenuItem.itemId).\n",
                        "!type": "fn(itemId: numder)"
                    },
                    "close": {
                        "!doc": "Closes the menu, if visible.",
                        "!type": "fn()"
                    },
                    "findItem": {
                        "!doc": "Locates a [MenuItem](Titanium.Android.MenuItem) in this menu, by item ID or reference.",
                        "!type": "fn(item: numder) -> +Titanium.Android.MenuItem"
                    },
                    "size": {
                        "!doc": "Number of items in this menu.",
                        "!type": "fn() -> numder"
                    }
                }
            },
            "START_REDELIVER_INTENT": {
                "!doc": "A Service start mode indicating that if the host application is stopped by Android, the service should be restarted automatically and the original Intent re-sent.",
                "!type": "numder"
            },
            "ACTION_HEADSET_PLUG": {
                "!doc": "A wired headset has been plugged in or unplugged.",
                "!type": "string"
            },
            "ACTION_GTALK_SERVICE_CONNECTED": {
                "!doc": "GTalk connection has been established.",
                "!type": "string"
            },
            "EXTRA_ALARM_COUNT": {
                "!doc": "Integer indicating how many pending alarms are being delivered with the intent.",
                "!type": "string"
            },
            "ACTION_MEDIA_BUTTON": {
                "!doc": "The media button was pressed.",
                "!type": "string"
            },
            "ACTION_CHOOSER": {
                "!doc": "Display an activity chooser.",
                "!type": "string"
            },
            "RESULT_CANCELED": {
                "!doc": "Used with [setResult](Titanium.Android.Activity.setResult) to specify that\nan activity was canceled.\n",
                "!type": "numder"
            },
            "STREAM_ALARM": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to\nrequest that the alarm stream type for notifications be used.\n",
                "!type": "numder"
            },
            "FLAG_ACTIVITY_NEW_TASK": {
                "!doc": "Activity will be the start of a new task (collection of activities).",
                "!type": "numder"
            },
            "ACTION_REBOOT": {
                "!doc": "Device rebooted.",
                "!type": "string"
            },
            "ACTION_SET_WALLPAPER": {
                "!doc": "Show settings for choosing the system wallpaper.",
                "!type": "string"
            },
            "ACTION_WEB_SEARCH": {
                "!doc": "Perform a web search.",
                "!type": "string"
            },
            "FLAG_RECEIVER_REGISTERED_ONLY": {
                "!doc": "When sending a broadcast, only registered receivers will be called.",
                "!type": "numder"
            },
            "ACTION_BOOT_COMPLETED": {
                "!doc": "Indicates the system has finished booting.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS": {
                "!doc": "Exclude the activity from recently launched activities.",
                "!type": "numder"
            },
            "CATEGORY_ALTERNATIVE": {
                "!doc": "Set if the activity should be considered as an alternative action to the data the user is currently viewing.",
                "!type": "string"
            },
            "PendingIntent": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.PendingIntent",
                "!doc": "The Titanium binding of an Android `PendingIntent`.",
                "prototype": {
                    "intent": {
                        "!doc": "The intent data to pass to the [Activity](Titanium.Android.Activity) launched by this `PendingIntent`.\n",
                        "!type": "+Titanium.Android.Intent"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "flags": {
                        "!doc": "Flags used for creating the Pending Intent.",
                        "!type": "numder"
                    },
                    "updateCurrentIntent": {
                        "!doc": "If this property is true, flag <Titanium.Android.FLAG_UPDATE_CURRENT> will be\nappended to `flags` automatically. Default value is true.\n",
                        "!type": "bool"
                    }
                }
            },
            "NAVIGATION_MODE_STANDARD": {
                "!doc": "Standard Action Bar navigation mode",
                "!type": "numder"
            },
            "ACTION_MEDIA_BAD_REMOVAL": {
                "!doc": "External media was removed from SD card slot, but mount point was not unmounted.",
                "!type": "string"
            },
            "FILL_IN_PACKAGE": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "PENDING_INTENT_FOR_BROADCAST": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android",
            "startService": {
                "!doc": "Starts a simple service.",
                "!type": "fn(intent: +Titanium.Android.Intent)"
            },
            "FLAG_ONLY_ALERT_ONCE": {
                "!doc": "Play an alert (sound, lights, and/or vibration) once each time the notification is sent, even if it has not been canceled before that.",
                "!type": "numder"
            },
            "CATEGORY_ERROR": {
                "!doc": "Notification category indicating an error in background operation or authentication status.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_CLEAR_TOP": {
                "!doc": "If the activity is present, removes any activities on top of it to make it the foreground activity.\n",
                "!type": "numder"
            },
            "EXTRA_TITLE": {
                "!doc": "Corresponds to the Android `Intent.EXTRA_TITLE` constant.",
                "!type": "string"
            },
            "CATEGORY_SERVICE": {
                "!doc": "Notification category for a running background service.",
                "!type": "string"
            },
            "registerBroadcastReceiver": {
                "!doc": "Registers broadcast receiver for the given actions",
                "!type": "fn(broadcastReceiver: +Titanium.Android.BroadcastReceiver, actions: [string])"
            },
            "RemoteViews": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.RemoteViews",
                "!doc": "The Titanium binding of [Android RemoteViews](http://developer.android.com/reference/android/widget/RemoteViews.html). \n",
                "prototype": {
                    "layoutId": {
                        "!doc": "Android layout resource ID for the view to display. Required.",
                        "!type": "numder"
                    },
                    "setDouble": {
                        "!doc": "Calls a method taking a single `double` argument on a view in the remote view\nhierarchy.\n",
                        "!type": "fn(viewId: numder, methodName: string, value: numder)"
                    },
                    "setImageViewResource": {
                        "!doc": "Sets the image for an image view in the remote view hierarchy using an Android drawable resource.",
                        "!type": "fn(viewId: numder, srcId: numder)"
                    },
                    "packageName": {
                        "!doc": "Package name that the resource ID lives in. Optional.",
                        "!type": "string"
                    },
                    "setInt": {
                        "!doc": "Calls a method taking a single `int` argument on a view in the remote view hierarchy.\n",
                        "!type": "fn(viewId: numder, methodName: string, value: numder)"
                    },
                    "setOnClickPendingIntent": {
                        "!doc": "Launches a <Titanium.Android.PendingIntent> when the specified view is clicked.",
                        "!type": "fn(viewId: numder, pendingIntent: +Titanium.Android.PendingIntent)"
                    },
                    "setImageViewUri": {
                        "!doc": "Sets the image for an image view in the remote view hierarchy using a URI.\n",
                        "!type": "fn(viewId: numder, uri: string)"
                    },
                    "setViewVisibility": {
                        "!doc": "Sets the visibility of a view in the remote view hierarchy.",
                        "!type": "fn(viewId: numder, visibility: numder)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "setUri": {
                        "!doc": "Calls a method taking one URI on a view in the remote view hierarchy.",
                        "!type": "fn(viewId: numder, methodName: string, value: string)"
                    },
                    "setTextColor": {
                        "!doc": "Sets the text color of a view in the remote view hierarchy.",
                        "!type": "fn(viewId: numder, color: numder)"
                    },
                    "setChronometer": {
                        "!doc": "Sets the base time, format string, and started flag for a chronometer\nin the remote view hierarchy.\n",
                        "!type": "fn(viewId: numder, base: +Date, format: string, started: bool)"
                    },
                    "setTextViewText": {
                        "!doc": "Sets the text of a text view in the remote view hierarchy.",
                        "!type": "fn(viewId: numder, text: string)"
                    },
                    "setProgressBar": {
                        "!doc": "Sets the progress, max value, and indeterminate flag of a progress bar in the\nremote view hierarchy.\n",
                        "!type": "fn(viewId: numder, max: numder, progress: numder, indeterminate: bool)"
                    },
                    "setBoolean": {
                        "!doc": "Calls a method taking a single `boolean` argument on a view in the remote view\nhierarchy.  See Android's documentation for\n[setBoolean](http://developer.android.com/reference/android/widget/RemoteViews.html#setBoolean(int, java.lang.String, boolean)).\n",
                        "!type": "fn(viewId: numder, methodName: string, value: bool)"
                    },
                    "setString": {
                        "!doc": "Calls a method taking a single String argument on a view in the remote view\nhierarchy.\n",
                        "!type": "fn(viewId: numder, methodName: string, value: string)"
                    }
                }
            },
            "FILL_IN_ACTION": {
                "!doc": "Not used.",
                "!type": "numder"
            },
            "ACTION_CALL_BUTTON": {
                "!doc": "User pressed the call button.",
                "!type": "string"
            },
            "ACTION_MEDIA_CHECKING": {
                "!doc": "External media is present and being disk-checked",
                "!type": "string"
            },
            "EXTRA_KEY_EVENT": {
                "!doc": "A KeyEvent object containing the event that triggered the creation of the Intent it is in.",
                "!type": "string"
            },
            "ACTION_MEDIA_SCANNER_STARTED": {
                "!doc": "The media scanner has started scanning a directory.",
                "!type": "string"
            },
            "FLAG_ACTIVITY_SINGLE_TOP": {
                "!doc": "Do not launch the activity if it is already running.",
                "!type": "numder"
            },
            "ACTION_POWER_USAGE_SUMMARY": {
                "!doc": "Show power usage information to the user.",
                "!type": "string"
            },
            "CATEGORY_EMBED": {
                "!doc": "Activity can run inside a parent activity.",
                "!type": "string"
            },
            "ACTION_DEFAULT": {
                "!doc": "Default action, which is `Titanium.Android.ACTION_VIEW`",
                "!type": "string"
            },
            "CATEGORY_PREFERENCE": {
                "!doc": "This activity is a preference panel.",
                "!type": "string"
            },
            "SHOW_AS_ACTION_ALWAYS": {
                "!doc": "Always show this item as an action button in the action bar.",
                "!type": "numder"
            },
            "CATEGORY_EVENT": {
                "!doc": "Notification category indicating a calendar event.",
                "!type": "string"
            },
            "createIntentChooser": {
                "!doc": "Creates an activity chooser intent, used to allow the user to select a target activity\nfor an intent.\n",
                "!type": "fn(intent: +Titanium.Android.Intent, title: string) -> +Titanium.Android.Intent"
            },
            "CATEGORY_PROMO": {
                "!doc": "Notification category indicating a promotion or advertisement.",
                "!type": "string"
            },
            "NotificationManager": {
                "FLAG_ONLY_ALERT_ONCE": {
                    "!doc": "Use <Titanium.Android.FLAG_ONLY_ALERT_ONCE> instead.",
                    "!type": "numder"
                },
                "FLAG_AUTO_CANCEL": {
                    "!doc": "Use <Titanium.Android.FLAG_AUTO_CANCEL> instead.",
                    "!type": "numder"
                },
                "FLAG_INSISTENT": {
                    "!doc": "Use <Titanium.Android.FLAG_INSISTENT> instead.",
                    "!type": "numder"
                },
                "FLAG_NO_CLEAR": {
                    "!doc": "Use <Titanium.Android.FLAG_NO_CLEAR> instead.",
                    "!type": "numder"
                },
                "!doc": "Module for managing notifications.",
                "FLAG_SHOW_LIGHTS": {
                    "!doc": "Use <Titanium.Android.FLAG_SHOW_LIGHTS> instead.",
                    "!type": "numder"
                },
                "FLAG_ONGOING_EVENT": {
                    "!doc": "Use <Titanium.Android.FLAG_ONGOING_EVENT> instead.",
                    "!type": "numder"
                },
                "STREAM_DEFAULT": {
                    "!doc": "Use <Titanium.Android.STREAM_DEFAULT> instead.",
                    "!type": "numder"
                },
                "cancel": {
                    "!doc": "Cancels a previously displayed notification.",
                    "!type": "fn(id: numder)"
                },
                "cancelAll": {
                    "!doc": "Cancels all previously displayed notifications.",
                    "!type": "fn()"
                },
                "DEFAULT_VIBRATE": {
                    "!doc": "Use <Titanium.Android.DEFAULT_VIBRATE> instead.",
                    "!type": "numder"
                },
                "notify": {
                    "!doc": "Adds a persistent notification to the status bar.",
                    "!type": "fn(id: numder, notification: +Titanium.Android.Notification)"
                },
                "DEFAULT_LIGHTS": {
                    "!doc": "Use <Titanium.Android.DEFAULT_LIGHTS> instead.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.NotificationManager",
                "DEFAULT_SOUND": {
                    "!doc": "Use <Titanium.Android.DEFAULT_SOUND> instead.",
                    "!type": "numder"
                },
                "DEFAULT_ALL": {
                    "!doc": "Use <Titanium.Android.DEFAULT_ALL> instead.",
                    "!type": "numder"
                }
            },
            "RESULT_FIRST_USER": {
                "!doc": "Used with [setResult](Titanium.Android.Activity.setResult) to specify a\nuser-defined result.\n",
                "!type": "numder"
            },
            "unregisterBroadcastReceiver": {
                "!doc": "Unregisters a broadcast receiver",
                "!type": "fn(broadcastReceiver: +Titanium.Android.BroadcastReceiver)"
            },
            "STREAM_RING": {
                "!doc": "Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the\nring stream type for notifications be used.\n",
                "!type": "numder"
            }
        },
        "Network": {
            "BonjourBrowser": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.BonjourBrowser",
                "!doc": "A browser for the discovery and retrieval of Bonjour services available on the network.",
                "prototype": {
                    "search": {
                        "!doc": "Conduct a search for Bonjour services matching the type and domain specified during creation",
                        "!type": "fn()"
                    },
                    "isSearching": {
                        "!doc": "Whether or not the browser is currently searching",
                        "!type": "bool"
                    },
                    "domain": {
                        "!doc": "The domain the browser is searching in",
                        "!type": "string"
                    },
                    "serviceType": {
                        "!doc": "The type of the service the browser searches for",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "stopSearch": {
                        "!doc": "Halt an ongoing search",
                        "!type": "fn()"
                    }
                }
            },
            "addHTTPCookie": {
                "!doc": "Adds a cookie to the HTTP client cookie store.\n",
                "!type": "fn(cookie: +Titanium.Network.Cookie)"
            },
            "NOTIFICATION_TYPE_ALERT": {
                "!doc": "Constant value for an Alert style push notification.",
                "!type": "numder"
            },
            "NETWORK_MOBILE": {
                "!doc": "A [networkType](Titanium.Network.networkType) value indicating that the device is\ncommunicating over a mobile network.\n",
                "!type": "numder"
            },
            "networkTypeName": {
                "!doc": "Network type as a String. Returns one of `NONE`, `WIFI`, `LAN`, `MOBILE`, or `UNKNOWN`.",
                "!type": "string"
            },
            "!doc": "The top level network module.",
            "NOTIFICATION_TYPE_SOUND": {
                "!doc": "Constant value for a Sound style push notification.",
                "!type": "numder"
            },
            "remoteNotificationTypes": {
                "!doc": "Array of push notification type constants enabled for the application.",
                "!type": "[numder]"
            },
            "NOTIFICATION_TYPE_BADGE": {
                "!doc": "Constant value for a Badge style push notification.",
                "!type": "numder"
            },
            "SOCKET_LISTENING": {
                "!doc": "Constant value representing a socket in the LISTENING state.",
                "!type": "numder"
            },
            "READ_MODE": {
                "!doc": "Constant value specifying read-only mode for sockets.",
                "!type": "numder"
            },
            "remoteDeviceUUID": {
                "!doc": "Remote device UUID if the device is registered with the Apple Push Notification\nService, or null if it is not registered.\n",
                "!type": "string"
            },
            "SOCKET_CONNECTED": {
                "!doc": "Constant value representing a socket in the CONNECTED state.",
                "!type": "numder"
            },
            "Socket": {
                "createTCP": {
                    "!doc": "Returns a new TCP socket object.",
                    "!type": "fn(params: +Dictionary<Titanium.Network.Socket.TCP>) -> +Titanium.Network.Socket.TCP"
                },
                "LISTENING": {
                    "!doc": "State value representing a socket that is listening for connections.",
                    "!type": "numder"
                },
                "!doc": "Socket module, used for creating sockets.",
                "TCP": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.Socket.TCP",
                    "!doc": "TCP socket that implements the `Titanium.IOStream` interface.",
                    "prototype": {
                        "accept": {
                            "!doc": "Tells a [LISTENING](Titanium.Network.Socket.LISTENING) socket to accept a connection request at the top of a listener's request queue when one becomes available.",
                            "!type": "fn(options: +AcceptDict)"
                        },
                        "state": {
                            "!doc": "Current state of the socket.",
                            "!type": "numder"
                        },
                        "listenQueueSize": {
                            "!doc": "Max number of pending incoming connections to be allowed when the socket is in the [LISTENING](Titanium.Network.Socket.LISTENING) state.",
                            "!type": "numder"
                        },
                        "host": {
                            "!doc": "The host to connect to or listen on.",
                            "!type": "string"
                        },
                        "!proto": "Titanium.IOStream.prototype",
                        "connected": {
                            "!doc": "Callback to be fired when the socket enters the \"connected\" state.",
                            "!type": "+Callback<ConnectedCallbackArgs>"
                        },
                        "connect": {
                            "!doc": "Attempts to connect the socket to its host/port.",
                            "!type": "fn()"
                        },
                        "timeout": {
                            "!doc": "Timeout, in milliseconds, for `connect` and all `write` operations.",
                            "!type": "numder"
                        },
                        "error": {
                            "!doc": "Callback to be fired when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.",
                            "!type": "+Callback<ErrorCallbackArgs>"
                        },
                        "close": {
                            "!doc": "Closes a socket.",
                            "!type": "fn()"
                        },
                        "accepted": {
                            "!doc": "Callback to be fired when a listener accepts a connection.",
                            "!type": "+Callback<AcceptedCallbackArgs>"
                        },
                        "port": {
                            "!doc": "The port to connect to or listen on.",
                            "!type": "numder"
                        },
                        "listen": {
                            "!doc": "Attempts to start listening on the socket's host/port.",
                            "!type": "fn()"
                        }
                    }
                },
                "CONNECTED": {
                    "!doc": "State value representing a connected socket.",
                    "!type": "numder"
                },
                "CLOSED": {
                    "!doc": "State value representing a closed socket.",
                    "!type": "numder"
                },
                "ERROR": {
                    "!doc": "State value indicating an error has occurred on the socket.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.Socket",
                "INITIALIZED": {
                    "!doc": "State value representing an initialized socket.",
                    "!type": "numder"
                }
            },
            "PROGRESS_UNKNOWN": {
                "!doc": "Constant value specifying that the progress of a download can not be calculated.",
                "!type": "numder"
            },
            "NETWORK_NONE": {
                "!doc": "A [networkType](Titanium.Network.networkType) value indicating that no \nnetwork is available.\n",
                "!type": "numder"
            },
            "SOCKET_CLOSED": {
                "!doc": "Constant value representing a socket in the CLOSED state.",
                "!type": "numder"
            },
            "createBonjourBrowser": {
                "!doc": "Creates and returns a `BonjourBrowser` object.",
                "!type": "fn(serviceType: string, domain: string, parameters: +Dictionary<Titanium.Network.BonjourBrowser>) -> +Titanium.Network.BonjourBrowser"
            },
            "BonjourService": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.BonjourService",
                "!doc": "Describes a service on the network which is published by Bonjour.",
                "prototype": {
                    "domain": {
                        "!doc": "the domain of the service",
                        "!type": "string"
                    },
                    "resolve": {
                        "!doc": "Resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.",
                        "!type": "fn(timeout: numder)"
                    },
                    "name": {
                        "!doc": "the name of the service",
                        "!type": "string"
                    },
                    "isLocal": {
                        "!doc": "whether or not the service is local to the device",
                        "!type": "bool"
                    },
                    "stop": {
                        "!doc": "Halts publication of a service.",
                        "!type": "fn()"
                    },
                    "publish": {
                        "!doc": "Publish a Bonjour service to the network.  Only works if isLocal is TRUE",
                        "!type": "fn(socket: +Object)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "type": {
                        "!doc": "the type of the service",
                        "!type": "string"
                    },
                    "socket": {
                        "!doc": "the TCPSocket object that is used to connect to the service",
                        "!type": "+Object"
                    }
                }
            },
            "Cookie": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.Cookie",
                "!doc": "Cookie object used to manage the system cookie store and HTTP client cookie store.",
                "prototype": {
                    "comment": {
                        "!doc": "The comment describing the purpose of this cookie",
                        "!type": "string"
                    },
                    "domain": {
                        "!doc": "The domain attribute of the cookie.",
                        "!type": "string"
                    },
                    "originalUrl": {
                        "!doc": "The origual url attribute of the cookie.",
                        "!type": "string"
                    },
                    "name": {
                        "!doc": "The name of the cookie.",
                        "!type": "string"
                    },
                    "isValid": {
                        "!doc": "Returns true if the cookie is valid.",
                        "!type": "fn() -> bool"
                    },
                    "value": {
                        "!doc": "The value of the cookie.",
                        "!type": "string"
                    },
                    "expiryDate": {
                        "!doc": "The expiration Date of the cookie.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "version": {
                        "!doc": "The version of the cookie specification to which this cookie conforms.",
                        "!type": "numder"
                    },
                    "path": {
                        "!doc": "The path attribute of the cookie.",
                        "!type": "string"
                    },
                    "httponly": {
                        "!doc": "The httponly attribute of the cookie.",
                        "!type": "bool"
                    },
                    "secure": {
                        "!doc": "The secure attribute of the cookie.",
                        "!type": "bool"
                    }
                }
            },
            "NETWORK_UNKNOWN": {
                "!doc": "A [networkType](Titanium.Network.networkType) value indicating that the  \ncurrent network type is unknown.\n",
                "!type": "numder"
            },
            "online": {
                "!doc": "Boolean value indicating if the device can reach the Internet.",
                "!type": "bool"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network",
            "removeHTTPCookie": {
                "!doc": "Removes the cookie with the domain, path and name exactly the same as the given values from the HTTP client cookie store.\n",
                "!type": "fn(domain: string, path: string, name: string)"
            },
            "removeSystemCookie": {
                "!doc": "Removes the cookie with the domain, path and name exactly the same as the given values from the system cookie store.\n",
                "!type": "fn(domain: string, path: string, name: string)"
            },
            "TCPSocket": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.TCPSocket",
                "!doc": "The TCPSocket instance returned from <Titanium.Network.createTCPSocket>.  This object\nrepresents a socket which either listens locally on the device for connections,\nor connects to a remote machine.\n",
                "prototype": {
                    "isValid": {
                        "!doc": "whether or not the socket is valid",
                        "!type": "bool"
                    },
                    "hostName": {
                        "!doc": "the host name to connect to.  Must be <Titanium.Network.INADDR_ANY> or an identifier for the local device in order to listen",
                        "!type": "string"
                    },
                    "stripTerminator": {
                        "!doc": "strip terminating null character when sending string data; default is false",
                        "!type": "bool"
                    },
                    "write": {
                        "!doc": "write data to the socket, if the mode is WRITE_MODE or READ_WRITE_MODE",
                        "!type": "fn(data: +Object, sendTo: numder)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "mode": {
                        "!doc": "the socket's mode",
                        "!type": "numder"
                    },
                    "close": {
                        "!doc": "close the socket",
                        "!type": "fn()"
                    },
                    "listen": {
                        "!doc": "set up the socket to receive connections",
                        "!type": "fn()"
                    },
                    "port": {
                        "!doc": "the port to connect/listen on",
                        "!type": "numder"
                    },
                    "connect": {
                        "!doc": "connect the scocket to a TCP server",
                        "!type": "fn()"
                    }
                }
            },
            "SOCKET_INITIALIZED": {
                "!doc": "Constant value representing a socket in the INITIALIZED state.",
                "!type": "numder"
            },
            "removeConnectivityListener": {
                "!doc": "Legacy method to remove a connectivity listener.\n",
                "!type": "fn(callback: +Callback<Object>)"
            },
            "allHTTPCookies": {
                "!doc": "A list of all cookies in the cookie storage.",
                "!type": "+Array<Titanium.Network.Cookie>"
            },
            "createBonjourService": {
                "!doc": "Creates and returns a `BonjourService` object.",
                "!type": "fn(name: string, type: string, domain: string, parameters: +Dictionary<Titanium.Network.BonjourService>) -> +Titanium.Network.BonjourService"
            },
            "NOTIFICATION_TYPE_NEWSSTAND": {
                "!doc": "Constant value for a Newsstand style push notification. Only available on iOS5 and later",
                "!type": "numder"
            },
            "addSystemCookie": {
                "!doc": "Adds a cookie to the system cookie store.\n",
                "!type": "fn(cookie: +Titanium.Network.Cookie)"
            },
            "remoteNotificationsEnabled": {
                "!doc": "Indicates whether push  notifications have been enabled using \n[registerForPushNotifications](Titanium.Network.registerForPushNotifications).\n",
                "!type": "bool"
            },
            "createTCPSocket": {
                "!doc": "Legacy method to create and return an instance of <Titanium.Network.TCPSocket>.\n",
                "!type": "fn(hostName: string, port: numder, mode: numder, parameters: +Dictionary<Titanium.Network.TCPSocket>) -> +Titanium.Network.TCPSocket"
            },
            "removeAllHTTPCookies": {
                "!doc": "Removes all the cookies from the HTTP client cookie store.\n",
                "!type": "fn()"
            },
            "decodeURIComponent": {
                "!doc": "Returns a decoded version of a URI encoded value.",
                "!type": "fn(value: string) -> string"
            },
            "removeAllSystemCookies": {
                "!doc": "Removes all the cookie from the system client cookie store.\n",
                "!type": "fn()"
            },
            "NETWORK_LAN": {
                "!doc": "A [networkType](Titanium.Network.networkType) value indicating that the device is\ncommunicating over a local-area network.\n",
                "!type": "numder"
            },
            "removeHTTPCookiesForDomain": {
                "!doc": "Removes the cookies with the domain matched with the given values from the HTTP client cookie store.\n",
                "!type": "fn(domain: string)"
            },
            "networkType": {
                "!doc": "Network type value as a constant.",
                "!type": "numder"
            },
            "HTTPClient": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.HTTPClient",
                "!doc": "HTTP client object that (mostly) implements the XMLHttpRequest specification.",
                "prototype": {
                    "username": {
                        "!doc": "Sets the username parameter for authentication credentials.",
                        "!type": "string"
                    },
                    "domain": {
                        "!doc": "Sets the domain parameter for authentication credentials.",
                        "!type": "string"
                    },
                    "LOADING": {
                        "!doc": "Ready state constant indicating that response data is being received from the remote server.\n",
                        "!type": "numder"
                    },
                    "responseText": {
                        "!doc": "Response as text.",
                        "!type": "string"
                    },
                    "onerror": {
                        "!doc": "Function to be called upon a error response.",
                        "!type": "+Callback<FailureResponse>"
                    },
                    "enableKeepAlive": {
                        "!doc": "Determines whether the client should attempt to keep a persistent connection.",
                        "!type": "bool"
                    },
                    "UNSENT": {
                        "!doc": "Ready state constant indicating that HTTPClient request has not been opened or sent.",
                        "!type": "numder"
                    },
                    "abort": {
                        "!doc": "Cancels a pending request.",
                        "!type": "fn()"
                    },
                    "DONE": {
                        "!doc": "Ready state constant indicating that the request is complete.",
                        "!type": "numder"
                    },
                    "send": {
                        "!doc": "Sends the request.",
                        "!type": "fn(data: +Object)"
                    },
                    "file": {
                        "!doc": "Target local file to receive data.",
                        "!type": "string"
                    },
                    "getResponseHeader": {
                        "!doc": "Returns the value of the specified response header.",
                        "!type": "fn(name: string) -> string"
                    },
                    "responseXML": {
                        "!doc": "Response object as an XML DOM Document object.",
                        "!type": "+Titanium.XML.Document"
                    },
                    "open": {
                        "!doc": "Opens the request and prepares the connection.",
                        "!type": "fn(method: string, url: string, async: bool)"
                    },
                    "onload": {
                        "!doc": "Function to be called upon a successful response.",
                        "!type": "+Callback<SuccessResponse>"
                    },
                    "tlsVersion": {
                        "!doc": "Sets the TLS version to use for handshakes.",
                        "!type": "numder"
                    },
                    "OPENED": {
                        "!doc": "Ready state constant indicating that the connection has been opened, but the request has\nnot yet been sent.\n",
                        "!type": "numder"
                    },
                    "statusText": {
                        "!doc": "Human-readable status message associated with the status code.",
                        "!type": "string"
                    },
                    "cache": {
                        "!doc": "Determines whether HTTP responses are cached.",
                        "!type": "bool"
                    },
                    "setRequestHeader": {
                        "!doc": "Sets the value for the specified request header. Must be called after `open` but before `send`.\n",
                        "!type": "fn(name: string, value: string)"
                    },
                    "connectionType": {
                        "!doc": "Connection type, normally either `GET` or `POST`.",
                        "!type": "string"
                    },
                    "autoRedirect": {
                        "!doc": "Determines whether automatic automatic handling of HTTP redirects is enabled.",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "location": {
                        "!doc": "Absolute URL of the request.",
                        "!type": "string"
                    },
                    "status": {
                        "!doc": "Response HTTP status code.",
                        "!type": "numder"
                    },
                    "addTrustManager": {
                        "!doc": "Adds a custom trust manager.",
                        "!type": "fn(X509TrustManager: +Object)"
                    },
                    "setTimeout": {
                        "!doc": "Sets the request timeout.",
                        "!type": "fn(timeout: numder)"
                    },
                    "ondatastream": {
                        "!doc": "Function to be called at regular intervals as the request data is being received.",
                        "!type": "+Callback<Object>"
                    },
                    "clearCookies": {
                        "!doc": "Clears any cookies stored for the host.",
                        "!type": "fn(host: string)"
                    },
                    "connected": {
                        "!doc": "Indicates whether the response was successful.",
                        "!type": "bool"
                    },
                    "HEADERS_RECEIVED": {
                        "!doc": "Ready state constant indicating that response headers have been received.",
                        "!type": "numder"
                    },
                    "password": {
                        "!doc": "Sets the password parameter for authentication credentials.",
                        "!type": "string"
                    },
                    "validatesSecureCertificate": {
                        "!doc": "Determines how SSL certification validation is performed on connection.",
                        "!type": "bool"
                    },
                    "autoEncodeUrl": {
                        "!doc": "Determines whether automatic encoding is enabled for the specified URL.",
                        "!type": "bool"
                    },
                    "responseData": {
                        "!doc": "Response data as a `Blob` object.",
                        "!type": "+Titanium.Blob"
                    },
                    "readyState": {
                        "!doc": "The current ready state of this HTTP request.",
                        "!type": "numder"
                    },
                    "withCredentials": {
                        "!doc": "Determines whether the request should include any cookies and HTTP authentication information.\n",
                        "!type": "bool"
                    },
                    "addKeyManager": {
                        "!doc": "Adds a custom key manager.",
                        "!type": "fn(X509KeyManager: +Object)"
                    },
                    "securityManager": {
                        "!doc": "The Security Manager for this client.",
                        "!type": "+SecurityManagerProtocol"
                    },
                    "addAuthFactory": {
                        "!doc": "Registers a new AuthSchemeFactory for a given scheme.",
                        "!type": "fn(scheme: string, factory: +Object)"
                    },
                    "onreadystatechange": {
                        "!doc": "Function to be called for each [readyState](Titanium.Network.HTTPClient.readyState) change.\n",
                        "!type": "+Callback<Object>"
                    },
                    "allResponseHeaders": {
                        "!doc": "All of the response headers.",
                        "!type": "string"
                    },
                    "timeout": {
                        "!doc": "Timeout in milliseconds when the connection should be aborted.",
                        "!type": "numder"
                    },
                    "onsendstream": {
                        "!doc": "Function to be called at regular intervals as the request data is being transmitted.",
                        "!type": "+Callback<Object>"
                    }
                }
            },
            "registerForPushNotifications": {
                "!doc": "Registers for push notifications with the Apple Push Notification Service.",
                "!type": "fn(config: +PushNotificationConfig)"
            },
            "getHTTPCookiesForDomain": {
                "!doc": "Gets all the cookies with the domain matched with the given values from the HTTP client cookie store.\n",
                "!type": "fn(domain: string) -> +Array<Titanium.Network.Cookie>"
            },
            "unregisterForPushNotifications": {
                "!doc": "Unregisters the application for push notifications.",
                "!type": "fn()"
            },
            "TLS_VERSION_1_0": {
                "!doc": "Constant value specifying TLS version 1.0 for SSL.",
                "!type": "numder"
            },
            "INADDR_ANY": {
                "!doc": "Special hostname value for listening sockets, representing all\nlocally available network interfaces.\n",
                "!type": "string"
            },
            "TLS_VERSION_1_2": {
                "!doc": "Constant value specifying TLS version 1.2 for SSL.",
                "!type": "numder"
            },
            "TLS_VERSION_1_1": {
                "!doc": "Constant value specifying TLS version 1.1 for SSL.",
                "!type": "numder"
            },
            "getSystemCookies": {
                "!doc": "Gets all the cookies with the domain, path and name matched with the given values from the system cookie store.\n",
                "!type": "fn(domain: string, path: string, name: string) -> +Array<Titanium.Network.Cookie>"
            },
            "addConnectivityListener": {
                "!doc": "Legacy method to add a connectivity listener to listen for network changes.\n",
                "!type": "fn(callback: +Callback<Object>)"
            },
            "SOCKET_ERROR": {
                "!doc": "Constant value representing a socket in the ERROR state.",
                "!type": "numder"
            },
            "httpURLFormatter": {
                "!doc": "User-defined function that is called everytime HTTPClient connects to a remote resource.",
                "!type": "+Callback<String>"
            },
            "NETWORK_WIFI": {
                "!doc": "A [networkType](Titanium.Network.networkType) value indicating that the  \ndevice is communicating over a WiFi network.\n",
                "!type": "numder"
            },
            "getHTTPCookies": {
                "!doc": "Gets all the cookies with the domain, path and name matched with the given values from the HTTP client cookie store.\n",
                "!type": "fn(domain: string, path: string, name: string) -> +Array<Titanium.Network.Cookie>"
            },
            "WRITE_MODE": {
                "!doc": "Constant value specifying write-only mode for sockets.",
                "!type": "numder"
            },
            "READ_WRITE_MODE": {
                "!doc": "Constant value specifying read-write mode for sockets.",
                "!type": "numder"
            },
            "encodeURIComponent": {
                "!doc": "Returns a URI encoded version of the specified URI component.",
                "!type": "fn(value: string) -> string"
            }
        },
        "Map": {
            "HYBRID_TYPE": {
                "!doc": "Used with [mapType](Titanium.Map.View.mapType) to display a satellite image of the area with road and road name information layered on top.",
                "!type": "numder"
            },
            "ANNOTATION_GREEN": {
                "!doc": "Color constant used to set a map annotation to green via the \n<Titanium.Map.Annotation.pincolor> property.\n",
                "!type": "numder"
            },
            "STANDARD_TYPE": {
                "!doc": "Used with [mapType](Titanium.Map.View.mapType) to display a street map that shows the position of all roads and some road names.",
                "!type": "numder"
            },
            "ANNOTATION_DRAG_STATE_START": {
                "!doc": "Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event \nto indicate that the user started dragging the annotation.\n",
                "!type": "numder"
            },
            "!doc": "The top level Map module.  The Map module is used for creating in-application native maps.",
            "SATELLITE_TYPE": {
                "!doc": "Used with [mapType](Titanium.Map.View.mapType) to display satellite imagery of the area.",
                "!type": "numder"
            },
            "ANNOTATION_DRAG_STATE_END": {
                "!doc": "Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event \nto indicate that the user finished moving the annotation.\n",
                "!type": "numder"
            },
            "TERRAIN_TYPE": {
                "!doc": "Used with [mapType](Titanium.Map.View.mapType) to display the terrain that shows the position of all roads and some road names.",
                "!type": "numder"
            },
            "ANNOTATION_DRAG_STATE_CANCEL": {
                "!doc": "Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event \nto indicate that the user canceled the drag action.\n",
                "!type": "numder"
            },
            "ANNOTATION_DRAG_STATE_NONE": {
                "!doc": "Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event \nto indicate that the annotation is not being dragged.\n",
                "!type": "numder"
            },
            "ANNOTATION_DRAG_STATE_DRAG": {
                "!doc": "Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event \nto indicate that the user moved the annotation.\n",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Map",
            "ANNOTATION_RED": {
                "!doc": "Color constant used to set a map annotation to red via the \n<Titanium.Map.Annotation.pincolor> property.\n",
                "!type": "numder"
            },
            "View": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Map.View",
                "!doc": "Map view is used for embedding native mapping capabilities as a view in your application.",
                "prototype": {
                    "setLocation": {
                        "!doc": "Sets the map location and zoom level.",
                        "!type": "fn(location: +MapLocationType)"
                    },
                    "addRoute": {
                        "!doc": "Adds a route to the map.",
                        "!type": "fn(route: +MapRouteType)"
                    },
                    "animate": {
                        "!doc": "Indicates if changes to the mapping region should be animated.",
                        "!type": "bool"
                    },
                    "latitudeDelta": {
                        "!doc": "The amount of north-to-south distance displayed on the map, measured in decimal degrees.",
                        "!type": "numder"
                    },
                    "removeRoute": {
                        "!doc": "Remove a previously added route.",
                        "!type": "fn(route: +MapRouteType)"
                    },
                    "removeAnnotations": {
                        "!doc": "Removes one or more existing annotations from the map.",
                        "!type": "fn(annotations: [string])"
                    },
                    "regionFit": {
                        "!doc": "Boolean indicating if the map region should be modified \nto fit the map view's aspect ratio.\n",
                        "!type": "bool"
                    },
                    "removeAnnotation": {
                        "!doc": "Removes an existing annotation from the map.",
                        "!type": "fn(annotation: string)"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "mapType": {
                        "!doc": "Map type, either: <Titanium.Map.STANDARD_TYPE>, <Titanium.Map.SATELLITE_TYPE> or <Titanium.Map.HYBRID_TYPE>.\n",
                        "!type": "numder"
                    },
                    "removeAllAnnotations": {
                        "!doc": "Removes all annotations from the map.",
                        "!type": "fn()"
                    },
                    "addAnnotations": {
                        "!doc": "Adds one or more new annotations to the map.",
                        "!type": "fn(annotations: +Array<Titanium.Map.Annotation>)"
                    },
                    "longitudeDelta": {
                        "!doc": "The amount of east-to-west distance displayed on the map, measured in decimal degrees.",
                        "!type": "numder"
                    },
                    "setMapType": {
                        "!doc": "Sets the type of map (satellite, hybrid, or standard).",
                        "!type": "fn(mapType: numder)"
                    },
                    "addAnnotation": {
                        "!doc": "Adds a new annotation to the map.",
                        "!type": "fn(annotation: +Dictionary<Titanium.Map.Annotation>)"
                    },
                    "deselectAnnotation": {
                        "!doc": "Deselects the specified annotation, so the main annotation is hidden and only\na pin image is shown.\n",
                        "!type": "fn(annotation: string)"
                    },
                    "region": {
                        "!doc": "A dictionary specifying the location and zoom level of the map.\n\nOn the iOS platform, this property can only be set after the map view is loaded.\nTo ensure this property is set when the application starts, wait for the\n[complete][Titanium.UI.Map-event-complete] event.\n",
                        "!type": "+MapRegionType"
                    },
                    "hideAnnotationWhenTouchMap": {
                        "!doc": "Hide the annotation when clicking in the map view outside of the annotation.",
                        "!type": "bool"
                    },
                    "zoom": {
                        "!doc": "Zooms in or out of the map.",
                        "!type": "fn(level: numder)"
                    },
                    "annotations": {
                        "!doc": "An array of annotations to add to the map.",
                        "!type": "+Array<Titanium.Map.Annotation>"
                    },
                    "userLocation": {
                        "!doc": "Boolean indicating if the user's current device location should be shown on the\nmap.\n",
                        "!type": "bool"
                    },
                    "animated": {
                        "!doc": "Indicates if changes to the mapping region should be animated.",
                        "!type": "bool"
                    },
                    "selectAnnotation": {
                        "!doc": "Selects the annoation, showing the full annotation.",
                        "!type": "fn(annotation: string)"
                    }
                }
            },
            "Annotation": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Map.Annotation",
                "!doc": "Represents a labeled point of interest on the map that the user can click on.",
                "prototype": {
                    "rightView": {
                        "!doc": "Right view that is displayed on the annotation.",
                        "!type": "+Titanium.UI.View"
                    },
                    "draggable": {
                        "!doc": "Determines whether the pin can be dragged by the user.",
                        "!type": "bool"
                    },
                    "pincolor": {
                        "!doc": "Pin color. Specify one of: <Titanium.Map.ANNOTATION_GREEN>, <Titanium.Map.ANNOTATION_PURPLE> \nor <Titanium.Map.ANNOTATION_RED>.\n",
                        "!type": "numder"
                    },
                    "subtitle": {
                        "!doc": "Secondary title of the annotation view.",
                        "!type": "string"
                    },
                    "rightButton": {
                        "!doc": "Right button image on the annotation, specified as an image URL or an iOS\nbutton constant.\n",
                        "!type": "numder"
                    },
                    "title": {
                        "!doc": "Primary title of the annotation view.",
                        "!type": "string"
                    },
                    "subtitleid": {
                        "!doc": "Key in the locale file to use for the subtitle property.",
                        "!type": "string"
                    },
                    "image": {
                        "!doc": "Image to use for the the pin.",
                        "!type": "string"
                    },
                    "leftView": {
                        "!doc": "Left view that is displayed on the annotation.",
                        "!type": "+Titanium.UI.View"
                    },
                    "leftButton": {
                        "!doc": "Left button image on the annotation, specified as an image URL or an iOS\nbutton constant.\n",
                        "!type": "numder"
                    },
                    "centerOffset": {
                        "!doc": "Defines a center offset point for the annotation.",
                        "!type": "+Point"
                    },
                    "customView": {
                        "!doc": "Defines a custom view to be used by the annotation.",
                        "!type": "+Titanium.UI.View"
                    },
                    "titleid": {
                        "!doc": "Key in the locale file to use for the title property.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "pinImage": {
                        "!doc": "Image for the pin instead of the default image.",
                        "!type": "string"
                    },
                    "longitude": {
                        "!doc": "Longitude of the annotation, in decimal degrees.",
                        "!type": "numder"
                    },
                    "latitude": {
                        "!doc": "Latitude of the annotation, in decimal degrees.",
                        "!type": "numder"
                    },
                    "animate": {
                        "!doc": "Boolean to indicate whether the pin should animate when dropped.",
                        "!type": "bool"
                    },
                    "canShowCallout": {
                        "!doc": "Defines whether the annotation view is able to display extra information in a callout bubble.",
                        "!type": "bool"
                    }
                }
            },
            "ANNOTATION_PURPLE": {
                "!doc": "Color constant used to set a map annotation to purple via the \n<Titanium.Map.Annotation.pincolor> property.\n",
                "!type": "numder"
            }
        },
        "IOStream": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.IOStream",
            "!doc": "IOStream is the interface that all stream types implement.",
            "prototype": {
                "read": {
                    "!doc": "Reads data from this stream into a buffer.",
                    "!type": "fn(buffer: +Titanium.Buffer, offset: numder, length: numder) -> numder"
                },
                "isWriteable": {
                    "!doc": "Indicates whether this stream is writeable.",
                    "!type": "fn() -> bool"
                },
                "write": {
                    "!doc": "Writes data from a buffer to this stream.",
                    "!type": "fn(buffer: +Titanium.Buffer, offset: numder, length: numder) -> numder"
                },
                "!proto": "Titanium.Proxy.prototype",
                "isReadable": {
                    "!doc": "Indicates whether this stream is readable.",
                    "!type": "fn() -> bool"
                },
                "close": {
                    "!doc": "Closes this stream.",
                    "!type": "fn()"
                }
            }
        },
        "Buffer": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Buffer",
            "!doc": "Buffer is a mutable, resizable container for raw data.",
            "prototype": {
                "insert": {
                    "!doc": "Inserts data from `sourceBuffer` into this buffer at `offset`.",
                    "!type": "fn(sourceBuffer: +Titanium.Buffer, offset: numder, sourceOffset: numder, sourceLength: numder) -> numder"
                },
                "fill": {
                    "!doc": "Fills this buffer with the specified byte value.",
                    "!type": "fn(fillByte: numder, offset: numder, length: numder)"
                },
                "clone": {
                    "!doc": "Creates a complete or partial copy of this buffer.",
                    "!type": "fn(offset: numder, length: numder) -> +Titanium.Buffer"
                },
                "toBlob": {
                    "!doc": "Converts this buffer to a <Titanium.Blob>.",
                    "!type": "fn() -> +Titanium.Blob"
                },
                "value": {
                    "!doc": "Data to be encoded.",
                    "!type": "numder"
                },
                "length": {
                    "!doc": "Length of the buffer in bytes.",
                    "!type": "numder"
                },
                "!proto": "Titanium.Proxy.prototype",
                "toString": {
                    "!doc": "Converts this buffer to a String.",
                    "!type": "fn() -> string"
                },
                "release": {
                    "!doc": "Releases the space allocated to the buffer, and sets its length to 0.",
                    "!type": "fn()"
                },
                "copy": {
                    "!doc": "Copies data from `sourceBuffer` into the current buffer at `offset`.",
                    "!type": "fn(sourceBuffer: +Titanium.Buffer, offset: numder, sourceOffset: numder, sourceLength: numder) -> numder"
                },
                "type": {
                    "!doc": "The type of data encoding to use with `value`.",
                    "!type": "string"
                },
                "clear": {
                    "!doc": "Clears this buffer's contents but does not change the size of the buffer.",
                    "!type": "fn()"
                },
                "append": {
                    "!doc": "Appends `sourceBuffer` to the this buffer.",
                    "!type": "fn(sourceBuffer: +Titanium.Buffer, sourceOffset: numder, sourceLength: numder) -> numder"
                },
                "byteOrder": {
                    "!doc": "Byte order of this buffer.",
                    "!type": "numder"
                }
            }
        },
        "Yahoo": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Yahoo",
            "!doc": "The top level Yahoo module.  The Yahoo module is used for accessing Yahoo related API services.",
            "yql": {
                "!doc": "invoke a Yahoo YQL query",
                "!type": "fn(yql: string, callback: +Callback<YQLResponse>)"
            }
        },
        "version": {
            "!doc": "Version of Titanium that is executing.",
            "!type": "string"
        },
        "Facebook": {
            "authorize": {
                "!doc": "Prompts the user to log in (if not already logged in) and authorize your application.  \n",
                "!type": "fn()"
            },
            "BUTTON_STYLE_NORMAL": {
                "!doc": "Use with [LoginButton.style](Titanium.Facebook.LoginButton.style) to specify\nthe default login button reading \"Connect\" or \"Login\".\n",
                "!type": "numder"
            },
            "requestWithGraphPath": {
                "!doc": "Makes a Facebook Graph API request.",
                "!type": "fn(path: string, params: +Dictionary, httpMethod: string, callback: +Callback<FacebookGraphResponsev1>)"
            },
            "uid": {
                "!doc": "Unique user ID returned from Facebook.",
                "!type": "string"
            },
            "accessToken": {
                "!doc": "OAuth token set after a successful `authorize`.",
                "!type": "string"
            },
            "!doc": "The top level Facebook module.  \n",
            "request": {
                "!doc": "Makes a request to the legacy Facebook REST API.",
                "!type": "fn(method: string, params: +Object, callback: +Callback<FacebookRESTResponsev1>)"
            },
            "LoginButton": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Facebook.LoginButton",
                "!doc": "A Facebook login button.",
                "prototype": {
                    "style": {
                        "!doc": "Sets the login button style.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype"
                }
            },
            "loggedIn": {
                "!doc": "Indicates if the user is logged in.",
                "!type": "bool"
            },
            "logout": {
                "!doc": "Clears the OAuth `accessToken` and logs out the user.",
                "!type": "fn()"
            },
            "expirationDate": {
                "!doc": "Time at which the `accessToken` expires.",
                "!type": "+Date"
            },
            "dialog": {
                "!doc": "Opens a supported Facebook dialog.",
                "!type": "fn(action: string, params: +Object, callback: +Callback<FacebookDialogResponsev1>)"
            },
            "appid": {
                "!doc": "Your Facebook application id. You need to set this for anything to work.",
                "!type": "string"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Facebook",
            "BUTTON_STYLE_WIDE": {
                "!doc": "Use with [LoginButton.style](Titanium.Facebook.LoginButton.style) to specify\na wide login button reading \"Connect with Facebook\" or \"Login with Facebook\".\n",
                "!type": "numder"
            },
            "forceDialogAuth": {
                "!doc": "Indicates whether the login should use the traditional dialog-based\nauthentication.\n",
                "!type": "bool"
            },
            "permissions": {
                "!doc": "Array of permissions to request for your app.",
                "!type": "[string]"
            }
        },
        "Proxy": {
            "lifecycleContainer": {
                "!doc": "The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.",
                "!type": "+Titanium.UI.Window"
            },
            "bubbleParent": {
                "!doc": "Indicates if the proxy will bubble an event to its parent.",
                "!type": "bool"
            },
            "!doc": "The base for all Titanium objects.",
            "removeEventListener": {
                "!doc": "Removes the specified callback as an event listener for the named event.",
                "!type": "fn(name: string, callback: +Callback<Object>)"
            },
            "apiName": {
                "!doc": "The name of the API that this proxy corresponds to.",
                "!type": "string"
            },
            "addEventListener": {
                "!doc": "Adds the specified callback as an event listener for the named event.",
                "!type": "fn(name: string, callback: +Callback<Object>)"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Proxy",
            "applyProperties": {
                "!doc": "Applies the properties to the proxy.",
                "!type": "fn(props: +Dictionary)"
            },
            "fireEvent": {
                "!doc": "Fires a synthesized event to any registered listeners.",
                "!type": "fn(name: string, event: +Dictionary)"
            }
        },
        "Media": {
            "MUSIC_PLAYER_STATE_INTERRUPTED": {
                "!doc": "Constant for interrupted state.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_SHUFFLE_ALBUMS": {
                "!doc": "Constant for shuffling complete albums setting.",
                "!type": "numder"
            },
            "AUDIO_SESSION_MODE_RECORD": {
                "!doc": "Session mode for recording audio; it silences playback audio.",
                "!type": "numder"
            },
            "VIDEO_MEDIA_TYPE_NONE": {
                "!doc": "An unknown type of media in the movie returned by <Titanium.Media.VideoPlayer> `mediaTypes` property.",
                "!type": "numder"
            },
            "!doc": "The top-level Media module.",
            "VIDEO_PLAYBACK_STATE_INTERRUPTED": {
                "!doc": "Video playback has been interrupted.",
                "!type": "numder"
            },
            "VIDEO_PLAYBACK_STATE_SEEKING_FORWARD": {
                "!doc": "Video playback is seeking forward.",
                "!type": "numder"
            },
            "VIDEO_LOAD_STATE_PLAYTHROUGH_OK": {
                "!doc": "Playback will be automatically started in this state when `autoplay` is true.",
                "!type": "numder"
            },
            "AUDIO_SESSION_CATEGORY_PLAYBACK": {
                "!doc": "Session mode for playing recorded music or other sounds that are central to the successful use of your application.",
                "!type": "string"
            },
            "VIDEO_LOAD_STATE_STALLED": {
                "!doc": "Playback will be automatically paused in this state, if started.",
                "!type": "numder"
            },
            "setOverrideAudioRoute": {
                "!doc": "Overrides the default audio route when using the <Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD> session mode.",
                "!type": "fn(route: numder)"
            },
            "AUDIO_FILEFORMAT_3GP2": {
                "!doc": "Audio file format 3GPP2.",
                "!type": "numder"
            },
            "VIDEO_MEDIA_TYPE_VIDEO": {
                "!doc": "A video type of media in the movie returned by <Titanium.Media.VideoPlayer> `mediaTypes` property.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_STATE_PLAYING": {
                "!doc": "Constant for playing state.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_GROUP_ARTIST": {
                "!doc": "Constant for grouping query results by artist.",
                "!type": "numder"
            },
            "CAMERA_FRONT": {
                "!doc": "Constant specifying the front camera.",
                "!type": "numder"
            },
            "requestAuthorization": {
                "!doc": "Request the user's permission for audio recording.",
                "!type": "fn(callback: +Callback<MediaAuthorizationResponse>)"
            },
            "audioPlaying": {
                "!doc": "Returns `true` if the device is playing audio.",
                "!type": "bool"
            },
            "Android": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.Android",
                "!doc": "Android-specific media-related functionality.",
                "scanMediaFiles": {
                    "!doc": "Scans newly created or downloaded media files to make them available to other\nAndroid media providers, such as the Gallery.\n",
                    "!type": "fn(paths: [string], mimeTypes: [string], callback: +Callback<MediaScannerResponse>)"
                },
                "setSystemWallpaper": {
                    "!doc": "Set the system homescreen wallpaper.",
                    "!type": "fn(image: +Titanium.Blob, scale: bool)"
                }
            },
            "AUDIO_FORMAT_ULAW": {
                "!doc": "Audio format 8-bit muLaw encoding.",
                "!type": "numder"
            },
            "QUALITY_MEDIUM": {
                "!doc": "Media type constant for medium-quality video recording.",
                "!type": "numder"
            },
            "Sound": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.Sound",
                "!doc": "An object for playing basic audio resources.",
                "prototype": {
                    "STATE_INITIALIZED": {
                        "!doc": "Audio playback is being initialized.",
                        "!type": "numder"
                    },
                    "paused": {
                        "!doc": "Indicates if the audio is paused.",
                        "!type": "bool"
                    },
                    "looping": {
                        "!doc": "Determines whether the audio should loop upon completion.",
                        "!type": "bool"
                    },
                    "duration": {
                        "!doc": "Duration of the audio resource.",
                        "!type": "numder"
                    },
                    "STATE_WAITING_FOR_QUEUE": {
                        "!doc": "Player is waiting for audio data to fill the queue.",
                        "!type": "numder"
                    },
                    "STATE_WAITING_FOR_DATA": {
                        "!doc": "Player is waiting for audio data from the network.",
                        "!type": "numder"
                    },
                    "pause": {
                        "!doc": "Pauses the audio.",
                        "!type": "fn()"
                    },
                    "STATE_PLAYING": {
                        "!doc": "Audio playback is active.",
                        "!type": "numder"
                    },
                    "STATE_BUFFERING": {
                        "!doc": "Audio data is being buffered from the network.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "STATE_PAUSED": {
                        "!doc": "Playback is paused.",
                        "!type": "numder"
                    },
                    "play": {
                        "!doc": "Starting playing the sound, or resume playing a paused sound.",
                        "!type": "fn()"
                    },
                    "STATE_STOPPING": {
                        "!doc": "Audio playback is stopping.",
                        "!type": "numder"
                    },
                    "stop": {
                        "!doc": "Stops playing the audio and resets the playback position to the beginning of the clip.",
                        "!type": "fn()"
                    },
                    "volume": {
                        "!doc": "Volume of the audio from 0.0 (muted) to 1.0 (loudest).",
                        "!type": "numder"
                    },
                    "isLooping": {
                        "!doc": "Returns the value of the [looping](Titanium.Media.Sound.looping) property.",
                        "!type": "fn() -> bool"
                    },
                    "isPlaying": {
                        "!doc": "Returns the value of the [playing](Titanium.Media.Sound.playing) property.",
                        "!type": "fn() -> bool"
                    },
                    "STATE_STOPPED": {
                        "!doc": "Audio playback is stopped.",
                        "!type": "numder"
                    },
                    "reset": {
                        "!doc": "Resets the audio playback position to the beginning.",
                        "!type": "fn()"
                    },
                    "STATE_STARTING": {
                        "!doc": "Audio playback is starting.",
                        "!type": "numder"
                    },
                    "setLooping": {
                        "!doc": "Sets the value of the [looping](Titanium.Media.Sound.looping) property.",
                        "!type": "fn(looping: bool)"
                    },
                    "url": {
                        "!doc": "URL identifying the audio resource.",
                        "!type": "string"
                    },
                    "isPaused": {
                        "!doc": "Returns the value of the [paused](Titanium.Media.Sound.paused) property.",
                        "!type": "fn() -> bool"
                    },
                    "time": {
                        "!doc": "Current playback position of the audio.",
                        "!type": "numder"
                    },
                    "release": {
                        "!doc": "Releases all internal resources.",
                        "!type": "fn()"
                    },
                    "allowBackground": {
                        "!doc": "Determines whether the audio should continue playing even when its activity is paused.",
                        "!type": "bool"
                    },
                    "playing": {
                        "!doc": "Indicates if the audio is playing.",
                        "!type": "bool"
                    },
                    "setPaused": {
                        "!doc": "Sets the value of the [paused](Titanium.Media.Sound.paused) property.",
                        "!type": "fn(paused: bool)"
                    }
                }
            },
            "availablePhotoMediaTypes": {
                "!doc": "Array of media type constants supported for the photo library.",
                "!type": "[+Object]"
            },
            "switchCamera": {
                "!doc": "Switches between front and rear-facing cameras.",
                "!type": "fn(camera: numder)"
            },
            "VIDEO_FINISH_REASON_PLAYBACK_ERROR": {
                "!doc": "Video playback ended abnormally.",
                "!type": "numder"
            },
            "UNKNOWN_ERROR": {
                "!doc": "Constant for unknown media error.",
                "!type": "numder"
            },
            "AUDIO_MUTED": {
                "!doc": "Line-type constant indicated mute switch is on.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_GROUP_ALBUM": {
                "!doc": "Constant for grouping query results by album.",
                "!type": "numder"
            },
            "MEDIA_TYPE_PHOTO": {
                "!doc": "Media type constant for photo media.",
                "!type": "string"
            },
            "AUDIO_FILEFORMAT_CAF": {
                "!doc": "Audio file format Apple Compressed Audio Format (CAF).",
                "!type": "numder"
            },
            "previewImage": {
                "!doc": "Displays the given image.",
                "!type": "fn(options: +Dictionary<PreviewImageOptions>)"
            },
            "VIDEO_CONTROL_DEFAULT": {
                "!doc": "Constant for default video controls.",
                "!type": "numder"
            },
            "VIDEO_SOURCE_TYPE_UNKNOWN": {
                "!doc": "Video source type is unknown.",
                "!type": "numder"
            },
            "VIDEO_CONTROL_NONE": {
                "!doc": "Constant for no video controls.",
                "!type": "numder"
            },
            "AUDIO_FILEFORMAT_AMR": {
                "!doc": "Audio file format Adaptive Multi-Rate (AMR).",
                "!type": "numder"
            },
            "AUDIO_FORMAT_ILBC": {
                "!doc": "Audio format iLBC encoding.",
                "!type": "numder"
            },
            "AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD": {
                "!doc": "Session mode for recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application.",
                "!type": "string"
            },
            "CAMERA_FLASH_AUTO": {
                "!doc": "Constant specifying to have the device determine to use the flash or not.",
                "!type": "numder"
            },
            "AUDIO_SESSION_MODE_PLAYBACK": {
                "!doc": "Session mode for playing recorded music or other sounds that are central to the successful use of your application.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_TYPE_ANY_AUDIO": {
                "!doc": "Music library media containing any type of audio content.",
                "!type": "numder"
            },
            "AUDIO_FILEFORMAT_3GPP": {
                "!doc": "Audio file format 3GPP.",
                "!type": "numder"
            },
            "VIDEO_CONTROL_EMBEDDED": {
                "!doc": "Constant for video controls for an embedded view.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_REPEAT_NONE": {
                "!doc": "Constant for \"No Repeat\" setting.",
                "!type": "numder"
            },
            "VIDEO_FINISH_REASON_USER_EXITED": {
                "!doc": "Video playback ended by user action (such as clicking the `Done` button).",
                "!type": "numder"
            },
            "VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD": {
                "!doc": "Video playback is rewinding.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_GROUP_TITLE": {
                "!doc": "Constant for grouping query results by title.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_HEADPHONES": {
                "!doc": "Constant for headphone or headset output. This is an output port.",
                "!type": "string"
            },
            "startVideoCapture": {
                "!doc": "Starts video capture using the camera specified.",
                "!type": "fn()"
            },
            "MUSIC_PLAYER_SHUFFLE_DEFAULT": {
                "!doc": "Constant for user's default shuffle setting.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_CARAUDIO": {
                "!doc": "Constant for Input or output via Car Audio. This can be both an input and output port. This is available on iOS7 and later.",
                "!type": "string"
            },
            "availablePhotoGalleryMediaTypes": {
                "!doc": "Array of media type constants supported for saving to the device's camera roll or saved images album.",
                "!type": "[+Object]"
            },
            "MUSIC_PLAYER_REPEAT_ALL": {
                "!doc": "Constant for \"Repeat All\" setting.",
                "!type": "numder"
            },
            "AUDIO_SESSION_CATEGORY_SOLO_AMBIENT": {
                "!doc": "Session mode for long-duration sounds such as rain, car engine noise, and so on.",
                "!type": "string"
            },
            "AUDIO_SESSION_PORT_BLUETOOTHA2DP": {
                "!doc": "Constant for output on a Bluetooth A2DP device. This is an output port.",
                "!type": "string"
            },
            "VIDEO_REPEAT_MODE_NONE": {
                "!doc": "Constant for disabling repeat on video playback.",
                "!type": "numder"
            },
            "AUDIO_FILEFORMAT_WAVE": {
                "!doc": "Audio file format WAVE.",
                "!type": "numder"
            },
            "VIDEO_FINISH_REASON_PLAYBACK_ENDED": {
                "!doc": "Video playback ended normally.",
                "!type": "numder"
            },
            "appMusicPlayer": {
                "!doc": "An instance of <Titanium.Media.MusicPlayer> representing the app-specific music player.",
                "!type": "+Titanium.Media.MusicPlayer"
            },
            "openMusicLibrary": {
                "!doc": "Shows the music library and allows the user to select one or more tracks.",
                "!type": "fn(options: +MusicLibraryOptionsType)"
            },
            "AUDIO_RECEIVER_AND_MIC": {
                "!doc": "Line-type constant indicating receiver and microphone.",
                "!type": "numder"
            },
            "availableCameras": {
                "!doc": "Array indicating which cameras are available, `CAMERA_FRONT`, `CAMERA_REAR` or both.",
                "!type": "[numder]"
            },
            "AudioRecorder": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.AudioRecorder",
                "!doc": "An audio recorder object used for recording audio from the device microphone.",
                "prototype": {
                    "recording": {
                        "!doc": "Indicates if the audio recorder is recording.",
                        "!type": "bool"
                    },
                    "pause": {
                        "!doc": "Pauses the current audio recording.",
                        "!type": "fn()"
                    },
                    "compression": {
                        "!doc": "Audio compression to be used for the recording.",
                        "!type": "numder"
                    },
                    "format": {
                        "!doc": "Audio format to be used for the recording.",
                        "!type": "numder"
                    },
                    "resume": {
                        "!doc": "Resumes a paused recording.",
                        "!type": "fn()"
                    },
                    "stop": {
                        "!doc": "Stops the current audio recording and returns the recorded audio file.",
                        "!type": "fn() -> +Titanium.Filesystem.File"
                    },
                    "paused": {
                        "!doc": "Indicates if the audio recorder is paused.",
                        "!type": "bool"
                    },
                    "start": {
                        "!doc": "Starts an audio recording.",
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "stopped": {
                        "!doc": "Indicates if the audio recorder is stopped.",
                        "!type": "bool"
                    }
                }
            },
            "VIDEO_PLAYBACK_STATE_STOPPED": {
                "!doc": "Video playback is stopped.",
                "!type": "numder"
            },
            "AUDIO_FORMAT_AAC": {
                "!doc": "Audio format MPEG4 AAC encoding.",
                "!type": "numder"
            },
            "stopMicrophoneMonitor": {
                "!doc": "Stops monitoring the microphone sound level.",
                "!type": "fn()"
            },
            "VIDEO_CONTROL_HIDDEN": {
                "!doc": "Constant for video controls hidden.",
                "!type": "numder"
            },
            "NO_CAMERA": {
                "!doc": "Constant for media no camera error.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_BLUETOOTHHFP": {
                "!doc": "Constant for input or output on a Bluetooth Hands-Free Profile device. This can be both an input and output port.",
                "!type": "string"
            },
            "startMicrophoneMonitor": {
                "!doc": "Starts monitoring the microphone sound level.",
                "!type": "fn()"
            },
            "AUDIO_FORMAT_ALAW": {
                "!doc": "Audio format 8-bit aLaw encoding.",
                "!type": "numder"
            },
            "audioSessionCategory": {
                "!doc": "A constant for the audio session category to be used.",
                "!type": "numder"
            },
            "AUDIO_FILEFORMAT_MP4A": {
                "!doc": "Audio file format MP4A.",
                "!type": "numder"
            },
            "audioLineType": {
                "!doc": "Returns the line type constant for the current line type.",
                "!type": "numder"
            },
            "systemMusicPlayer": {
                "!doc": "An instance of <Titanium.Media.MusicPlayer> representing the system-wide music player.",
                "!type": "+Titanium.Media.MusicPlayer"
            },
            "MUSIC_MEDIA_GROUP_GENRE": {
                "!doc": "Constant for grouping query results by genre.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_GROUP_COMPOSER": {
                "!doc": "Constant for grouping query results by composer.",
                "!type": "numder"
            },
            "NO_VIDEO": {
                "!doc": "Constant for media no video error.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_STATE_PAUSED": {
                "!doc": "Constant for paused state.",
                "!type": "numder"
            },
            "audioSessionMode": {
                "!doc": "A constant for the audio session mode to be used.",
                "!type": "numder"
            },
            "AUDIO_SESSION_CATEGORY_RECORD": {
                "!doc": "Session mode for recording audio; it silences playback audio.",
                "!type": "string"
            },
            "AUDIO_UNKNOWN": {
                "!doc": "Line-type constant indicating that line-type is unknown or not determined.",
                "!type": "numder"
            },
            "VIDEO_SCALING_MODE_FILL": {
                "!doc": "Video is scaled until both dimensions fit the screen exactly, stretching if necessary.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_TYPE_PODCAST": {
                "!doc": "Music library media containing podcast content.",
                "!type": "numder"
            },
            "QUALITY_HIGH": {
                "!doc": "Media type constant for high-quality video recording.",
                "!type": "numder"
            },
            "AUDIO_SESSION_MODE_AMBIENT": {
                "!doc": "For long-duration sounds such as rain, car engine noise, and so on.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_STATE_STOPPED": {
                "!doc": "Constant for stopped state.",
                "!type": "numder"
            },
            "VIDEO_PLAYBACK_STATE_PLAYING": {
                "!doc": "Video is being played.",
                "!type": "numder"
            },
            "canRecord": {
                "!doc": "`true` if the device has a recording input device available.\n",
                "!type": "bool"
            },
            "VIDEO_SOURCE_TYPE_STREAMING": {
                "!doc": "Video source type is a remote stream.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_BUILTINMIC": {
                "!doc": "Constant for built-in microphone on an iOS device. This is an input port.",
                "!type": "string"
            },
            "AUDIO_FORMAT_APPLE_LOSSLESS": {
                "!doc": "Audio format Apple lossless encoding.",
                "!type": "numder"
            },
            "CAMERA_REAR": {
                "!doc": "Constant indicating the rear camera.",
                "!type": "numder"
            },
            "AUDIO_MICROPHONE": {
                "!doc": "Line-type constant for microphone.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_STATE_SEEK_BACKWARD": {
                "!doc": "Constant for backward seek state.",
                "!type": "numder"
            },
            "AUDIO_SESSION_CATEGORY_AMBIENT": {
                "!doc": "For long-duration sounds such as rain, car engine noise, and so on.",
                "!type": "string"
            },
            "VIDEO_CONTROL_VOLUME_ONLY": {
                "!doc": "Constant for video controls volume only.",
                "!type": "numder"
            },
            "hideMusicLibrary": {
                "!doc": "Hides the music library.",
                "!type": "fn()"
            },
            "saveToPhotoGallery": {
                "!doc": "Saves media to the device's photo gallery / camera roll.",
                "!type": "fn(media: +Titanium.Blob, callbacks: +Object)"
            },
            "AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER": {
                "!doc": "Constant that specifies audio should output to the speaker. See <Titanium.Media.setOverrideAudioRoute> for more information.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_USBAUDIO": {
                "!doc": "Constant for input or output on a Universal Serial Bus device. This can be both an input and output port.",
                "!type": "string"
            },
            "AUDIO_SESSION_MODE_PLAY_AND_RECORD": {
                "!doc": "Session mode for recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_LINEOUT": {
                "!doc": "Constant for line level output on a dock connector. This is an output port.",
                "!type": "string"
            },
            "takePicture": {
                "!doc": "Uses the device camera to capture a photo.",
                "!type": "fn()"
            },
            "vibrate": {
                "!doc": "Makes the device vibrate.",
                "!type": "fn(pattern: [numder])"
            },
            "beep": {
                "!doc": "Plays a device beep notification.",
                "!type": "fn()"
            },
            "CAMERA_FLASH_ON": {
                "!doc": "Constant specifying to always fire the flash.",
                "!type": "numder"
            },
            "VIDEO_LOAD_STATE_PLAYABLE": {
                "!doc": "Current media is playable.",
                "!type": "numder"
            },
            "cameraFlashMode": {
                "!doc": "Determines how the flash is fired when using the device's camera.",
                "!type": "numder"
            },
            "AUDIO_SPEAKER": {
                "!doc": "Line-type constant for speaker output.",
                "!type": "numder"
            },
            "VIDEO_SCALING_ASPECT_FILL": {
                "!doc": "Scale video to fill the screen, clipping edges if necessary.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_GROUP_PODCAST_TITLE": {
                "!doc": "Constant for grouping query results by podcast title.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_BUILTINRECEIVER": {
                "!doc": "Constant for the speaker you hold to your ear when on a phone call. This is an output port.",
                "!type": "string"
            },
            "AUDIO_SESSION_PORT_BLUETOOTHLE": {
                "!doc": "Constant for output on a Bluetooth Low Energy device. This is an output port. This is available on iOS7 and later.",
                "!type": "string"
            },
            "AUDIO_SESSION_PORT_LINEIN": {
                "!doc": "Constant for line level input on a dock connector. This is an input port.",
                "!type": "string"
            },
            "AUDIO_FILEFORMAT_MP3": {
                "!doc": "Audio file format MP3.",
                "!type": "numder"
            },
            "MusicPlayer": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.MusicPlayer",
                "!doc": "This object represents a music controller.",
                "prototype": {
                    "skipToBeginning": {
                        "!doc": "Skips to the beginning of the currently playing media item.",
                        "!type": "fn()"
                    },
                    "play": {
                        "!doc": "Begins playback of the current media item.",
                        "!type": "fn()"
                    },
                    "pause": {
                        "!doc": "Pauses playback of the current media item.",
                        "!type": "fn()"
                    },
                    "nowPlaying": {
                        "!doc": "An `Item` object representing the currently playing media item.",
                        "!type": "+Titanium.Media.Item"
                    },
                    "shuffleMode": {
                        "!doc": "Shuffle setting.\n",
                        "!type": "numder"
                    },
                    "skipToPrevious": {
                        "!doc": "Skips to the previous media item in the queue.",
                        "!type": "fn()"
                    },
                    "currentPlaybackTime": {
                        "!doc": "Current point in song playback, in seconds.",
                        "!type": "numder"
                    },
                    "skipToNext": {
                        "!doc": "Skips to the next media item in the queue.",
                        "!type": "fn()"
                    },
                    "volume": {
                        "!doc": "Volume level for the music player from 0.0 (muted) to 1.0 (loudest).",
                        "!type": "numder"
                    },
                    "repeatMode": {
                        "!doc": "Repeat setting.\n",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "stop": {
                        "!doc": "Stops playback of the current media queue.",
                        "!type": "fn()"
                    },
                    "stopSeeking": {
                        "!doc": "Ends a seek operation and returns to the previous playback state.\n\nSee also: [seekForward](Titanium.Media.MusicPlayer.seekForward) and\n[seekBackward](Titanium.Media.MusicPlayer.seekBackward).\n",
                        "!type": "fn()"
                    },
                    "seekBackward": {
                        "!doc": "Begins seeking backward in the currently playing media.",
                        "!type": "fn()"
                    },
                    "playbackState": {
                        "!doc": "Playback state.\n",
                        "!type": "numder"
                    },
                    "seekForward": {
                        "!doc": "Begins seeking forward in the currently playing media item.",
                        "!type": "fn()"
                    },
                    "setQueue": {
                        "!doc": "Sets the media queue.",
                        "!type": "fn(queue: +Titanium.Media.Item)"
                    }
                }
            },
            "AUDIO_FILEFORMAT_MP4": {
                "!doc": "Audio file format MP4.",
                "!type": "numder"
            },
            "volume": {
                "!doc": "Current volume of the playback device.",
                "!type": "numder"
            },
            "AUDIO_FILEFORMAT_AIFF": {
                "!doc": "Audio file format Audio Interchange File Format (AIFF).",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_BUILTINSPEAKER": {
                "!doc": "Constant for built-in speaker on an iOS device. This is an output port.",
                "!type": "string"
            },
            "AUDIO_FORMAT_IMA4": {
                "!doc": "Audio format Apple IMA4 encoding.",
                "!type": "numder"
            },
            "queryMusicLibrary": {
                "!doc": "Searches the music library for items matching the specified search predicates.",
                "!type": "fn(query: +MediaQueryType) -> +Array<Titanium.Media.Item>"
            },
            "averageMicrophonePower": {
                "!doc": "Current average microphone level in dB or -1 if microphone monitoring is disabled.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_TYPE_ALL": {
                "!doc": "Music library media containing any type of content.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_HEADSETMIC": {
                "!doc": "Constant for microphone on a wired headset. This is an input port.",
                "!type": "string"
            },
            "openPhotoGallery": {
                "!doc": "Opens the photo gallery image picker.",
                "!type": "fn(options: +PhotoGalleryOptionsType)"
            },
            "VIDEO_PLAYBACK_STATE_PAUSED": {
                "!doc": "Video playback is paused.",
                "!type": "numder"
            },
            "VIDEO_TIME_OPTION_PREVIOUS_SYNC": {
                "!doc": "Use the sync (or key) frame located right before or at given the time.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_REPEAT_ONE": {
                "!doc": "Constant for \"Repeat one item\" setting.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_AIRPLAY": {
                "!doc": "Constant for output on a remote Air Play device. This is an output port.",
                "!type": "string"
            },
            "CAMERA_FLASH_OFF": {
                "!doc": "Constant specifying to never fire the flash.",
                "!type": "numder"
            },
            "VIDEO_TIME_OPTION_CLOSEST_SYNC": {
                "!doc": "Use the closest sync (or key) frame at given the time.",
                "!type": "numder"
            },
            "AUDIO_SESSION_OVERRIDE_ROUTE_NONE": {
                "!doc": "Constant that specifies audio should output to the default audio route. See <Titanium.Media.setOverrideAudioRoute> for more information.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_SHUFFLE_SONGS": {
                "!doc": "Constant for shuffling songs setting.",
                "!type": "numder"
            },
            "AUDIO_FORMAT_LINEAR_PCM": {
                "!doc": "Audio format 16-bit, linear PCM encoding.",
                "!type": "numder"
            },
            "VIDEO_LOAD_STATE_UNKNOWN": {
                "!doc": "Current load state is not known.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_STATE_SEEK_FORWARD": {
                "!doc": "Constant for forward seek state.",
                "!type": "numder"
            },
            "QUALITY_LOW": {
                "!doc": "Media type constant for low-quality video recording.",
                "!type": "numder"
            },
            "showCamera": {
                "!doc": "Shows the camera.",
                "!type": "fn(options: +CameraOptionsType)"
            },
            "AUDIO_HEADPHONES_AND_MIC": {
                "!doc": "Line-type constant for headphones and microphone.",
                "!type": "numder"
            },
            "peakMicrophonePower": {
                "!doc": "Current microphone level peak power in dB or -1 if microphone monitoring is disabled.",
                "!type": "numder"
            },
            "AUDIO_SESSION_PORT_HDMI": {
                "!doc": "Constant for output via High-Definition Multimedia Interface. This is an output port",
                "!type": "string"
            },
            "MUSIC_MEDIA_TYPE_AUDIOBOOK": {
                "!doc": "Music library media containing audiobook content.",
                "!type": "numder"
            },
            "VIDEO_CONTROL_FULLSCREEN": {
                "!doc": "Constant for fullscreen video controls.",
                "!type": "numder"
            },
            "AUDIO_LINEOUT": {
                "!doc": "Line-type constant for line-out.",
                "!type": "numder"
            },
            "isCameraSupported": {
                "!doc": "`true` if the device has camera support.\n",
                "!type": "bool"
            },
            "MUSIC_PLAYER_SHUFFLE_NONE": {
                "!doc": "Constant for \"no shuffle\" setting.",
                "!type": "numder"
            },
            "VIDEO_MEDIA_TYPE_AUDIO": {
                "!doc": "A audio type of media in the movie returned by <Titanium.Media.VideoPlayer> `mediaTypes` property.",
                "!type": "numder"
            },
            "VIDEO_TIME_OPTION_EXACT": {
                "!doc": "Use the exact time.",
                "!type": "numder"
            },
            "VIDEO_TIME_OPTION_NEXT_SYNC": {
                "!doc": "Use the sync (or key) frame located right after or at given the time.",
                "!type": "numder"
            },
            "DEVICE_BUSY": {
                "!doc": "Constant for media device busy error.",
                "!type": "numder"
            },
            "VideoPlayer": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.VideoPlayer",
                "!doc": "A native control for playing videos.",
                "prototype": {
                    "contentURL": {
                        "!doc": "URL of the media to play.",
                        "!type": "string"
                    },
                    "allowsAirPlay": {
                        "!doc": "Whether or not the current movie can be played on a remote device.",
                        "!type": "bool"
                    },
                    "loadState": {
                        "!doc": "Returns the network load state of the movie player.",
                        "!type": "numder"
                    },
                    "endPlaybackTime": {
                        "!doc": "The end time of movie playback, in milliseconds.",
                        "!type": "numder"
                    },
                    "useApplicationAudioSession": {
                        "!doc": "Indicates if the movie player should inherit the application's audio session\ninstead of creating a new session.\n",
                        "!type": "bool"
                    },
                    "movieControlMode": {
                        "!doc": "Style of the media playback controls.",
                        "!type": "numder"
                    },
                    "mediaTypes": {
                        "!doc": "The types of media in the movie, or <Titanium.Media.VIDEO_MEDIA_TYPE_NONE> if not known.",
                        "!type": "numder"
                    },
                    "duration": {
                        "!doc": "The duration of the current movie in milliseconds, or 0.0 if not known.",
                        "!type": "numder"
                    },
                    "cancelAllThumbnailImageRequests": {
                        "!doc": "Cancels all pending asynchronous thumbnail requests.",
                        "!type": "fn()"
                    },
                    "fullscreen": {
                        "!doc": "Determines if the movie is presented in the entire screen (obscuring all other application content). \n",
                        "!type": "bool"
                    },
                    "pause": {
                        "!doc": "Pauses playing the video.",
                        "!type": "fn()"
                    },
                    "initialPlaybackTime": {
                        "!doc": "The start time of movie playback, in milliseconds.",
                        "!type": "numder"
                    },
                    "media": {
                        "!doc": "Media object to play, as either a `File`,  a `Blob`, or a URL.",
                        "!type": "+Titanium.Blob"
                    },
                    "repeatMode": {
                        "!doc": "Determines how the movie player repeats when reaching the end of playback.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "playbackState": {
                        "!doc": "Current playback state of the video player.",
                        "!type": "numder"
                    },
                    "setBackgroundView": {
                        "!doc": "Sets the background view for customization which is always displayed behind movie content.",
                        "!type": "fn(view: +Titanium.UI.View)"
                    },
                    "play": {
                        "!doc": "Starts playing the video.",
                        "!type": "fn()"
                    },
                    "thumbnailImageAtTime": {
                        "!doc": "Returns a thumbnail image for the video at the specified time.",
                        "!type": "fn(time: numder, option: numder) -> +Titanium.Blob"
                    },
                    "sourceType": {
                        "!doc": "The playback type of the movie.",
                        "!type": "numder"
                    },
                    "stop": {
                        "!doc": "Stops playing the video.",
                        "!type": "fn()"
                    },
                    "mediaControlStyle": {
                        "!doc": "The style of the playback controls.",
                        "!type": "numder"
                    },
                    "volume": {
                        "!doc": "Volume of the audio portion of the video. \n",
                        "!type": "numder"
                    },
                    "requestThumbnailImagesAtTimes": {
                        "!doc": "Asynchronously request thumbnail images for one or more points in time in the video.",
                        "!type": "fn(times: [numder], option: numder, callback: +Callback<ThumbnailResponse>)"
                    },
                    "naturalSize": {
                        "!doc": "Returns the natural size of the movie.",
                        "!type": "+MovieSize"
                    },
                    "url": {
                        "!doc": "URL of the media to play.",
                        "!type": "string"
                    },
                    "currentPlaybackTime": {
                        "!doc": "Current playback time of the current movie in milliseconds.",
                        "!type": "numder"
                    },
                    "scalingMode": {
                        "!doc": "Determines how the content scales to fit the view.",
                        "!type": "numder"
                    },
                    "release": {
                        "!doc": "Releases the internal video resources immediately.",
                        "!type": "fn()"
                    },
                    "playing": {
                        "!doc": "Boolean to indicate if the player has started playing.",
                        "!type": "bool"
                    },
                    "playableDuration": {
                        "!doc": "Currently playable duration of the movie, in milliseconds, for progressively \ndownloaded network content, or 0.0 if not known.\n",
                        "!type": "numder"
                    },
                    "autoplay": {
                        "!doc": "Indicates if a movie should automatically start playback.",
                        "!type": "bool"
                    }
                }
            },
            "stopVideoCapture": {
                "!doc": "Stops video capture using the camera specified.",
                "!type": "fn()"
            },
            "MUSIC_MEDIA_GROUP_PLAYLIST": {
                "!doc": "Constant for grouping query results by playlist.",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media",
            "VIDEO_SCALING_NONE": {
                "!doc": "Video scaling is disabled.",
                "!type": "numder"
            },
            "AUDIO_HEADPHONES": {
                "!doc": "Line-type constant for headphones.",
                "!type": "numder"
            },
            "currentRoute": {
                "!doc": "Returns a description of the current route, consisting of zero or more input ports and zero or more output ports.\n",
                "!type": "+RouteDescription"
            },
            "VIDEO_REPEAT_MODE_ONE": {
                "!doc": "Constant for repeating one video (i.e., the one video will repeat constantly) during playback.",
                "!type": "numder"
            },
            "VIDEO_SCALING_ASPECT_FIT": {
                "!doc": "Scale video to fit the screen, letterboxing if necessary.",
                "!type": "numder"
            },
            "takeScreenshot": {
                "!doc": "Takes a screen shot of the visible UI on the device.",
                "!type": "fn(callback: +Callback<ScreenshotResult>)"
            },
            "AUDIO_HEADSET_INOUT": {
                "!doc": "Line-type constant for headset in/out.",
                "!type": "numder"
            },
            "Item": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.Item",
                "!doc": "A representation of a media item returned by [openMusicLibrary](Titanium.Media.openMusicLibrary) or [queryMusicLibrary](Titanium.Media.queryMusicLibrary).",
                "prototype": {
                    "albumTrackCount": {
                        "!doc": "Number of tracks for the album containing this item.",
                        "!type": "numder"
                    },
                    "rating": {
                        "!doc": "Rating for this item.",
                        "!type": "numder"
                    },
                    "playbackDuration": {
                        "!doc": "Length (in seconds) of this item.",
                        "!type": "numder"
                    },
                    "isCompilation": {
                        "!doc": "True if this item is part of a compilation album.",
                        "!type": "bool"
                    },
                    "discCount": {
                        "!doc": "Total number of discs for the album containing this item.",
                        "!type": "numder"
                    },
                    "lyrics": {
                        "!doc": "Lyrics for this item.",
                        "!type": "string"
                    },
                    "artist": {
                        "!doc": "Artist credited for this item.",
                        "!type": "string"
                    },
                    "skipCount": {
                        "!doc": "Number of times this item has been skipped.",
                        "!type": "numder"
                    },
                    "albumTrackNumber": {
                        "!doc": "Track number for this item.",
                        "!type": "numder"
                    },
                    "podcastTitle": {
                        "!doc": "Title of a podcast item.",
                        "!type": "string"
                    },
                    "albumTitle": {
                        "!doc": "Title of the album containing this item.",
                        "!type": "string"
                    },
                    "mediaType": {
                        "!doc": "The type of the media. \n",
                        "!type": "numder"
                    },
                    "albumArtist": {
                        "!doc": "Artist credited for the album containing this item.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "composer": {
                        "!doc": "Composer of this item.",
                        "!type": "string"
                    },
                    "artwork": {
                        "!doc": "Image for the item's artwork as a `Blob` object,  or `null` if no artwork is\navailable.\n",
                        "!type": "+Titanium.Blob"
                    },
                    "genre": {
                        "!doc": "Genre of this item.",
                        "!type": "string"
                    },
                    "title": {
                        "!doc": "Title of this item.",
                        "!type": "string"
                    },
                    "discNumber": {
                        "!doc": "Disc number for this item in the album.",
                        "!type": "numder"
                    },
                    "playCount": {
                        "!doc": "Number of times the item has been played.",
                        "!type": "numder"
                    }
                }
            },
            "MUSIC_MEDIA_TYPE_MUSIC": {
                "!doc": "Music library media containing music content.",
                "!type": "numder"
            },
            "isMediaTypeSupported": {
                "!doc": "Returns `true` if the source supports the specified media type.",
                "!type": "fn(source: string, type: string) -> bool"
            },
            "AUDIO_SESSION_MODE_SOLO_AMBIENT": {
                "!doc": "Session mode for long-duration sounds such as rain, car engine noise, and so on.",
                "!type": "numder"
            },
            "AudioPlayer": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Media.AudioPlayer",
                "!doc": "An audio player object used for streaming audio to the device, and low-level control of the audio playback.\n",
                "prototype": {
                    "STATE_INITIALIZED": {
                        "!doc": "Audio playback is being initialized.",
                        "!type": "numder"
                    },
                    "paused": {
                        "!doc": "Boolean indicating if audio playback is paused.",
                        "!type": "bool"
                    },
                    "duration": {
                        "!doc": "Estimated duration in milliseconds of the file being played.",
                        "!type": "numder"
                    },
                    "STATE_WAITING_FOR_QUEUE": {
                        "!doc": "Player is waiting for audio data to fill the queue.",
                        "!type": "numder"
                    },
                    "bufferSize": {
                        "!doc": "Size of the buffer used for streaming, in bytes.",
                        "!type": "numder"
                    },
                    "STATE_WAITING_FOR_DATA": {
                        "!doc": "Player is waiting for audio data from the network.",
                        "!type": "numder"
                    },
                    "pause": {
                        "!doc": "Pauses audio playback.",
                        "!type": "fn()"
                    },
                    "STATE_PLAYING": {
                        "!doc": "Audio playback is active.",
                        "!type": "numder"
                    },
                    "state": {
                        "!doc": "Current state of playback, specified using one of the `STATE` constants defined on this object.",
                        "!type": "numder"
                    },
                    "STATE_BUFFERING": {
                        "!doc": "Audio data is being buffered from the network.",
                        "!type": "numder"
                    },
                    "start": {
                        "!doc": "Starts or resumes audio playback.",
                        "!type": "fn()"
                    },
                    "waiting": {
                        "!doc": "Boolean indicating if the playback is waiting for audio data from the network.",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "progress": {
                        "!doc": "Current playback progress, in milliseconds.",
                        "!type": "numder"
                    },
                    "bitRate": {
                        "!doc": "Bit rate of the current playback stream.",
                        "!type": "numder"
                    },
                    "STATE_PAUSED": {
                        "!doc": "Playback is paused.",
                        "!type": "numder"
                    },
                    "play": {
                        "!doc": "Starts or resumes audio playback.",
                        "!type": "fn()"
                    },
                    "STATE_STOPPING": {
                        "!doc": "Audio playback is stopping.",
                        "!type": "numder"
                    },
                    "stop": {
                        "!doc": "Stops audio playback.",
                        "!type": "fn()"
                    },
                    "volume": {
                        "!doc": "Volume of the audio, from 0.0 (muted) to 1.0 (loudest).",
                        "!type": "numder"
                    },
                    "isPlaying": {
                        "!doc": "Returns the value of the [playing](Titanium.Media.AudioPlayer.playing) property.",
                        "!type": "fn() -> bool"
                    },
                    "STATE_STOPPED": {
                        "!doc": "Audio playback is stopped.",
                        "!type": "numder"
                    },
                    "stateDescription": {
                        "!doc": "Converts a [state](Titanium.Media.AudioPlayer.state) value into a text description\nsuitable for display.\n",
                        "!type": "fn(state: numder) -> string"
                    },
                    "getPlaying": {
                        "!doc": "Returns the value of the [playing](Titanium.Media.AudioPlayer.playing) property.",
                        "!type": "fn() -> bool"
                    },
                    "STATE_STARTING": {
                        "!doc": "Audio playback is starting.",
                        "!type": "numder"
                    },
                    "getPaused": {
                        "!doc": "Returns the value of the [paused](Titanium.Media.AudioPlayer.paused) property.",
                        "!type": "fn() -> bool"
                    },
                    "url": {
                        "!doc": "URL for the audio stream.",
                        "!type": "string"
                    },
                    "idle": {
                        "!doc": "Boolean indicating if the player is idle.",
                        "!type": "bool"
                    },
                    "isPaused": {
                        "!doc": "Returns the value of the [paused](Titanium.Media.AudioPlayer.paused) property.",
                        "!type": "fn() -> bool"
                    },
                    "time": {
                        "!doc": "Current playback position of the audio.",
                        "!type": "numder"
                    },
                    "release": {
                        "!doc": "Stops buffering audio data and releases audio resources.",
                        "!type": "fn()"
                    },
                    "allowBackground": {
                        "!doc": "Boolean to indicate if audio should continue playing even if the associated\nAndroid [Activity](Titanium.Android.Activity) is paused.\n",
                        "!type": "bool"
                    },
                    "playing": {
                        "!doc": "Boolean indicating if audio is currently playing.",
                        "!type": "bool"
                    },
                    "setPaused": {
                        "!doc": "Sets the value of the [paused](Titanium.Media.AudioPlayer.paused) property.",
                        "!type": "fn(paused: bool)"
                    }
                }
            },
            "VIDEO_TIME_OPTION_NEAREST_KEYFRAME": {
                "!doc": "Use the closest keyframe in the time.",
                "!type": "numder"
            },
            "MUSIC_MEDIA_GROUP_ALBUM_ARTIST": {
                "!doc": "Constant for grouping query results by album and artist.",
                "!type": "numder"
            },
            "availableCameraMediaTypes": {
                "!doc": "Array of media type constants supported for the camera.",
                "!type": "[+Object]"
            },
            "VIDEO_SOURCE_TYPE_FILE": {
                "!doc": "Video source type is a file.",
                "!type": "numder"
            },
            "MUSIC_PLAYER_REPEAT_DEFAULT": {
                "!doc": "Constant for user's default repeat setting.",
                "!type": "numder"
            },
            "MEDIA_TYPE_VIDEO": {
                "!doc": "Media type constant for video media.",
                "!type": "string"
            },
            "AUDIO_UNAVAILABLE": {
                "!doc": "Line-type constant indicating that audio is unavailable.",
                "!type": "numder"
            },
            "hideCamera": {
                "!doc": "Hides the device camera UI.",
                "!type": "fn()"
            }
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium",
        "include": {
            "!doc": "Includes JavaScript code from one or more files.",
            "!type": "fn(name: string)"
        },
        "XML": {
            "Comment": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Comment",
                "!doc": "Represents the contents of an XML comment.\n",
                "prototype": {
                    "!proto": "Titanium.XML.CharacterData.prototype"
                }
            },
            "Node": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Node",
                "!doc": "A single node in the [Document](Titanium.XML.Document) tree.",
                "prototype": {
                    "appendChild": {
                        "!doc": "Appends the node `newChild` as a child of this node.",
                        "!type": "fn(newChild: +Titanium.XML.Node) -> +Titanium.XML.Node"
                    },
                    "COMMENT_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[Comment](Titanium.XML.Comment) node.  \n",
                        "!type": "numder"
                    },
                    "text": {
                        "!doc": "Content (value) of all text nodes within this node.\n",
                        "!type": "string"
                    },
                    "nextSibling": {
                        "!doc": "This node's next sibling.",
                        "!type": "+Titanium.XML.Node"
                    },
                    "cloneNode": {
                        "!doc": "Returns a duplicate of this node.",
                        "!type": "fn(deep: bool) -> +Titanium.XML.Node"
                    },
                    "DOCUMENT_TYPE_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[DocumentType](Titanium.XML.DocumentType) node.  \n",
                        "!type": "numder"
                    },
                    "firstChild": {
                        "!doc": "This node's first child.",
                        "!type": "+Titanium.XML.Node"
                    },
                    "prefix": {
                        "!doc": "Namespace prefix of this node.",
                        "!type": "string"
                    },
                    "nodeValue": {
                        "!doc": "Content (value) of this node.",
                        "!type": "string"
                    },
                    "ATTRIBUTE_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify an\n[Attr](Titanium.XML.Attr) node.  \n",
                        "!type": "numder"
                    },
                    "childNodes": {
                        "!doc": "A <Titanium.XML.NodeList> of this node's children.",
                        "!type": "+Titanium.XML.NodeList"
                    },
                    "normalize": {
                        "!doc": "Normalizes text and attribute nodes in this node's child hierarchy.",
                        "!type": "fn()"
                    },
                    "isSupported": {
                        "!doc": "Tests whether the DOM implementation supports a specific feature.",
                        "!type": "fn(feature: string, version: string) -> bool"
                    },
                    "nodeName": {
                        "!doc": "Name of this node.",
                        "!type": "string"
                    },
                    "removeChild": {
                        "!doc": "Removes a child node from this node.",
                        "!type": "fn(oldChild: +Titanium.XML.Node) -> +Titanium.XML.Node"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "CDATA_SECTION_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[CDATASection](Titanium.XML.CDATASection) node.  \n",
                        "!type": "numder"
                    },
                    "DOCUMENT_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[Document](Titanium.XML.Document) node.  \n",
                        "!type": "numder"
                    },
                    "localName": {
                        "!doc": "Local part of the qualified name of this node.",
                        "!type": "string"
                    },
                    "DOCUMENT_FRAGMENT_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[DocumentFragment](Titanium.XML.DocumentFragment) node.  \n",
                        "!type": "numder"
                    },
                    "previousSibling": {
                        "!doc": "This node's previous sibling.",
                        "!type": "+Titanium.XML.Node"
                    },
                    "nodeType": {
                        "!doc": "This node's type. One of `ELEMENT_NODE`, `ATTRIBUTE_NODE`, `TEXT_NODE`, `CDATA_SECTION_NODE`,\n`ENTITY_REFERENCE_NODE`, `ENTITY_NODE`, `PROCESSING_INSTRUCTION_NODE`, `COMMENT_NODE`,\n`DOCUMENT_NODE`, `DOCUMENT_TYPE_NODE`, `DOCUMENT_FRAGMENT_NODE`, `NOTATION_NODE`.\n",
                        "!type": "numder"
                    },
                    "insertBefore": {
                        "!doc": "Inserts the node `newChild` before the node `refChild`.",
                        "!type": "fn(newChild: +Titanium.XML.Node, refChild: +Titanium.XML.Node) -> +Titanium.XML.Node"
                    },
                    "ENTITY_REFERENCE_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify an\n[EntityReference](Titanium.XML.EntityReference) node.  \n",
                        "!type": "numder"
                    },
                    "ENTITY_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify an\n[Entity](Titanium.XML.Entity) node.  \n",
                        "!type": "numder"
                    },
                    "TEXT_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[Text](Titanium.XML.Text) node.  \n",
                        "!type": "numder"
                    },
                    "replaceChild": {
                        "!doc": "Replaces the node `oldChild` with the node `newChild`.",
                        "!type": "fn(newChild: +Titanium.XML.Node, oldChild: +Titanium.XML.Node) -> +Titanium.XML.Node"
                    },
                    "NOTATION_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[Notation](Titanium.XML.Notation) node.  \n",
                        "!type": "numder"
                    },
                    "lastChild": {
                        "!doc": "This node's last child.",
                        "!type": "+Titanium.XML.Node"
                    },
                    "hasChildNodes": {
                        "!doc": "Returns `true` if this node has child nodes.",
                        "!type": "fn() -> bool"
                    },
                    "ownerDocument": {
                        "!doc": "This node's owning document.",
                        "!type": "+Titanium.XML.Document"
                    },
                    "textContent": {
                        "!doc": "Content (value) of all text nodes within this node.",
                        "!type": "string"
                    },
                    "parentNode": {
                        "!doc": "This node's parent node.",
                        "!type": "+Titanium.XML.Node"
                    },
                    "PROCESSING_INSTRUCTION_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify a\n[ProcessingInstruction](Titanium.XML.ProcessingInstruction) node.  \n",
                        "!type": "numder"
                    },
                    "namespaceURI": {
                        "!doc": "Namespace URI of this node.",
                        "!type": "string"
                    },
                    "ELEMENT_NODE": {
                        "!doc": "Used with [nodeType](Titanium.XML.Node.nodeType) to identify an\n[Element](Titanium.XML.Element) node.  \n",
                        "!type": "numder"
                    },
                    "hasAttributes": {
                        "!doc": "Returns `true` if this node has attributes.",
                        "!type": "fn() -> bool"
                    },
                    "attributes": {
                        "!doc": "A map of this node's attributes.",
                        "!type": "+Titanium.XML.NamedNodeMap"
                    }
                }
            },
            "Document": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Document",
                "!doc": "The DOM Document returned from <Titanium.XML.parseString>.",
                "prototype": {
                    "createAttribute": {
                        "!doc": "Creates an attribute with the given name.",
                        "!type": "fn(name: string) -> +Titanium.XML.Attr"
                    },
                    "createCDATASection": {
                        "!doc": "Creates and returns a [CDATASection](Titanium.XML.CDATASection).",
                        "!type": "fn(data: string) -> +Titanium.XML.CDATASection"
                    },
                    "documentElement": {
                        "!doc": "Root element of this document.",
                        "!type": "+Titanium.XML.Element"
                    },
                    "implementation": {
                        "!doc": "[DOMImplementation](Titanium.XML.DOMImplementation) object associated with this\ndocument.\n",
                        "!type": "+Titanium.XML.DOMImplementation"
                    },
                    "createProcessingInstruction": {
                        "!doc": "Creates a processing instruction for inserting into the DOM tree.",
                        "!type": "fn(target: string, data: string) -> +Titanium.XML.ProcessingInstruction"
                    },
                    "createElementNS": {
                        "!doc": "Create a new element with the given namespace and name.",
                        "!type": "fn(namespaceURI: string, name: string) -> +Titanium.XML.Element"
                    },
                    "doctype": {
                        "!doc": "An interface to the list of entities that are defined for the document, such as via a Document Type Definition (DTD).",
                        "!type": "+Titanium.XML.DocumentType"
                    },
                    "createElement": {
                        "!doc": "Creates an element with the given tag name.",
                        "!type": "fn(tagName: string) -> +Titanium.XML.Element"
                    },
                    "createEntityReference": {
                        "!doc": "Creates an [EntityReference](Titanium.XML.EntityReference) with the given name.",
                        "!type": "fn(name: string) -> +Titanium.XML.EntityReference"
                    },
                    "getElementById": {
                        "!doc": "Returns an [Element](Titanium.XML.Element) that has an ID attribute with the given value.",
                        "!type": "fn(elementId: string) -> +Titanium.XML.Element"
                    },
                    "!proto": "Titanium.XML.Node.prototype",
                    "getElementsByTagNameNS": {
                        "!doc": "Returns a node list of elements in the document which belong to the given namespace and have the given tag name.",
                        "!type": "fn(namespaceURI: string, localname: string) -> +Titanium.XML.NodeList"
                    },
                    "createComment": {
                        "!doc": "Creates a [Comment](Titanium.XML.Comment) with the supplied string data.",
                        "!type": "fn(data: string) -> +Titanium.XML.Comment"
                    },
                    "createDocumentFragment": {
                        "!doc": "Creates an empty [DocumentFragment](Titanium.XML.DocumentFragment).",
                        "!type": "fn() -> +Titanium.XML.DocumentFragment"
                    },
                    "createAttributeNS": {
                        "!doc": "Creates an attribute with the given name and namespace.",
                        "!type": "fn(namespaceURI: string, name: string) -> +Titanium.XML.Attr"
                    },
                    "importNode": {
                        "!doc": "Imports a node from another document to this document,\nwithout altering or removing the source node from the original document.\n",
                        "!type": "fn(importedNode: +Titanium.XML.Node, deep: bool) -> +Titanium.XML.Node"
                    },
                    "getElementsByTagName": {
                        "!doc": "Returns a node list of elements in the document which have the given tag.",
                        "!type": "fn(tagname: string) -> +Titanium.XML.NodeList"
                    },
                    "createTextNode": {
                        "!doc": "Creates a text node.",
                        "!type": "fn(data: string) -> +Titanium.XML.Text"
                    }
                }
            },
            "CDATASection": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.CDATASection",
                "!doc": "Used to include blocks of literal text containing characters that would otherwise need\nto be escaped.\n",
                "prototype": {
                    "!proto": "Titanium.XML.Text.prototype"
                }
            },
            "Attr": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Attr",
                "!doc": "Represents an attribute of an [Element](Titanium.XML.Element).",
                "prototype": {
                    "!proto": "Titanium.XML.Node.prototype",
                    "specified": {
                        "!doc": "True if this attribute was explicitly given a value in the instance document, false otherwise.",
                        "!type": "bool"
                    },
                    "name": {
                        "!doc": "Attribute name",
                        "!type": "string"
                    },
                    "value": {
                        "!doc": "The attribute value as a string.",
                        "!type": "string"
                    },
                    "ownerElement": {
                        "!doc": "The <Titanium.XML.Element> to which the attribute belongs.",
                        "!type": "+Titanium.XML.Element"
                    }
                }
            },
            "Notation": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Notation",
                "!doc": "Represents a notation declared in the DTD.  Implements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-5431D1B9) on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5431D1B9) implementation on Mobile Web.",
                "prototype": {
                    "systemId": {
                        "!doc": "The system identifier of this notation. If the system identifier was not specified, this is `null`.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "publicId": {
                        "!doc": "The public identifier of this notation. If the public identifier was not specified, this is `null`.",
                        "!type": "string"
                    }
                }
            },
            "Text": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Text",
                "!doc": "Represents the textual content of an <Titanium.XML.Element> or <Titanium.XML.Attr> Implements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1312295772) on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1312295772) implementation on Mobile Web.",
                "prototype": {
                    "splitText": {
                        "!doc": "Breaks this node into two nodes at the specified by offset, and returns a new node of the same type, which contains all the content at and after the offset point. Throws an exception if the specified offset is negative or if this node is read only.",
                        "!type": "fn(offset: numder) -> +Titanium.XML.Text"
                    },
                    "!proto": "Titanium.XML.CharacterData.prototype",
                    "textContent": {
                        "!doc": "Content (value) of all text nodes within this node.",
                        "!type": "string"
                    }
                }
            },
            "Entity": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Entity",
                "!doc": "This interface represents an entity, either parsed or unparsed, in an XML document. Note that this models the entity itself not the entity declaration. The nodeName attribute that is inherited from Node contains the name of the entity. An Entity node does not have any parent.\nImplements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-527DCFF2) on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-527DCFF2) implementation on Mobile Web.",
                "prototype": {
                    "systemId": {
                        "!doc": "The system identifier associated with the entity, if specified. If the system identifier was not specified, this is null.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.XML.Node.prototype",
                    "publicId": {
                        "!doc": "The public identifier associated with the entity, if specified. If the public identifier was not specified, this is `null`.",
                        "!type": "string"
                    },
                    "notationName": {
                        "!doc": "For unparsed entities, the name of the notation for the entity. For parsed entities, this is `null`.",
                        "!type": "string"
                    }
                }
            },
            "Element": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.Element",
                "!doc": "Represents an element in a DOM document, a <Titanium.XML.Node>  defined by a start-tag and end-tag (or an empty tag). Elements may have [attributes](Titanium.XML.Attr) associated with them.\nImplements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614)  on Android and iOS with some non-standard extensions. Exposes the  [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-745549614) implementation on Mobile Web.\n",
                "prototype": {
                    "removeAttributeNS": {
                        "!doc": "Removes an attribute by local name and namespace URI. If the attribute has a default value, it is immediately replaced with this default, including namespace URI and local name. Throws an exception if the element is read-only.\n",
                        "!type": "fn(namespaceURI: string, localName: string)"
                    },
                    "getAttributeNodeNS": {
                        "!doc": "Retrieves an attribute value by local name and namespace URI,  returning it as a <Titanium.XML.Attr> object.\n",
                        "!type": "fn(namespaceURI: string, localName: string) -> +Titanium.XML.Attr"
                    },
                    "setAttributeNodeNS": {
                        "!doc": "Adds a new attribute. Any attribute with the same local name and namespace URI is replaced. Throws an exception if the element is read-only, if `newAttr` is from a different document, or if `newAttr` is already an attribute of another element.\n",
                        "!type": "fn(newAttr: +Titanium.XML.Attr) -> +Titanium.XML.Attr"
                    },
                    "removeAttribute": {
                        "!doc": "Removes an attribute by name. If the attribute has a default value, it is immediately replaced with this default, including namespace URI and local name. Throws an exception if the element is read-only.\n",
                        "!type": "fn(name: string)"
                    },
                    "getAttribute": {
                        "!doc": "Retrieves an attribute value by name, returning it as a string.",
                        "!type": "fn(name: string) -> string"
                    },
                    "text": {
                        "!doc": "Content (value) of all text nodes within this node.",
                        "!type": "string"
                    },
                    "textContent": {
                        "!doc": "Content (value) of all text nodes within this node.",
                        "!type": "string"
                    },
                    "setAttribute": {
                        "!doc": "Adds a new attribute. Any attribute with the same name is replaced. Throws an exception if the element is read-only, or if the name contains an illegal character.\n",
                        "!type": "fn(name: string, value: string)"
                    },
                    "getElementsByTagNameNS": {
                        "!doc": "Retrieves a <Titanium.XML.NodeList> of all descendant elements with a given local name and namespace URI, in preorder traversal.\n",
                        "!type": "fn(namespaceURI: string, localName: string) -> +Titanium.XML.NodeList"
                    },
                    "hasAttributeNS": {
                        "!doc": "Determines whether or not an attribute with the given name is available in the element, or has a default value.\n",
                        "!type": "fn(namespaceURI: string, localName: string) -> bool"
                    },
                    "getAttributeNode": {
                        "!doc": "Retrieves an attribute value by name, returning it as a <Titanium.XML.Attr> object.\n",
                        "!type": "fn(name: string) -> +Titanium.XML.Attr"
                    },
                    "!proto": "Titanium.XML.Node.prototype",
                    "setAttributeNode": {
                        "!doc": "Adds a new attribute. Any attribute with the same `nodeName` as the argument is replaced. Throws an exception if the element is read-only, if `newAttr` is from a different document, or if `newAttr` is already an attribute of another element.\n",
                        "!type": "fn(newAttr: +Titanium.XML.Attr) -> +Titanium.XML.Attr"
                    },
                    "tagName": {
                        "!doc": "The name of the element, as defined by its tag.",
                        "!type": "string"
                    },
                    "getElementsByTagName": {
                        "!doc": "Retrieves a <Titanium.XML.NodeList> of all descendant elements with a given tag name, in preorder traversal.\n",
                        "!type": "fn(name: string) -> +Titanium.XML.NodeList"
                    },
                    "setAttributeNS": {
                        "!doc": "Adds a new attribute. Any attribute with the same local name and namespace URI is present on the element is replaced, with its prefix changed to that of the `qualifiedName` parameter.  Throws an exception if the element is read-only, if the name contains an illegal character, or if the qualified name contains an error.\n",
                        "!type": "fn(namespaceURI: string, qualifiedName: string, value: string)"
                    },
                    "hasAttribute": {
                        "!doc": "Determines whether or not an attribute with the given name is available in the element, or has a default value.\n",
                        "!type": "fn(name: string) -> bool"
                    },
                    "getAttributeNS": {
                        "!doc": "Retrieves an attribute value by local name and namespace URI, returning it as a string.\n",
                        "!type": "fn(namespaceURI: string, localName: string) -> string"
                    },
                    "removeAttributeNode": {
                        "!doc": "Removes the specified attribute node. If the removed attribute has a default value, it is replaced immediately, with the same namespace and local name as the removed attribute, if applicable. Throws an exception if the element is read-only, or the attribute is  not an attribute of the element.\n",
                        "!type": "fn(oldAttr: +Titanium.XML.Attr)"
                    }
                }
            },
            "CharacterData": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.CharacterData",
                "!doc": "An interface extending <Titanium.XML.Node> with a set of attributes and methods for accessing character data in the DOM.\nImplements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-FF21A306) on Android and iOS. For reasons of compatibility with the javascript engine, text is represented by UTF-8 instead of UTF-16 on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-FF21A306) implementation on Mobile Web.",
                "prototype": {
                    "substringData": {
                        "!doc": "Extracts a range of data from the node. Throws an exception if offset is negative, offset is beyond the data's length, or if count is negative.",
                        "!type": "fn(offset: numder, count: numder) -> string"
                    },
                    "replaceData": {
                        "!doc": "Replace the characters starting at the specified offset with the specified string. Throws an exception if this node is readonly, if offset is negative, offset is beyond the data's length, or if count is negative.",
                        "!type": "fn(offset: numder, count: numder, arg: string)"
                    },
                    "insertData": {
                        "!doc": "Insert a string at the specified offset. Throws an exception if this node is readonly, if offset is negative, or if offset is beyond the data's length.",
                        "!type": "fn(offset: numder, arg: string)"
                    },
                    "length": {
                        "!doc": "The number of characters that are available through data and the substringData method. This may have the value zero, i.e., <Titanium.XML.CharacterData> may be empty.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.XML.Node.prototype",
                    "appendData": {
                        "!doc": "Append the string to the end of the character data of the node. Upon success, data provides access to the concatenation of data and the string specified. Throws an exception if this node is readonly.",
                        "!type": "fn(arg: string)"
                    },
                    "deleteData": {
                        "!doc": "Remove a range of characters from the node. Upon success, data and length reflect the change. Throws an exception if this node is readonly, if offset is negative, offset is beyond the data's length, or if count is negative.",
                        "!type": "fn(offset: numder, count: numder)"
                    },
                    "data": {
                        "!doc": "The character data of the node that implements this interface. Throws an exception during setting if this node is readonly.",
                        "!type": "string"
                    }
                }
            },
            "ProcessingInstruction": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.ProcessingInstruction",
                "!doc": "A way to keep processor-specific information in the text of the document. Implements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1004215813) on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1004215813) implementation on Mobile Web.",
                "prototype": {
                    "!proto": "Titanium.Proxy.prototype",
                    "data": {
                        "!doc": "Retrieve the content of this processing instruction. This from the first non white space character  after the target to the character immediatly preceding the ?>. When setting a processing instruction, a DOMException may be thrown on an invalid instruction.\n",
                        "!type": "string"
                    },
                    "target": {
                        "!doc": "Retrieve the target of this processing instruction. XML defines this as being the first token following  the markup that begins the processing instruction.\n",
                        "!type": "string"
                    }
                }
            },
            "NamedNodeMap": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.NamedNodeMap",
                "!doc": "A key-value paired map that maps String objects to  <Titanium.XML.Node> objects. \nImplements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1780488922)  on Android and iOS. Exposes the  [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1780488922) implementation on Mobile Web.\n",
                "prototype": {
                    "removeNamedItemNS": {
                        "!doc": "Removes a node from the map specified by local name and namespace URI.  When this map contains attributes attached to an element, if the removed attribtue is known to have a default, it is replaced with that value. Returns the node removed from the map, or `null` if there is no corresponding node.\n",
                        "!type": "fn(namespaceURI: string, localName: string) -> +Titanium.XML.Node"
                    },
                    "setNamedItemNS": {
                        "!doc": "Adds a node using its `namespaceURI` and `localName` attributes. If a node with that name is already present, it is replaced. Throws an exception if the argument is from a different document, the map is read-only, or the argument is an attribute of another element.\n",
                        "!type": "fn(node: +Titanium.XML.Node) -> +Titanium.XML.Node"
                    },
                    "getNamedItemNS": {
                        "!doc": "Retrieves a node specified by name and namespace. Returns `null` if no matching node is in the map.\n",
                        "!type": "fn(namespaceURI: string, localName: string) -> +Titanium.XML.Node"
                    },
                    "getNamedItem": {
                        "!doc": "Retrieves a node specified by name.",
                        "!type": "fn(name: string) -> +Titanium.XML.Node"
                    },
                    "setNamedItem": {
                        "!doc": "Adds a node using its `nodeName` attribute. If a node with that name is already present, it is replaced.  Throws an exception if the argument is from a different document, the map is read-only, or the argument is an attribute of another element.\n",
                        "!type": "fn(node: +Titanium.XML.Node) -> +Titanium.XML.Node"
                    },
                    "item": {
                        "!doc": "Retrieves the node at the specified index of the map. Note that NamedNodeMaps are not ordered.\n",
                        "!type": "fn(index: numder) -> +Titanium.XML.Node"
                    },
                    "length": {
                        "!doc": "The number of nodes in the map. The valid range of child node indices is 0-`length`-1, inclusive.\n",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "removeNamedItem": {
                        "!doc": "Removes a node from the map specified by name. When this map contains attributes attached to an element, if the removed attribtue is known to have a default, it is replaced with that value.\n",
                        "!type": "fn(name: string) -> +Titanium.XML.Node"
                    }
                }
            },
            "EntityReference": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.EntityReference",
                "!doc": "Represents an XML entity reference.\n",
                "prototype": {
                    "!proto": "Titanium.XML.Node.prototype"
                }
            },
            "!doc": "The top level XML module.  The XML module is used for parsing and processing XML-based content.",
            "DocumentType": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.DocumentType",
                "!doc": "Each <Titanium.XML.Document> has a `doctype` attribute whose value is either 'null' or a <Titanium.XML.DocumentType> object.",
                "prototype": {
                    "publicId": {
                        "!doc": "The public identifier of the external subset.",
                        "!type": "string"
                    },
                    "name": {
                        "!doc": "The name of DTD; i.e., the name immediately following the `DOCTYPE` keyword.\n",
                        "!type": "string"
                    },
                    "notations": {
                        "!doc": "A <Titanium.XML.NamedNodeMap> containing the notations declared  in the DTD. Duplicates are discarded. Every node in this map also  implements the <Titanium.XML.Notation> interface.\n",
                        "!type": "+Titanium.XML.NamedNodeMap"
                    },
                    "entities": {
                        "!doc": "A <Titanium.XML.NamedNodeMap> containing the general entities, both external and internal, declared in the DTD. Parameter entities are not contained. Duplicates are discarded.\n",
                        "!type": "+Titanium.XML.NamedNodeMap"
                    },
                    "!proto": "Titanium.XML.Node.prototype",
                    "systemId": {
                        "!doc": "The system identifier of the external subset.",
                        "!type": "string"
                    },
                    "internalSubset": {
                        "!doc": "The internal subset as a string.",
                        "!type": "string"
                    }
                }
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML",
            "NodeList": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.NodeList",
                "!doc": "A list of <Titanium.XML.Node> objects. Implements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-536297177) on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-536297177) implementation on Mobile Web.",
                "prototype": {
                    "item": {
                        "!doc": "Returns the <Titanium.XML.Node> object at the specified index.",
                        "!type": "fn(index: numder) -> +Titanium.XML.Node"
                    },
                    "length": {
                        "!doc": "The length of the node list.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype"
                }
            },
            "DocumentFragment": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.DocumentFragment",
                "!doc": "A lightweight document object used as a container for a group of nodes.\n",
                "prototype": {
                    "!proto": "Titanium.XML.Node.prototype"
                }
            },
            "DOMImplementation": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.XML.DOMImplementation",
                "!doc": "The <Titanium.XML.DOMImplementation> interface provides a number of methods for performing operations that are independent of any particular instance of the document object model.Implements the [DOM Level 2 API](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490) on Android and iOS. Exposes the [DOM Level 3 API](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490) implementation on Mobile Web.",
                "prototype": {
                    "hasFeature": {
                        "!doc": "Test if the <Titanium.XML.DOMImplementation> implements a specific feature.",
                        "!type": "fn(feature: string, version: string) -> bool"
                    },
                    "createDocument": {
                        "!doc": "Creates an <Titanium.XML.Document> object of the specified type with its document element. Raises an exception if qualifiedName is malformed, contains an illegal character, or is inconsistent with namespaceURI. Also raises an exception if doctype has already been used with a different document.",
                        "!type": "fn(namespaceURI: string, qualifiedName: string, doctype: +Titanium.XML.DocumentType) -> +Titanium.XML.Document"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "createDocumentType": {
                        "!doc": "Creates an empty <Titanium.XML.DocumentType> node. Entity declarations and notations are not made available. Entity reference expansions and default attribute additions do not occur. Raises an exception if qualifiedName is malformed or contains an illegal character.",
                        "!type": "fn(qualifiedName: string, publicId: string, systemId: string) -> +Titanium.XML.DocumentType"
                    }
                }
            },
            "serializeToString": {
                "!doc": "Serializes a [Node](Titanium.XML.Node) object into a string.",
                "!type": "fn(node: +Titanium.XML.Node) -> string"
            },
            "parseString": {
                "!doc": "Parses an XML string into a <Titanium.XML.Document> object.\n",
                "!type": "fn(xml: string) -> +Titanium.XML.Document"
            }
        },
        "BlobStream": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.BlobStream",
            "!doc": "Wrapper around <Titanium.Blob> that implements the <Titanium.IOStream> interface.",
            "prototype": {
                "!proto": "Titanium.IOStream.prototype"
            }
        },
        "Utils": {
            "sha1": {
                "!doc": "Returns a SHA-1 hash of the specified data as a hex-based String.",
                "!type": "fn(obj: string) -> string"
            },
            "!doc": "The top-level Utils module, containing a set of JavaScript methods that are often useful when \nbuilding applications.\n",
            "md5HexDigest": {
                "!doc": "Returns a MD5 digest of the specified data as a hex-based String.",
                "!type": "fn(obj: string) -> string"
            },
            "base64encode": {
                "!doc": "Returns the specified data encoded to Base64.",
                "!type": "fn(obj: string) -> +Titanium.Blob"
            },
            "base64decode": {
                "!doc": "Returns the specified data decoded from Base64.",
                "!type": "fn(obj: string) -> +Titanium.Blob"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Utils",
            "sha256": {
                "!doc": "Returns a SHA-256 hash of the specified data as a hex-based String.",
                "!type": "fn(obj: string) -> string"
            }
        },
        "Database": {
            "FIELD_TYPE_STRING": {
                "!doc": "Constant for requesting a column's value returned in string form.",
                "!type": "numder"
            },
            "open": {
                "!doc": "Opens an SQLite database.",
                "!type": "fn(dbName: string) -> +Titanium.Database.DB"
            },
            "!doc": "The top-level `Database` module, used for creating and accessing the\nin-application SQLite database.\n",
            "ResultSet": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Database.ResultSet",
                "!doc": "The ResultSet instance returned by <Titanium.Database.DB.execute>.",
                "prototype": {
                    "validRow": {
                        "!doc": "Indicates whether the current row is valid.",
                        "!type": "bool"
                    },
                    "rowCount": {
                        "!doc": "The number of rows in this result set.",
                        "!type": "numder"
                    },
                    "isValidRow": {
                        "!doc": "Returns whether the current row is valid.",
                        "!type": "fn() -> bool"
                    },
                    "fieldCount": {
                        "!doc": "Returns the number of columns in this result set. This method has been **removed** in Release 3.3.0 of the Titanium SDK. Use the fieldCount property instead.",
                        "!type": "fn() -> numder"
                    },
                    "getFieldName": {
                        "!doc": "Returns the field name for the specified field index.",
                        "!type": "fn(index: numder) -> string"
                    },
                    "next": {
                        "!doc": "Advances to the next row in the result set and returns `true` if one exists, \nor `false` otherwise.\n",
                        "!type": "fn() -> bool"
                    },
                    "field": {
                        "!doc": "Retrieves the value for the specified field in the current row, \nand casts it to the specified type (String, Integer, Float or Double.)\n",
                        "!type": "fn(index: numder, type: numder)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "fieldName": {
                        "!doc": "Returns the field name for the specified field index.",
                        "!type": "fn(index: numder) -> string"
                    },
                    "close": {
                        "!doc": "Closes this result set and release resources. Once closed, the result set must no longer \nbe used.\n",
                        "!type": "fn()"
                    },
                    "fieldByName": {
                        "!doc": "Retrieves the value for the specified field in the current row, \nand casts it to the specified type (String, Integer, Float or Double.)\n",
                        "!type": "fn(name: string, type: numder)"
                    }
                }
            },
            "DB": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Database.DB",
                "!doc": "The `Database` instance returned by <Titanium.Database.open> or <Titanium.Database.install>.",
                "prototype": {
                    "execute": {
                        "!doc": "Executes an SQL statement against the database and returns a `ResultSet`.\n",
                        "!type": "fn(sql: string, vararg: string) -> +Titanium.Database.ResultSet"
                    },
                    "name": {
                        "!doc": "The name of the database.",
                        "!type": "string"
                    },
                    "lastInsertRowId": {
                        "!doc": "The identifier of the last populated row.",
                        "!type": "numder"
                    },
                    "remove": {
                        "!doc": "Removes the database files for this instance from disk. WARNING: this is a destructive \noperation and cannot be reversed. All data in the database will be lost; use with caution.\n",
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "file": {
                        "!doc": "A `File` object representing the file where this database is stored. Must only be used for \nsetting file properties.\n",
                        "!type": "+Titanium.Filesystem.File"
                    },
                    "close": {
                        "!doc": "Closes the database and releases resources from memory. Once closed, this instance is no \nlonger valid and should not be used. On iOS, also closes all <Titanium.Database.ResultSet> \ninstances that exist.\n",
                        "!type": "fn()"
                    },
                    "rowsAffected": {
                        "!doc": "The number of rows affected by the last query.",
                        "!type": "numder"
                    }
                }
            },
            "FIELD_TYPE_FLOAT": {
                "!doc": "Constant for requesting a column's value returned in float form.",
                "!type": "numder"
            },
            "install": {
                "!doc": "Installs an SQLite database to device's internal storage.",
                "!type": "fn(path: string, dbName: string) -> +Titanium.Database.DB"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Database",
            "FIELD_TYPE_DOUBLE": {
                "!doc": "Constant for requesting a column's value returned in double form.",
                "!type": "numder"
            },
            "FIELD_TYPE_INT": {
                "!doc": "Constant for requesting a column's value returned in integer form.",
                "!type": "numder"
            }
        },
        "BufferStream": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.BufferStream",
            "!doc": "Wrapper around <Titanium.Buffer> that implements the <Titanium.IOStream> interface.\n",
            "prototype": {
                "!proto": "Titanium.IOStream.prototype"
            }
        },
        "createBuffer": {
            "!doc": "Creates a new buffer based on the params.",
            "!type": "fn(params: +CreateBufferArgs) -> +Titanium.Buffer"
        },
        "Filesystem": {
            "openStream": {
                "!doc": "Opens file using the <Titanium.IOStream> interface.",
                "!type": "fn(mode: numder, path: string) -> +Titanium.Filesystem.FileStream"
            },
            "externalStorageDirectory": {
                "!doc": "Path to a directory on removable storage, such as SD card.",
                "!type": "string"
            },
            "directoryForSuite": {
                "!doc": "Returns the path to the container directory associated with the specified security application group ID.",
                "!type": "fn(suiteName: string) -> string"
            },
            "FileStream": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Filesystem.FileStream",
                "!doc": "Wrapper around `Titanium.Filesystem.File` that implements the `Titanium.IOStream` interface",
                "prototype": {
                    "close": {
                        "!doc": "closes file stream, exception is thrown on error",
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.IOStream.prototype"
                }
            },
            "!doc": "The top level filesystem module, used to access files and directories on the device.",
            "MODE_WRITE": {
                "!doc": "Constant for write mode for file operations.",
                "!type": "numder"
            },
            "applicationDataDirectory": {
                "!doc": "Path to the application's data directory.",
                "!type": "string"
            },
            "MODE_READ": {
                "!doc": "Constant for read mode for file operations.",
                "!type": "numder"
            },
            "MODE_APPEND": {
                "!doc": "Constant for append mode for file operations.",
                "!type": "numder"
            },
            "applicationSupportDirectory": {
                "!doc": "Path to the application support directory.",
                "!type": "string"
            },
            "applicationDirectory": {
                "!doc": "Path to the iOS application directory.",
                "!type": "string"
            },
            "resourcesDirectory": {
                "!doc": "Path to the application's resource directory.",
                "!type": "string"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Filesystem",
            "applicationCacheDirectory": {
                "!doc": "Path to the application's internal cache directory.",
                "!type": "string"
            },
            "resRawDirectory": {
                "!doc": "Path to the application's raw resource directory.",
                "!type": "string"
            },
            "createTempDirectory": {
                "!doc": "Creates a temporary directory and returns a [File](Titanium.Filesystem.File) object representing the new directory.",
                "!type": "fn() -> +Titanium.Filesystem.File"
            },
            "createTempFile": {
                "!doc": "Creates a temporary file and returns a [File](Titanium.Filesystem.File) object representing the new file.",
                "!type": "fn() -> +Titanium.Filesystem.File"
            },
            "isExternalStoragePresent": {
                "!doc": "Returns `true` if the device supports external storage *and* the external storage device is mounted.",
                "!type": "fn() -> bool"
            },
            "lineEnding": {
                "!doc": "Platform-specific line ending constant.",
                "!type": "string"
            },
            "tempDirectory": {
                "!doc": "Path for the application's temporary directory.",
                "!type": "string"
            },
            "separator": {
                "!doc": "Platform-specific path separator constant.",
                "!type": "string"
            },
            "File": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Filesystem.File",
                "!doc": "Object representing a path to a file or directory in the device's persistent storage.",
                "prototype": {
                    "rename": {
                        "!doc": "Renames the file identified by this file object.",
                        "!type": "fn(newname: string) -> bool"
                    },
                    "exists": {
                        "!doc": "Returns `true` if the file or directory identified by this file object exists on the device.",
                        "!type": "fn() -> bool"
                    },
                    "move": {
                        "!doc": "Moves the file identified by this file object to another path.",
                        "!type": "fn(newpath: string) -> bool"
                    },
                    "writable": {
                        "!doc": "`true` if the file identified by this object is writable.\n",
                        "!type": "bool"
                    },
                    "modificationTimestamp": {
                        "!doc": "Returns the last modification time for this file.",
                        "!type": "fn() -> numder"
                    },
                    "isDirectory": {
                        "!doc": "Returns `true` if this file object represents a directory.",
                        "!type": "fn() -> bool"
                    },
                    "open": {
                        "!doc": "Opens the file identified by this file object for random access.",
                        "!type": "fn(mode: numder) -> +Titanium.Filesystem.FileStream"
                    },
                    "deleteFile": {
                        "!doc": "Deletes the file identified by this file object.",
                        "!type": "fn() -> bool"
                    },
                    "append": {
                        "!doc": "Appends data to the file identified by this file object.",
                        "!type": "fn(data: string) -> bool"
                    },
                    "size": {
                        "!doc": "Size, in bytes, of the file identified by this object.",
                        "!type": "numder"
                    },
                    "deleteDirectory": {
                        "!doc": "Deletes the directory identified by this file object.",
                        "!type": "fn(recursive: bool) -> bool"
                    },
                    "executable": {
                        "!doc": "`true` if the file is executable.\n",
                        "!type": "bool"
                    },
                    "write": {
                        "!doc": "Writes the specified data to the file identified by this file object.",
                        "!type": "fn(data: string, append: bool) -> bool"
                    },
                    "getDirectoryListing": {
                        "!doc": "Returns a listing of the directory identified by this file object, or `null`\nif this object doesn't identify a directory.\n",
                        "!type": "fn() -> [string]"
                    },
                    "readonly": {
                        "!doc": "`true` if the file identified by this object is read-only.\n",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "hidden": {
                        "!doc": "Set to `true` if the file is hidden.",
                        "!type": "bool"
                    },
                    "remoteBackup": {
                        "!doc": "Value indicating whether or not to back up to a cloud service.",
                        "!type": "bool"
                    },
                    "writeable": {
                        "!doc": "`true` if the file identified by this object is writable.\n",
                        "!type": "bool"
                    },
                    "parent": {
                        "!doc": "A `File` object representing the parent directory of the file identified by this object.",
                        "!type": "+Titanium.Filesystem.File"
                    },
                    "spaceAvailable": {
                        "!doc": "Returns the amount of free space available on the device where the file identified by this file object is stored.",
                        "!type": "fn() -> numder"
                    },
                    "read": {
                        "!doc": "Returns the contents of the file identified by this file object as a `Blob`.",
                        "!type": "fn() -> +Titanium.Blob"
                    },
                    "createFile": {
                        "!doc": "Creates a file at the path identified by this file object.",
                        "!type": "fn() -> bool"
                    },
                    "nativePath": {
                        "!doc": "Native path associated with this file object, as a file URL.",
                        "!type": "string"
                    },
                    "symbolicLink": {
                        "!doc": "`true` if the file identified by this object is a symbolic link.\n",
                        "!type": "bool"
                    },
                    "copy": {
                        "!doc": "Copies the file identified by this file object to a new path.",
                        "!type": "fn(destinationPath: string) -> bool"
                    },
                    "getParent": {
                        "!doc": "Returns the path of the parent directory holding the file identified by this file object, as a String **or** as a `File` object.",
                        "!type": "fn()"
                    },
                    "resolve": {
                        "!doc": "Returns the fully-resolved native path associated with this file object.",
                        "!type": "fn() -> string"
                    },
                    "name": {
                        "!doc": "Name of the file.",
                        "!type": "string"
                    },
                    "extension": {
                        "!doc": "Returns the extension for the file identified by this file object.",
                        "!type": "fn() -> string"
                    },
                    "createTimestamp": {
                        "!doc": "Returns the creation timestamp for the file identified by this file object.",
                        "!type": "fn() -> numder"
                    },
                    "createDirectory": {
                        "!doc": "Creates a directory at the path identified by this file object.",
                        "!type": "fn() -> bool"
                    },
                    "isFile": {
                        "!doc": "Returns `true` if this file object represents an ordinary file.",
                        "!type": "fn() -> bool"
                    }
                }
            },
            "getFile": {
                "!doc": "Returns a `File` object representing the file identified by the path arguments.",
                "!type": "fn(path: string) -> +Titanium.Filesystem.File"
            }
        },
        "Gesture": {
            "isLandscape": {
                "!doc": "Returns whether current window is considered landscape by the device.",
                "!type": "fn() -> bool"
            },
            "orientation": {
                "!doc": "Orientation of the current window.",
                "!type": "numder"
            },
            "!doc": "The Gesture module is responsible for high-level device gestures such as orientation changes \nand shake gestures.\n",
            "getLandscape": {
                "!doc": "Gets the value of the [landscape](Titanium.Gesture.landscape) property.",
                "!type": "fn() -> bool"
            },
            "isPortrait": {
                "!doc": "Returns whether current window is considered portrait by the device.",
                "!type": "fn() -> bool"
            },
            "getPortrait": {
                "!doc": "Gets the value of the [portrait](Titanium.Gesture.portrait) property.",
                "!type": "fn() -> bool"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Gesture",
            "portrait": {
                "!doc": "Indicates whether current window is considered portrait by the device.",
                "!type": "bool"
            },
            "landscape": {
                "!doc": "Indicates whether current window is considered landscape by the device.",
                "!type": "bool"
            }
        },
        "Geolocation": {
            "lastGeolocation": {
                "!doc": "JSON representation of the last geolocation received.",
                "!type": "string"
            },
            "ERROR_REGION_MONITORING_DENIED": {
                "!doc": "Error code indicating that region monitoring is denied.",
                "!type": "numder"
            },
            "!doc": "The top level Geolocation module. The Geolocation module is used for accessing device location based information.",
            "getCurrentHeading": {
                "!doc": "Retrieves the current compass heading.",
                "!type": "fn(callback: +Callback<HeadingResponse>)"
            },
            "activityType": {
                "!doc": "The type of user activity to be associated with the location updates. Available in iOS 6.0 and later.\n",
                "!type": "numder"
            },
            "ACTIVITYTYPE_OTHER_NAVIGATION": {
                "!doc": "The location data is used for tracking movements of other types of vehicular \nnavigation that are not automobile related.\n",
                "!type": "string"
            },
            "AUTHORIZATION_RESTRICTED": {
                "!doc": "A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value \nindicating that the application is not authorized to use location servies *and*\nthe user cannot change this application's status.\n",
                "!type": "numder"
            },
            "hasCompass": {
                "!doc": "Indicates whether the current device supports a compass.",
                "!type": "bool"
            },
            "frequency": {
                "!doc": "Requested frequency for location updates, in milliseconds.",
                "!type": "numder"
            },
            "AUTHORIZATION_DENIED": {
                "!doc": "A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value \nindicating that the application is not authorized to use location services, *or*\nlocation services are disabled.\n",
                "!type": "numder"
            },
            "ACCURACY_BEST_FOR_NAVIGATION": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request highest possible \naccuracy and combine it with additional sensor data.\n",
                "!type": "numder"
            },
            "forwardGeocoder": {
                "!doc": "Resolves an address to a location.",
                "!type": "fn(address: string, callback: +Callback<ForwardGeocodeResponse>)"
            },
            "Android": {
                "addLocationRule": {
                    "!doc": "Adds and enables the specified location rule.",
                    "!type": "fn(rule: +Titanium.Geolocation.Android.LocationRule)"
                },
                "!doc": "Module for Android-specific geolocation functionality.",
                "removeLocationProvider": {
                    "!doc": "Disables and removes the specified location provider.",
                    "!type": "fn(provider: +Titanium.Geolocation.Android.LocationProvider)"
                },
                "LocationRule": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Geolocation.Android.LocationRule",
                    "!doc": "A location rule to filter the results returned by location providers.",
                    "prototype": {
                        "minAge": {
                            "!doc": "Controls the frequency of location updates.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "maxAge": {
                            "!doc": "Controls the freshness of location updates. Do not forward an update\nunless it is newer than `maxAge` milliseconds.\n",
                            "!type": "numder"
                        },
                        "name": {
                            "!doc": "If specified, this rule only applies to updates generated\nby the specified provider. If `null`, this rule applies to all updates.\n",
                            "!type": "string"
                        },
                        "accuracy": {
                            "!doc": "Minimum accuracy required for a location update.",
                            "!type": "numder"
                        }
                    }
                },
                "addLocationProvider": {
                    "!doc": "Adds and enables the specified location provider, possibly replacing an existing one.",
                    "!type": "fn(provider: +Titanium.Geolocation.Android.LocationProvider)"
                },
                "LocationProvider": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Geolocation.Android.LocationProvider",
                    "!doc": "Represents a source of location information, such as GPS.",
                    "prototype": {
                        "minUpdateTime": {
                            "!doc": "Limits the frequency of location updates to no more than one per `minUpdateTime` seconds.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "name": {
                            "!doc": "Type of location provider: [PROVIDER_GPS](Titanium.Geolocation.PROVIDER_GPS), \n[PROVIDER_NETWORK](Titanium.Geolocation.PROVIDER_NETWORK), or \n[PROVIDER_PASSIVE](Titanium.Geolocation.PROVIDER_PASSIVE).\n",
                            "!type": "string"
                        },
                        "minUpdateDistance": {
                            "!doc": "Don't send a location update unless the location has changed at least `minUpdateDistance` \nmeters since the previous update.\n",
                            "!type": "numder"
                        }
                    }
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Geolocation.Android",
                "removeLocationRule": {
                    "!doc": "Disables and removes the specified location rule.",
                    "!type": "fn(rule: +Titanium.Geolocation.Android.LocationRule)"
                },
                "manualMode": {
                    "!doc": "Set to `true` to enable manual configuration of location updates through this module.",
                    "!type": "bool"
                }
            },
            "ACCURACY_LOW": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request less\naccurate location updates with lower battery usage.\n",
                "!type": "numder"
            },
            "ERROR_REGION_MONITORING_DELAYED": {
                "!doc": "Error code indicating that region monitoring is delayed.",
                "!type": "numder"
            },
            "ACCURACY_KILOMETER": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request location\nupdates accurate to the nearest kilometer.\n",
                "!type": "numder"
            },
            "ACCURACY_HIGH": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request more\naccurate location updates with higher battery usage.\n",
                "!type": "numder"
            },
            "ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION": {
                "!doc": "The location data is used for tracking location changes to the automobile specifically during vehicular navigation.",
                "!type": "string"
            },
            "trackSignificantLocationChange": {
                "!doc": "Indicates if the location changes should be updated only when a significant change \nin location occurs.\n",
                "!type": "bool"
            },
            "reverseGeocoder": {
                "!doc": "Tries to resolve a location to an address.",
                "!type": "fn(latitude: numder, longitude: numder, callback: +Callback<ReverseGeocodeResponse>)"
            },
            "headingFilter": {
                "!doc": "Minimum heading change (in degrees) before a `heading` event is fired.",
                "!type": "numder"
            },
            "AUTHORIZATION_WHEN_IN_USE": {
                "!doc": "A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value \nindicating that the application is authorized to start most location services only while running in the foreground.\n",
                "!type": "numder"
            },
            "PROVIDER_GPS": {
                "!doc": "Specifies the GPS location provider.\n",
                "!type": "string"
            },
            "preferredProvider": {
                "!doc": "Determines the preferred location provider.\n",
                "!type": "string"
            },
            "distanceFilter": {
                "!doc": "The minimum change of position (in meters) before a 'location' event is fired.",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Geolocation",
            "ACCURACY_NEAREST_TEN_METERS": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request location\nupdates accurate to the nearest 10 meters.\n",
                "!type": "numder"
            },
            "accuracy": {
                "!doc": "Specifies the requested accuracy for location updates.",
                "!type": "numder"
            },
            "ACCURACY_THREE_KILOMETERS": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request location\nupdates accurate to the nearest three kilometers.\n",
                "!type": "numder"
            },
            "AUTHORIZATION_ALWAYS": {
                "!doc": "A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value \nindicating that the application is authorized to start location services at any time. This authorization\nincludes the use of all location services, including monitoring regions and significant location changes.\n",
                "!type": "numder"
            },
            "pauseLocationUpdateAutomatically": {
                "!doc": "Indicates whether the location updates may be paused. Available in iOS 6.0 and later.",
                "!type": "bool"
            },
            "ERROR_DENIED": {
                "!doc": "Error code indicating that the user denied access to the location service.",
                "!type": "numder"
            },
            "AUTHORIZATION_UNKNOWN": {
                "!doc": "A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value \nindicating that the authorization state is unknown.\n",
                "!type": "numder"
            },
            "ERROR_REGION_MONITORING_FAILURE": {
                "!doc": "Error code indicating a region monitoring failure.",
                "!type": "numder"
            },
            "ACTIVITYTYPE_FITNESS": {
                "!doc": "The location data is used for tracking any pedestrian-related activity.",
                "!type": "string"
            },
            "ERROR_NETWORK": {
                "!doc": "Error code indicating that the network was unavailable.",
                "!type": "numder"
            },
            "MobileWeb": {
                "forwardGeocoderTimeout": {
                    "!doc": "The time within which forward geocoder requests must succeed, in milliseconds.",
                    "!type": "numder"
                },
                "locationTimeout": {
                    "!doc": "The time within which location requests must succeed, in milliseconds.",
                    "!type": "numder"
                },
                "!doc": "The Mobile Web specific geolocation capabilities.",
                "maximumHeadingAge": {
                    "!doc": "The maximum age of cached locations acceptible for heading requests, in milliseconds.",
                    "!type": "numder"
                },
                "maximumLocationAge": {
                    "!doc": "The maximum age of cached locations acceptible for location requests, in milliseconds.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Geolocation.MobileWeb",
                "reverseGeocoderTimeout": {
                    "!doc": "The time within which reverse geocoder requests must succeed, in milliseconds.",
                    "!type": "numder"
                }
            },
            "ERROR_TIMEOUT": {
                "!doc": "Error indicating a timeout.",
                "!type": "numder"
            },
            "ERROR_HEADING_FAILURE": {
                "!doc": "Error code indicating that the heading could not be determined.",
                "!type": "numder"
            },
            "AUTHORIZATION_AUTHORIZED": {
                "!doc": "A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value \nindicating that the application is authorized to use location services.\n",
                "!type": "numder"
            },
            "ACCURACY_BEST": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request the best\naccuracy available.\n",
                "!type": "numder"
            },
            "locationServicesEnabled": {
                "!doc": "Indicates if the user has enabled or disabled location services for the device (not the application).",
                "!type": "bool"
            },
            "PROVIDER_PASSIVE": {
                "!doc": "Specifies the passive location provider.\n",
                "!type": "string"
            },
            "ERROR_LOCATION_UNKNOWN": {
                "!doc": "Error code indicating that the user's location could not be determined.",
                "!type": "numder"
            },
            "getCurrentPosition": {
                "!doc": "Retrieves the last known location from the device.",
                "!type": "fn(callback: +Callback<LocationResults>)"
            },
            "ACCURACY_HUNDRED_METERS": {
                "!doc": "Use with [accuracy](Titanium.Geolocation.accuracy) to request location\nupdates accurate to the nearest 100 meters.\n",
                "!type": "numder"
            },
            "ACTIVITYTYPE_OTHER": {
                "!doc": "The location data is being used for an unknown activity.",
                "!type": "string"
            },
            "locationServicesAuthorization": {
                "!doc": "Returns an authorization constant indicating if the application has access to location services.",
                "!type": "numder"
            },
            "PROVIDER_NETWORK": {
                "!doc": "Specifies the network location provider.\n",
                "!type": "string"
            },
            "showCalibration": {
                "!doc": "Determines whether the compass calibration UI is shown if needed.",
                "!type": "bool"
            },
            "purpose": {
                "!doc": "Text to display in the permission dialog when requesting location\nservices.\n",
                "!type": "string"
            }
        },
        "Stream": {
            "readAll": {
                "!doc": "Reads all data from the specified [IOStream](Titanium.IOStream).",
                "!type": "fn(sourceStream: +Titanium.IOStream, buffer: +Titanium.Buffer, resultsCallback: +Callback<ReadCallbackArgs>)"
            },
            "MODE_READ": {
                "!doc": "Use with [createStream](Titanium.Stream.createStream) to open a stream in read\nmode.\n",
                "!type": "numder"
            },
            "read": {
                "!doc": "Asynchronously reads data from an [IOStream](Titanium.IOStream) into a buffer.\n",
                "!type": "fn(sourceStream: +Titanium.IOStream, buffer: +Titanium.Buffer, offset: numder, length: numder, resultsCallback: +Callback<ReadCallbackArgs>)"
            },
            "!doc": "Stream module containing stream utility methods.",
            "MODE_WRITE": {
                "!doc": "Use with [createStream](Titanium.Stream.createStream) to open a stream in write\nmode.\n",
                "!type": "numder"
            },
            "write": {
                "!doc": "Asynchronously writes data from a buffer to an [IOStream](Titanium.IOStream).",
                "!type": "fn(outputStream: +Titanium.IOStream, buffer: +Titanium.Buffer, offset: numder, length: numder, resultsCallback: +Callback<WriteCallbackArgs>)"
            },
            "createStream": {
                "!doc": "Creates stream from a `Buffer` or `Blob` object.",
                "!type": "fn(params: +CreateStreamArgs) -> +Titanium.IOStream"
            },
            "pump": {
                "!doc": "Reads data from input stream and passes it to a handler method.",
                "!type": "fn(inputStream: +Titanium.IOStream, handler: +Callback<PumpCallbackArgs>, maxChunkSize: numder, isAsync: bool)"
            },
            "MODE_APPEND": {
                "!doc": "Use with [createStream](Titanium.Stream.createStream) to open a stream in append\nmode.\n",
                "!type": "numder"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Stream",
            "writeStream": {
                "!doc": "Writes all data from an input stream to an output stream.",
                "!type": "fn(inputStream: +Titanium.IOStream, outputStream: +Titanium.IOStream, maxChunkSize: numder, resultsCallback: +Callback<WriteStreamCallbackArgs>)"
            }
        },
        "Locale": {
            "currentLocale": {
                "!doc": "Current system locale, as a combination of ISO 2-letter language and country codes.",
                "!type": "string"
            },
            "formatTelephoneNumber": {
                "!doc": "Formats a telephone number according to the current system locale.",
                "!type": "fn(number: string) -> string"
            },
            "getLocaleCurrencySymbol": {
                "!doc": "Returns the currency symbol for the specified locale.",
                "!type": "fn(locale: string) -> string"
            },
            "getCurrencyCode": {
                "!doc": "Returns the ISO 3-letter currency code for the specified locale.",
                "!type": "fn(locale: string) -> string"
            },
            "currentLanguage": {
                "!doc": "Language of the current system locale, as an ISO 2-letter code.",
                "!type": "string"
            },
            "!doc": "The top level Locale module.",
            "getCurrencySymbol": {
                "!doc": "Returns the currency symbol for the specified currency code.",
                "!type": "fn(currencyCode: string) -> string"
            },
            "currentCountry": {
                "!doc": "Country of the current system locale, as an ISO 2-letter code.",
                "!type": "string"
            },
            "getString": {
                "!doc": "Returns a string, localized according to the current system locale using the appropriate \n`/i18n/LANG/strings.xml` localization file.\n",
                "!type": "fn(key: string, hint: string) -> string"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Locale"
        },
        "App": {
            "forceSplashAsSnapshot": {
                "!doc": "Shows the application's splash screen on app resume.",
                "!type": "bool"
            },
            "!doc": "The top-level App module is mainly used for accessing information about the\napplication at runtime, and for sending or listening for system events.\n",
            "keyboardVisible": {
                "!doc": "Indicates whether or not the soft keyboard is visible.",
                "!type": "bool"
            },
            "analytics": {
                "!doc": "Indicates whether Analytics is enabled, determined by `tiapp.xml`.",
                "!type": "bool"
            },
            "getArguments": {
                "!doc": "Returns the arguments passed to the application on startup.",
                "!type": "fn() -> +launchOptions"
            },
            "EVENT_ACCESSIBILITY_CHANGED": {
                "!doc": "Convenience constant for system event \"accessibilitychanged\".",
                "!type": "string"
            },
            "Android": {
                "appVersionCode": {
                    "!doc": "The version number of the application. \n",
                    "!type": "numder"
                },
                "launchIntent": {
                    "!doc": "Return the intent that was used to launch the application. \n",
                    "!type": "+Titanium.Android.Intent"
                },
                "!doc": "A module used to access Android application resources.",
                "R": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.Android.R",
                    "!doc": "The Titanium binding of the native Android `R` class, giving access to application resources.\n",
                    "prototype": {
                        "!proto": "Titanium.Proxy.prototype"
                    }
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.Android",
                "appVersionName": {
                    "!doc": "The version name of the application. \n",
                    "!type": "string"
                }
            },
            "guid": {
                "!doc": "Application globally-unique ID, determined by `tiapp.xml`.",
                "!type": "string"
            },
            "id": {
                "!doc": "Application ID, from `tiapp.xml`.",
                "!type": "string"
            },
            "proximityState": {
                "!doc": "Indicates the state of the device's proximity sensor, according to the \n<Titanium.App.proximity> event.\n",
                "!type": "bool"
            },
            "fireSystemEvent": {
                "!doc": "Fire a system-level event such as <Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT>.",
                "!type": "fn(eventName: string, param: +Object)"
            },
            "deployType": {
                "!doc": "Build type that reflects how the application was packaged; either `test`, `development` or \n`production`.\n",
                "!type": "string"
            },
            "copyright": {
                "!doc": "Application copyright statement, determined by `tiapp.xml`.",
                "!type": "string"
            },
            "proximityDetection": {
                "!doc": "Determines whether proximity detection is enabled.",
                "!type": "bool"
            },
            "version": {
                "!doc": "Application version, from `tiapp.xml`.",
                "!type": "string"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App",
            "disableNetworkActivityIndicator": {
                "!doc": "Prevents network activity indicator from being displayed.\n",
                "!type": "bool"
            },
            "Properties": {
                "hasProperty": {
                    "!doc": "Indicates whether a property exists.",
                    "!type": "fn(property: string) -> bool"
                },
                "getDouble": {
                    "!doc": "Returns the value of a property as a double (double-precision, floating point) data type.",
                    "!type": "fn(property: string, default: numder) -> numder"
                },
                "getList": {
                    "!doc": "Returns the value of a property as an array data type.",
                    "!type": "fn(property: string, default: [+Object]) -> [+Object]"
                },
                "setObject": {
                    "!doc": "Sets the value of a property as an object data type. The property will be created if it \ndoes not exist.\n",
                    "!type": "fn(property: string, value: +Object)"
                },
                "setDouble": {
                    "!doc": "Sets the value of a property as a double (double-precision, floating point) data type. The \nproperty will be created if it does not exist.\n",
                    "!type": "fn(property: string, value: numder)"
                },
                "getString": {
                    "!doc": "Returns the value of a property as a string data type.",
                    "!type": "fn(property: string, default: string) -> string"
                },
                "listProperties": {
                    "!doc": "Returns an array of property names.",
                    "!type": "fn() -> [+Object]"
                },
                "!doc": "The App Properties module is used for storing application-related data in property/value pairs \nthat persist beyond application sessions and device power cycles.\n",
                "setString": {
                    "!doc": "Sets the value of a property as a string data type. The property will be created if it \ndoes not exist.\n",
                    "!type": "fn(property: string, value: string)"
                },
                "getBool": {
                    "!doc": "Returns the value of a property as a boolean data type.",
                    "!type": "fn(property: string, default: bool) -> bool"
                },
                "setInt": {
                    "!doc": "Sets the value of a property as an integer data type. The property will be created if it \ndoes not exist.\n",
                    "!type": "fn(property: string, value: numder)"
                },
                "setList": {
                    "!doc": "Sets the value of a property as an array data type. The property will be created if it \ndoes not exist.\n",
                    "!type": "fn(property: string, value: [+Object])"
                },
                "getObject": {
                    "!doc": "Returns the value of a property as an object.",
                    "!type": "fn(property: string, default: +Object) -> +Object"
                },
                "getInt": {
                    "!doc": "Returns the value of a property as an integer data type.\n",
                    "!type": "fn(property: string, default: numder) -> numder"
                },
                "removeProperty": {
                    "!doc": "Removes a property if it exists, or does nothing otherwise.",
                    "!type": "fn(property: string)"
                },
                "setBool": {
                    "!doc": "Sets the value of a property as a boolean data type. The property will be created if it \ndoes not exist.\n",
                    "!type": "fn(property: string, value: bool)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.Properties"
            },
            "description": {
                "!doc": "Application description, determined by `tiapp.xml`.",
                "!type": "string"
            },
            "iOS": {
                "USER_NOTIFICATION_TYPE_BADGE": {
                    "!doc": "The application may badge its icon upon a notification being received.\nUse with the [types](UserNotificationSettings.types) property.\n",
                    "!type": "numder"
                },
                "createUserDefaults": {
                    "!doc": "Creates and returns an instance of Titanium.App.iOS.UserDefaults.\n",
                    "!type": "fn(parameters: +Dictionary<Titanium.App.iOS.UserDefaults>) -> +Titanium.App.iOS.UserDefaults"
                },
                "cancelAllLocalNotifications": {
                    "!doc": "Cancels all scheduled local notifications.",
                    "!type": "fn()"
                },
                "USER_NOTIFICATION_TYPE_NONE": {
                    "!doc": "The application may not present any UI upon a notification being received.\nUse with the [types](UserNotificationSettings.types) property.\n",
                    "!type": "numder"
                },
                "!doc": "The top-level App iOS module, available only to iOS devices, that includes the facilities to \ncreate and manage local notifications and background services.\n",
                "BACKGROUNDFETCHINTERVAL_NEVER": {
                    "!doc": "Use with [setMinimumBackgroundFetchInterval](Titanium.App.iOS.setMinimumBackgroundFetchInterval) method.\nUsed to specify a fetch interval large enough to prevent fetch operations from occurring.\n",
                    "!type": "numder"
                },
                "UserDefaults": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.iOS.UserDefaults",
                    "!doc": "The UserDefaults module is used for storing application-related data in property/value pairs \nthat persist beyond application sessions and device power cycles. UserDefaults allows the suiteName\nof the UserDefaults to be specified at creation time.\n",
                    "prototype": {
                        "!proto": "Titanium.App.Properties.prototype",
                        "suiteName": {
                            "!doc": "Sets the name of the suite to be used to access UserDefaults.",
                            "!type": "string"
                        }
                    }
                },
                "applicationOpenSettingsURL": {
                    "!doc": "Returns a URL to open the app's settings.",
                    "!type": "string"
                },
                "registerUserNotificationSettings": {
                    "!doc": "Registers the application to use the requested notification types and categories\n(for devices running iOS 8 or later).\n",
                    "!type": "fn(params: +UserNotificationSettings)"
                },
                "USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND": {
                    "!doc": "The action will launch the application and execute in the foreground.\nUse with the [activationMode](Titanium.App.iOS.UserNotificationAction.activationMode) property.\n",
                    "!type": "numder"
                },
                "UserNotificationCategory": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.iOS.UserNotificationCategory",
                    "!doc": "A set of notification actions to associate with a notification.",
                    "prototype": {
                        "actionsForMinimalContext": {
                            "!doc": "Array of notification actions to display for non-dialog-style notification.",
                            "!type": "+Array<Titanium.App.iOS.UserNotificationAction>"
                        },
                        "identifier": {
                            "!doc": "Identifier for this category.",
                            "!type": "string"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "actionsForDefaultContext": {
                            "!doc": "Array of notification actions to associate with the group.",
                            "!type": "+Array<Titanium.App.iOS.UserNotificationAction>"
                        }
                    }
                },
                "BackgroundService": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.iOS.BackgroundService",
                    "!doc": "A service that runs when the application is placed in the background.",
                    "prototype": {
                        "url": {
                            "!doc": "A local URL to a JavaScript file containing the code to run in the background.",
                            "!type": "string"
                        },
                        "unregister": {
                            "!doc": "Unregisters the background service.",
                            "!type": "fn()"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "stop": {
                            "!doc": "Stops the service from running during the current background session to conserve resources.",
                            "!type": "fn()"
                        }
                    }
                },
                "endBackgroundHandler": {
                    "!doc": "Marks the end of the app execution after initiating the download operation. Available only on iOS 7 and later.",
                    "!type": "fn(handlerID: string)"
                },
                "registerBackgroundService": {
                    "!doc": "Registers a service to run when the application is placed in the background.",
                    "!type": "fn(params: +Dictionary) -> +Titanium.App.iOS.BackgroundService"
                },
                "cancelLocalNotification": {
                    "!doc": "Cancels a local notification.",
                    "!type": "fn(id: numder)"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.iOS",
                "EVENT_ACCESSIBILITY_SCREEN_CHANGED": {
                    "!doc": "Convenience constant for system event \"accessibilityscreenchanged\".",
                    "!type": "string"
                },
                "currentUserNotificationSettings": {
                    "!doc": "Notification types and user notification categories the application is registered to use\n(available on iOS 8 and later).\n",
                    "!type": "+UserNotificationSettings"
                },
                "EVENT_ACCESSIBILITY_LAYOUT_CHANGED": {
                    "!doc": "Convenience constant for system event \"accessibilitylayoutchanged\".",
                    "!type": "string"
                },
                "BACKGROUNDFETCHINTERVAL_MIN": {
                    "!doc": "Use with [setMinimumBackgroundFetchInterval](Titanium.App.iOS.setMinimumBackgroundFetchInterval) method.\nSpecifies the smallest fetch interval supported by the system.\n",
                    "!type": "numder"
                },
                "setMinimumBackgroundFetchInterval": {
                    "!doc": "Specifies the minimum amount of time that must elapse between background fetch operations.\nAvailable only on iOS 7 and later.\n",
                    "!type": "fn(fetchInterval: numder)"
                },
                "USER_NOTIFICATION_TYPE_SOUND": {
                    "!doc": "The application may play a sound upon a notification being received.\nUse with the [types](UserNotificationSettings.types) property.\n",
                    "!type": "numder"
                },
                "scheduleLocalNotification": {
                    "!doc": "Schedule a local notification.",
                    "!type": "fn(params: +NotificationParams) -> +Titanium.App.iOS.LocalNotification"
                },
                "UserNotificationAction": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.iOS.UserNotificationAction",
                    "!doc": "An action the user selects in response to an interactive notification.",
                    "prototype": {
                        "destructive": {
                            "!doc": "Set to true if the action causes destructive behavior to the user's data or the application.",
                            "!type": "bool"
                        },
                        "title": {
                            "!doc": "Title of the button displayed in the notification.",
                            "!type": "string"
                        },
                        "authenticationRequired": {
                            "!doc": "Set to true if the action requires the device to be unlocked.",
                            "!type": "bool"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "identifier": {
                            "!doc": "Identifier for this action. Used to identify the action the user pressed.",
                            "!type": "string"
                        },
                        "activationMode": {
                            "!doc": "Selects how to activate the application.",
                            "!type": "numder"
                        }
                    }
                },
                "USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND": {
                    "!doc": "The action will execute in background.  Use with the\n[activationMode](Titanium.App.iOS.UserNotificationAction.activationMode) property.\n",
                    "!type": "numder"
                },
                "USER_NOTIFICATION_TYPE_ALERT": {
                    "!doc": "The application may display an alert upon a notification being received.\nUse with the [types](UserNotificationSettings.types) property.\n",
                    "!type": "numder"
                },
                "LocalNotification": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App.iOS.LocalNotification",
                    "!doc": "A local notification to alert the user of new or pending application information.",
                    "prototype": {
                        "cancel": {
                            "!doc": "Cancels the pending notification.",
                            "!type": "fn()"
                        },
                        "!proto": "Titanium.Proxy.prototype"
                    }
                }
            },
            "EVENT_ACCESSIBILITY_ANNOUNCEMENT": {
                "!doc": "Convenience constant for system event \"accessibilityannouncement\".",
                "!type": "string"
            },
            "accessibilityEnabled": {
                "!doc": "Indicates whether Accessibility is enabled by the system.",
                "!type": "bool"
            },
            "publisher": {
                "!doc": "Application publisher, from `tiapp.xml`.",
                "!type": "string"
            },
            "installId": {
                "!doc": "The install ID for this application.",
                "!type": "string"
            },
            "name": {
                "!doc": "Application name, determined by `tiapp.xml`.",
                "!type": "string"
            },
            "url": {
                "!doc": "Application URL, from `tiapp.xml`.",
                "!type": "string"
            },
            "idleTimerDisabled": {
                "!doc": "Determines whether the screen is locked when the device is idle.",
                "!type": "bool"
            },
            "sessionId": {
                "!doc": "Unique session identifier for the current continuous run of the application.",
                "!type": "string"
            }
        },
        "Module": {
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Module",
            "!doc": "Base type for all Titanium modules.",
            "prototype": {
                "!proto": "Titanium.Proxy.prototype"
            }
        },
        "Analytics": {
            "featureEvent": {
                "!doc": "Sends a feature event for this application session.",
                "!type": "fn(name: string, data: +Object)"
            },
            "!doc": "Used for transmitting developer-defined Analytics events to the Appcelerator Analytics product. \n",
            "navEvent": {
                "!doc": "Sends a navigation event for this application session. \n**Not displayed in Analytics UI**.\n",
                "!type": "fn(from: string, to: string, name: string, data: +Object)"
            },
            "settingsEvent": {
                "!doc": "Sends a settings event for this application session.\n**Not displayed in Analytics UI**.\n",
                "!type": "fn(name: string, data: +Object)"
            },
            "lastEvent": {
                "!doc": "JSON representation of the last analytics event generated.",
                "!type": "string"
            },
            "userEvent": {
                "!doc": "Sends a user event for this application session. **Not displayed in Analytics UI**.",
                "!type": "fn(name: string, data: +Object)"
            },
            "addEvent": {
                "!doc": "Sends a generic event for this application session.\n**Not displayed in Analytics UI**.\n",
                "!type": "fn(type: string, name: string, data: +Object)"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Analytics",
            "timedEvent": {
                "!doc": "Send a timed event for this application session.\n**Not displayed in Analytics UI**.\n",
                "!type": "fn(name: string, start: +Date, stop: +Date, duration: numder, data: +Object)"
            }
        },
        "API": {
            "info": {
                "!doc": "Logs messages with an `info` severity-level.",
                "!type": "fn(message: [string])"
            },
            "log": {
                "!doc": "Logs messages with the specified severity-level.",
                "!type": "fn(level: string, message: [string])"
            },
            "timestamp": {
                "!doc": "Logs messages with a `timestamp` severity-level, prefixed with a timestamp float number \nrepresenting the number of seconds since January 1st, 2001.\n",
                "!type": "fn(message: [string])"
            },
            "!doc": "The top-level API module, containing methods to output messages to the system log.\n",
            "trace": {
                "!doc": "Logs messages with a `trace` severity-level.",
                "!type": "fn(message: [string])"
            },
            "warn": {
                "!doc": "Logs messages with a `warn` severity-level.",
                "!type": "fn(message: [string])"
            },
            "debug": {
                "!doc": "Logs messages with a `debug` severity-level.",
                "!type": "fn(message: [string])"
            },
            "error": {
                "!doc": "Logs messages with an `error` severity-level.",
                "!type": "fn(message: [string])"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.API"
        },
        "UI": {
            "createCloudReviewsResponse": {
                "!type": "fn() -> +CloudReviewsResponse"
            },
            "DashboardView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.DashboardView",
                "!doc": "A dashboard view is an iOS Springboard-like view of <Titanium.UI.DashboardItem> items that may \nbe deleted and reordered by the user using its built-in edit mode.\n",
                "prototype": {
                    "columnCount": {
                        "!doc": "The number of columns of items in the view.",
                        "!type": "numder"
                    },
                    "startEditing": {
                        "!doc": "Enable edit mode.",
                        "!type": "fn()"
                    },
                    "wobble": {
                        "!doc": "Determines whether the wobble visual editing cue is enabled in edit mode.",
                        "!type": "bool"
                    },
                    "editable": {
                        "!doc": "Determines whether edit mode is activated by a longpress of an item.",
                        "!type": "bool"
                    },
                    "stopEditing": {
                        "!doc": "Disable edit mode.",
                        "!type": "fn()"
                    },
                    "rowCount": {
                        "!doc": "The number of rows of items in the view.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "data": {
                        "!doc": "Items to display in this view.",
                        "!type": "+Array<Titanium.UI.DashboardItem>"
                    }
                }
            },
            "ATTRIBUTE_LINK": {
                "!doc": "Use with <Attribute.type> to create a link.\n",
                "!type": "numder"
            },
            "MaskedImage": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.MaskedImage",
                "!doc": "A control that displays an image composited with a background image or color.",
                "prototype": {
                    "tint": {
                        "!doc": "Color to combine with the image, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "image": {
                        "!doc": "Image drawn as the Foreground image.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "mask": {
                        "!doc": "Image drawn as the background image.",
                        "!type": "string"
                    },
                    "mode": {
                        "!doc": "Blend mode to use to combine layers.",
                        "!type": "numder"
                    }
                }
            },
            "BLEND_MODE_NORMAL": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createCloudPushNotificationsQueryResponse": {
                "!type": "fn() -> +CloudPushNotificationsQueryResponse"
            },
            "RETURNKEY_DONE": {
                "!doc": "Set the return key text to \"Done\".",
                "!type": "numder"
            },
            "INPUT_BUTTONMODE_ONBLUR": {
                "!doc": "Show buttons on the input field when it loses focus.",
                "!type": "numder"
            },
            "createCodec": {
                "!type": "fn() -> +Titanium.Codec"
            },
            "TextField": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TextField",
                "!doc": "A single line text field.",
                "prototype": {
                    "paddingLeft": {
                        "!doc": "Left padding of this text field.",
                        "!type": "numder"
                    },
                    "rightButton": {
                        "!doc": "Right button view.",
                        "!type": "+Object"
                    },
                    "attributedHintText": {
                        "!doc": "Hint text attributed string.",
                        "!type": "+Titanium.UI.AttributedString"
                    },
                    "returnKeyType": {
                        "!doc": "Specifies the text to display on the keyboard `Return` key when this field is focused.",
                        "!type": "numder"
                    },
                    "focus": {
                        "!doc": "Forces the field to gain focus.",
                        "!type": "fn()"
                    },
                    "hasText": {
                        "!doc": "Returns `true` if this text field contains text.",
                        "!type": "fn() -> bool"
                    },
                    "passwordMask": {
                        "!doc": "Obscure the input text from the user.",
                        "!type": "bool"
                    },
                    "rightButtonMode": {
                        "!doc": "Determines when to display the right button view.",
                        "!type": "numder"
                    },
                    "remove": {
                        "!type": "fn()"
                    },
                    "font": {
                        "!doc": "Font to use for text.",
                        "!type": "+Font"
                    },
                    "rightButtonPadding": {
                        "!doc": "Padding between the right button and the edge of the field.",
                        "!type": "numder"
                    },
                    "autocorrect": {
                        "!doc": "Determines whether to automatically correct text entered into this text field.\n",
                        "!type": "bool"
                    },
                    "keyboardToolbarHeight": {
                        "!doc": "Height of the keyboard toolbar if keyboardToolbar is an array.",
                        "!type": "numder"
                    },
                    "clearButtonMode": {
                        "!doc": "Determines when the clear button is displayed.",
                        "!type": "numder"
                    },
                    "color": {
                        "!doc": "Color of the text in this text field, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "enableReturnKey": {
                        "!doc": "Determines whether the return key is enabled automatically when there is text in this text \nfield.\n",
                        "!type": "bool"
                    },
                    "minimumFontSize": {
                        "!doc": "Minimum size of the font when the font is sized based on the contents.  Enables font \nscaling to fit.\n",
                        "!type": "numder"
                    },
                    "keyboardToolbar": {
                        "!doc": "Array of toolbar button objects or a [toolbar](Titanium.UI.iOS.Toolbar) to be used when the \nkeyboard is displayed.\n",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "selection": {
                        "!doc": "Returns the currently selected text of the text field.",
                        "!type": "+textFieldSelectedParams"
                    },
                    "leftButtonPadding": {
                        "!doc": "Padding between the left button and the edge of the field.",
                        "!type": "numder"
                    },
                    "ellipsize": {
                        "!doc": "Determines whether an ellipsis (`...`) should be used to indicate truncated text.",
                        "!type": "bool"
                    },
                    "suppressReturn": {
                        "!doc": "Determines whether the return key should be suppressed during entry.",
                        "!type": "bool"
                    },
                    "keyboardToolbarColor": {
                        "!doc": "Color of the keyboard toolbar if keyboardToolbar is an array, as a color name or hex triplet.\n",
                        "!type": "string"
                    },
                    "blur": {
                        "!doc": "Forces the field to lose focus.",
                        "!type": "fn()"
                    },
                    "editable": {
                        "!doc": "Determines whether this field can be edited.",
                        "!type": "bool"
                    },
                    "clearOnEdit": {
                        "!doc": "Determines whether the value of this text field should be cleared when it is focused.",
                        "!type": "bool"
                    },
                    "hintText": {
                        "!doc": "Hint text to display when the field is empty.",
                        "!type": "string"
                    },
                    "maxLength": {
                        "!doc": "Maximum length of text field input.",
                        "!type": "numder"
                    },
                    "textAlign": {
                        "!doc": "Text alignment within this text field.",
                        "!type": "string"
                    },
                    "autoLink": {
                        "!doc": "Automatically convert text to clickable links.",
                        "!type": "numder"
                    },
                    "verticalAlign": {
                        "!doc": "Vertical alignment within this text field.",
                        "!type": "numder"
                    },
                    "setSelection": {
                        "!doc": "Selects the text in range (start, end).",
                        "!type": "fn(start: numder, end: numder)"
                    },
                    "keyboardType": {
                        "!doc": "Keyboard type to display when this text field is focused.",
                        "!type": "numder"
                    },
                    "appearance": {
                        "!doc": "Determines the appearance of the keyboard displayed when this field is focused.",
                        "!type": "numder"
                    },
                    "leftButton": {
                        "!doc": "Left button view to display in the `TextField`.",
                        "!type": "+Object"
                    },
                    "value": {
                        "!doc": "Value of this text field, which may be set programmatically and modified by the user.",
                        "!type": "string"
                    },
                    "hintTextColor": {
                        "!doc": "Hint text color.",
                        "!type": "string"
                    },
                    "autocapitalization": {
                        "!doc": "Determines how text is capitalized during typing.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "leftButtonMode": {
                        "!doc": "Determines when to display the left button view.",
                        "!type": "numder"
                    },
                    "borderStyle": {
                        "!doc": "Border style for the field.",
                        "!type": "numder"
                    },
                    "paddingRight": {
                        "!doc": "Right padding of this text field.",
                        "!type": "numder"
                    },
                    "attributedString": {
                        "!doc": "TextField attributed string.",
                        "!type": "+Titanium.UI.AttributedString"
                    }
                }
            },
            "createListViewIndexEntry": {
                "!type": "fn() -> +ListViewIndexEntry"
            },
            "createDatabase": {
                "!type": "fn() -> +Titanium.Database"
            },
            "createPhotos": {
                "!type": "fn() -> +Modules.Cloud.Photos"
            },
            "BLEND_MODE_HUE": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createMediaQueryInfoType": {
                "!type": "fn() -> +MediaQueryInfoType"
            },
            "createCloudPhotoCollectionsPhotosResponse": {
                "!type": "fn() -> +CloudPhotoCollectionsPhotosResponse"
            },
            "createPickerColumn": {
                "!type": "fn() -> +Titanium.UI.PickerColumn"
            },
            "LIST_ACCESSORY_TYPE_CHECKMARK": {
                "!doc": "Displays a checkmark on the right side of an item in a list view.",
                "!type": "numder"
            },
            "ATTRIBUTE_OBLIQUENESS": {
                "!doc": "Use with <Attribute.type> to skew the text.\n",
                "!type": "numder"
            },
            "WebView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.WebView",
                "!doc": "The web view allows you to open an HTML5 based view which can load either local or remote content. \n",
                "prototype": {
                    "pause": {
                        "!doc": "Pauses native webview plugins.",
                        "!type": "fn()"
                    },
                    "enableZoomControls": {
                        "!doc": "If `true`, zoom controls are enabled.",
                        "!type": "bool"
                    },
                    "stopLoading": {
                        "!doc": "Stops loading a currently loading page.",
                        "!type": "fn(hardStop: bool)"
                    },
                    "scalesPageToFit": {
                        "!doc": "If `true`, scale contents to fit the web view.",
                        "!type": "bool"
                    },
                    "setHtml": {
                        "!doc": "Sets the value of [html](Titanium.UI.WebView.html) property.",
                        "!type": "fn(html: +Object, options: +Dictionary)"
                    },
                    "lightTouchEnabled": {
                        "!doc": "Enables using light touches to make a selection and activate mouseovers.",
                        "!type": "bool"
                    },
                    "hideLoadIndicator": {
                        "!doc": "Hides activity indicator when loading remote URL.",
                        "!type": "bool"
                    },
                    "userAgent": {
                        "!doc": "The User-Agent header used by the web view when requesting content.",
                        "!type": "string"
                    },
                    "canGoBack": {
                        "!doc": "Returns `true` if the web view can go back in its history list.",
                        "!type": "fn() -> bool"
                    },
                    "loading": {
                        "!doc": "Indicates if the webview is loading content.",
                        "!type": "bool"
                    },
                    "reload": {
                        "!doc": "Reloads the current webpage.",
                        "!type": "fn()"
                    },
                    "goForward": {
                        "!doc": "Goes forward one entry in this web view's history list, if possible.",
                        "!type": "fn()"
                    },
                    "goBack": {
                        "!doc": "Goes back one entry in the web view's history list, to the previous page.",
                        "!type": "fn()"
                    },
                    "scrollsToTop": {
                        "!doc": "Controls whether the scroll-to-top gesture is effective.",
                        "!type": "bool"
                    },
                    "html": {
                        "!doc": "HTML content of this web view.",
                        "!type": "string"
                    },
                    "handlePlatformUrl": {
                        "!doc": "Lets the webview handle platform supported urls",
                        "!type": "bool"
                    },
                    "enableJavascriptInterface": {
                        "!doc": "Enable adding javascript interfaces internally to webview prior to JELLY_BEAN_MR1 (Android 4.2)",
                        "!type": "bool"
                    },
                    "resume": {
                        "!doc": "Resume native webview plugins.",
                        "!type": "fn()"
                    },
                    "onCreateWindow": {
                        "!doc": "Callback function called when there is a request for the application to create a new window\nto host new content.\n",
                        "!type": "+Callback<Object>"
                    },
                    "release": {
                        "!doc": "Releases memory when the web view is no longer needed.",
                        "!type": "fn()"
                    },
                    "willHandleTouches": {
                        "!doc": "Explicitly specifies if this web view handles touches.",
                        "!type": "bool"
                    },
                    "canGoForward": {
                        "!doc": "Returns `true` if the web view can go forward in its history list.",
                        "!type": "fn() -> bool"
                    },
                    "pluginState": {
                        "!doc": "Determines how to treat content that requires plugins in this web view.",
                        "!type": "numder"
                    },
                    "setBasicAuthentication": {
                        "!doc": "Sets the basic authentication for this web view to use on subsequent URl requests.\n",
                        "!type": "fn(username: string, password: string)"
                    },
                    "overScrollMode": {
                        "!doc": "Determines the behavior when the user overscrolls the view.",
                        "!type": "numder"
                    },
                    "data": {
                        "!doc": "Web content to load.",
                        "!type": "+Titanium.Blob"
                    },
                    "evalJS": {
                        "!doc": "Evaluates a JavaScript expression inside the context of the web view and\noptionally, returns a result.\n",
                        "!type": "fn(code: string) -> string"
                    },
                    "repaint": {
                        "!doc": "Forces the web view to repaint its contents.",
                        "!type": "fn()"
                    },
                    "url": {
                        "!doc": "URL to the web document.",
                        "!type": "string"
                    },
                    "showScrollbars": {
                        "!doc": "If `true`, scrollbars are displayed if content is larger than the web view.",
                        "!type": "bool"
                    },
                    "disableBounce": {
                        "!doc": "Determines whether the view will bounce when scrolling to the edge of the scrollable region.\n",
                        "!type": "bool"
                    },
                    "cacheMode": {
                        "!doc": "Determines how a cache is used in this web view.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "ignoreSslError": {
                        "!doc": "Controls whether to ignore invalid SSL certificates or not.",
                        "!type": "bool"
                    }
                }
            },
            "createtextAreaSelectedParams": {
                "!type": "fn() -> +textAreaSelectedParams"
            },
            "createSocialIntegrations": {
                "!type": "fn() -> +Modules.Cloud.SocialIntegrations"
            },
            "KEYBOARD_NAMEPHONE_PAD": {
                "!doc": "Use a keyboard suitable for entering names and phone numbers, with the pad keyboard layout.",
                "!type": "numder"
            },
            "createProgressIndicator": {
                "!type": "fn() -> +Titanium.UI.Android.ProgressIndicator"
            },
            "createWindow": {
                "!type": "fn() -> +Titanium.UI.Window"
            },
            "TEXT_VERTICAL_ALIGNMENT_TOP": {
                "!doc": "Align text to the top of the view.",
                "!type": "numder"
            },
            "AlertDialog": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.AlertDialog",
                "!doc": "An alert dialog is a modal view that includes an optional title, a message and buttons, \npositioned in the middle of the display.\n",
                "prototype": {
                    "style": {
                        "!doc": "The style for the alert dialog.",
                        "!type": "numder"
                    },
                    "ok": {
                        "!doc": "Text for the `OK` button.",
                        "!type": "string"
                    },
                    "buttonNames": {
                        "!doc": "Name of each button to create.",
                        "!type": "[string]"
                    },
                    "title": {
                        "!doc": "Title of the dialog.",
                        "!type": "string"
                    },
                    "show": {
                        "!doc": "Shows this dialog.",
                        "!type": "fn()"
                    },
                    "androidView": {
                        "!doc": "View to load inside the message area, to create a custom layout.",
                        "!type": "+Titanium.UI.View"
                    },
                    "titleid": {
                        "!doc": "Key identifying a string in the locale file to use for the title text.",
                        "!type": "string"
                    },
                    "persistent": {
                        "!doc": "Boolean value indicating if the alert dialog should only be cancelled by user gesture or by hide method.",
                        "!type": "bool"
                    },
                    "okid": {
                        "!doc": "Key identifying a string in the locale file to use for the `ok` text.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "messageid": {
                        "!doc": "Key identifying a string in the locale file to use for the message text.",
                        "!type": "string"
                    },
                    "cancel": {
                        "!doc": "Index to define the cancel button.",
                        "!type": "numder"
                    },
                    "hide": {
                        "!doc": "Hides this dialog.",
                        "!type": "fn()"
                    },
                    "message": {
                        "!doc": "Dialog message.",
                        "!type": "string"
                    }
                }
            },
            "createhideParams": {
                "!type": "fn() -> +hideParams"
            },
            "createSnapBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.SnapBehavior"
            },
            "createGradient": {
                "!type": "fn() -> +Gradient"
            },
            "createPushNotificationConfig": {
                "!type": "fn() -> +PushNotificationConfig"
            },
            "createCloudPushNotificationConfig": {
                "!type": "fn() -> +CloudPushNotificationConfig"
            },
            "BLEND_MODE_PLUS_DARKER": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createMaskedImage": {
                "!type": "fn() -> +Titanium.UI.MaskedImage"
            },
            "Tab": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Tab",
                "!doc": "A tab instance for a [TabGroup](Titanium.UI.TabGroup).",
                "prototype": {
                    "backgroundSelectedImage": {},
                    "iconIsMask": {
                        "!doc": "Defines if the icon property of the tab must be used as a mask. This property is applicable on iOS 7 and greater.",
                        "!type": "bool"
                    },
                    "backgroundFocusedColor": {
                        "!doc": "Sets the color of the tab when it is focused."
                    },
                    "backgroundDisabledColor": {},
                    "activeIcon": {
                        "!doc": "Icon URL for this tab when active.",
                        "!type": "string"
                    },
                    "open": {
                        "!doc": "Opens a new window.",
                        "!type": "fn(window: +Titanium.UI.Window, options: +Object)"
                    },
                    "title": {
                        "!doc": "Title for this tab.",
                        "!type": "string"
                    },
                    "window": {
                        "!doc": "Root-level tab window.  All tabs must have at least one root-level tab window.",
                        "!type": "+Titanium.UI.Window"
                    },
                    "titleid": {
                        "!doc": "Key identifying a string from the locale file to use for the tab title. Only one of `title` or `titleid` should be specified.",
                        "!type": "string"
                    },
                    "backgroundFocusedImage": {},
                    "activeIconIsMask": {
                        "!doc": "Defines if the active icon property of the tab must be used as a mask. This property is applicable on iOS 7 and greater.",
                        "!type": "bool"
                    },
                    "touchEnabled": {},
                    "!proto": "Titanium.UI.View.prototype",
                    "backgroundDisabledImage": {},
                    "backgroundColor": {
                        "!doc": "Sets the color of the tab when it is inactive."
                    },
                    "close": {
                        "!doc": "Closes the top-level window for this tab.",
                        "!type": "fn(window: +Titanium.UI.Window, options: +Object)"
                    },
                    "active": {
                        "!doc": "`true` if this tab is active, `false` if it is not. \n",
                        "!type": "bool"
                    },
                    "backgroundImage": {},
                    "badge": {
                        "!doc": "Badge value for this tab. `null` indicates no badge.",
                        "!type": "string"
                    },
                    "setWindow": {
                        "!doc": "Sets the root window that appears in the tab.",
                        "!type": "fn(window: +Titanium.UI.Window)"
                    },
                    "icon": {
                        "!doc": "Icon URL for this tab.",
                        "!type": "string"
                    }
                }
            },
            "TEXT_AUTOCAPITALIZATION_SENTENCES": {
                "!doc": "Use sentence-style auto-capitalization in the input field.",
                "!type": "numder"
            },
            "createTableViewSection": {
                "!type": "fn() -> +Titanium.UI.TableViewSection"
            },
            "Label": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Label",
                "!doc": "A text label, with optional background image.",
                "prototype": {
                    "backgroundPaddingLeft": {
                        "!doc": "Number of pixels to extend the background image past the label on the left.",
                        "!type": "numder"
                    },
                    "color": {
                        "!doc": "Color of the label text, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "text": {
                        "!doc": "Label text.",
                        "!type": "string"
                    },
                    "highlightedColor": {
                        "!doc": "Color of the label when in the highlighted state, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "backgroundPaddingTop": {
                        "!doc": "Number of pixels to extend the background image past the label on the top.",
                        "!type": "numder"
                    },
                    "font": {
                        "!doc": "Font to use for the label text.",
                        "!type": "+Font"
                    },
                    "includeFontPadding": {
                        "!doc": "Includes extra top and bottom padding to make room for accents that go above normal ascent and descent.",
                        "!type": "bool"
                    },
                    "shadowColor": {
                        "!doc": "Shadow color of the [text](Titanium.UI.Label.text), as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "shadowRadius": {
                        "!doc": "Shadow radius of the [text](Titanium.UI.Label.text).",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "minimumFontSize": {
                        "!doc": "Minimum font size when the font is sized based on the contents.",
                        "!type": "numder"
                    },
                    "ellipsize": {
                        "!doc": "Turn on/off the addition of ellipses at the end of the label if the text is too large to fit.\n",
                        "!type": "bool"
                    },
                    "textid": {
                        "!doc": "Key identifying a string from the locale file to use for the label text.",
                        "!type": "string"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "shadowOffset": {
                        "!doc": "Shadow offset of the [text](Titanium.UI.Label.text), as a dictionary with the properties `x` and `y`.",
                        "!type": "+Dictionary"
                    },
                    "textAlign": {
                        "!doc": "Text alignment.",
                        "!type": "string"
                    },
                    "autoLink": {
                        "!doc": "Automatically convert certain text items in the label to clickable links.",
                        "!type": "numder"
                    },
                    "verticalAlign": {
                        "!doc": "Vertical text alignment, specified using one of the  vertical alignment constants\nfrom <Titanium.UI>.\n",
                        "!type": "numder"
                    },
                    "backgroundPaddingRight": {
                        "!doc": "Number of pixels to extend the background image past the label on the right.",
                        "!type": "numder"
                    },
                    "backgroundPaddingBottom": {
                        "!doc": "Number of pixels to extend the background image past the label on the bottom.",
                        "!type": "numder"
                    },
                    "remove": {
                        "!type": "fn()"
                    },
                    "wordWrap": {
                        "!doc": "Enable or disable word wrapping in the label.",
                        "!type": "bool"
                    },
                    "html": {
                        "!doc": "Simple HTML formatting.",
                        "!type": "string"
                    },
                    "attributedString": {
                        "!doc": "Specify an attributed string for the label.",
                        "!type": "+Titanium.UI.AttributedString"
                    }
                }
            },
            "createErrorResponse": {
                "!type": "fn() -> +ErrorResponse"
            },
            "createChats": {
                "!type": "fn() -> +Modules.Cloud.Chats"
            },
            "createLoginButton": {
                "!type": "fn() -> +Titanium.Facebook.LoginButton"
            },
            "createReverseGeocodeResponse": {
                "!type": "fn() -> +ReverseGeocodeResponse"
            },
            "createiPad": {
                "!type": "fn() -> +Titanium.UI.iPad"
            },
            "createBroadcastReceiver": {
                "!type": "fn() -> +Titanium.Android.BroadcastReceiver"
            },
            "createCloudPostsResponse": {
                "!type": "fn() -> +CloudPostsResponse"
            },
            "createiPhone": {
                "!type": "fn() -> +Titanium.UI.iPhone"
            },
            "createViewAttachmentBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.ViewAttachmentBehavior"
            },
            "createUsers": {
                "!type": "fn() -> +Modules.Cloud.Users"
            },
            "ATTRIBUTE_KERN": {
                "!doc": "Use with <Attribute.type> to specify kerning (space between characters).\n",
                "!type": "numder"
            },
            "BLEND_MODE_LUMINOSITY": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "ANIMATION_CURVE_LINEAR": {
                "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that proceeds\nat a constant rate.\n",
                "!type": "numder"
            },
            "createDecodeNumberDict": {
                "!type": "fn() -> +DecodeNumberDict"
            },
            "createtransitionAnimationParam": {
                "!type": "fn() -> +transitionAnimationParam"
            },
            "createRefreshControl": {
                "!type": "fn() -> +Titanium.UI.RefreshControl"
            },
            "createPosts": {
                "!type": "fn() -> +Modules.Cloud.Posts"
            },
            "LIST_ACCESSORY_TYPE_NONE": {
                "!doc": "Do not display anything on the right side of an item in a list view.",
                "!type": "numder"
            },
            "createFacebookRESTResponsev1": {
                "!type": "fn() -> +FacebookRESTResponsev1"
            },
            "NOTIFICATION_DURATION_LONG": {
                "!doc": "Specifies a long duration for an Android Toast notification (<Titanium.UI.Notification>).",
                "!type": "numder"
            },
            "createName": {
                "!type": "fn() -> +Titanium.Namespace.Name"
            },
            "createNotificationManager": {
                "!type": "fn() -> +Titanium.Android.NotificationManager"
            },
            "createListDataItem": {
                "!type": "fn() -> +ListDataItem"
            },
            "ANIMATION_CURVE_EASE_IN": {
                "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts\nslowly and speeds up.\n",
                "!type": "numder"
            },
            "NOTIFICATION_DURATION_SHORT": {
                "!doc": "Specifies a short duration for an Android Toast notification (<Titanium.UI.Notification>).",
                "!type": "numder"
            },
            "FACE_UP": {
                "!doc": "Constant value for face-up orientation.",
                "!type": "numder"
            },
            "INPUT_BORDERSTYLE_LINE": {
                "!doc": "Use a simple line border on the input field.",
                "!type": "numder"
            },
            "ButtonBar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ButtonBar",
                "!doc": "An iOS button bar component.",
                "prototype": {
                    "labels": {
                        "!doc": "Array of labels for the button bar.",
                        "!type": "[string]"
                    },
                    "index": {
                        "!doc": "Index of the currently selected button.",
                        "!type": "numder"
                    },
                    "style": {
                        "!doc": "Style of the button bar.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype"
                }
            },
            "AUTOLINK_CALENDAR": {
                "!doc": "Converts strings formatted as calendar events into clickable links.",
                "!type": "numder"
            },
            "createanimationOption": {
                "!type": "fn() -> +animationOption"
            },
            "createActivityIndicator": {
                "!type": "fn() -> +Titanium.UI.ActivityIndicator"
            },
            "RefreshControl": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.RefreshControl",
                "!doc": "The RefreshControl is a representation of the native [UIRefreshControl](https://developer.apple.com/library/ios/documentation/uikit/reference/UIRefreshControl_class/Reference/Reference.html).",
                "prototype": {
                    "tintColor": {
                        "!doc": "The tint color for the refresh control, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "endRefreshing": {
                        "!doc": "Tells the control that a refresh operation has ended.",
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "beginRefreshing": {
                        "!doc": "Tells the control that a refresh operation was started programmatically.",
                        "!type": "fn()"
                    },
                    "title": {
                        "!doc": "The title of the control.",
                        "!type": "+Titanium.UI.AttributedString"
                    }
                }
            },
            "createBoundaryIdentifier": {
                "!type": "fn() -> +BoundaryIdentifier"
            },
            "INPUT_BORDERSTYLE_BEZEL": {
                "!doc": "Use a bezel-style border on the input field.",
                "!type": "numder"
            },
            "ATTRIBUTE_WRITING_DIRECTION_EMBEDDING": {
                "!doc": "Use with <Attribute.value> to use the embedded text direction.\n",
                "!type": "numder"
            },
            "createProperties": {
                "!type": "fn() -> +Titanium.App.Properties"
            },
            "LIST_ITEM_TEMPLATE_SETTINGS": {
                "!doc": "A built-in style for a item with an image view; a left-aligned title label; and a\nright-aligned subtitle label.\n",
                "!type": "numder"
            },
            "createMap": {
                "!type": "fn() -> +Titanium.Map"
            },
            "createAPI": {
                "!type": "fn() -> +Titanium.API"
            },
            "createNotificationParams": {
                "!type": "fn() -> +NotificationParams"
            },
            "createPendingIntent": {
                "!type": "fn() -> +Titanium.Android.PendingIntent"
            },
            "createFiles": {
                "!type": "fn() -> +Modules.Cloud.Files"
            },
            "ATTRIBUTE_SHADOW": {
                "!doc": "Use with <Attribute.type> to display a shadow behind the text.\n",
                "!type": "numder"
            },
            "createScreenshotResult": {
                "!type": "fn() -> +ScreenshotResult"
            },
            "createPicker": {
                "!type": "fn() -> +Titanium.UI.Picker"
            },
            "createCreateStreamArgs": {
                "!type": "fn() -> +CreateStreamArgs"
            },
            "LIST_ACCESSORY_TYPE_DETAIL": {
                "!doc": "Displays a detail disclosure button on the right side of an item in a list view.",
                "!type": "numder"
            },
            "KEYBOARD_DEFAULT": {
                "!doc": "Use the default keyboard, depending on the platform.",
                "!type": "numder"
            },
            "ATTRIBUTE_WRITING_DIRECTION_OVERRIDE": {
                "!doc": "Use with <Attribute.value> to override the text direction.\n",
                "!type": "numder"
            },
            "CoverFlowView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.CoverFlowView",
                "!doc": "The cover flow view is a container showing animated three-dimensional images in a style\nconsistent with the cover flow presentation used for iPod, iTunes, and file browsing.\n",
                "prototype": {
                    "images": {
                        "!doc": "Array of images to display in the view.",
                        "!type": "[string]"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "selected": {
                        "!doc": "Index to make selected.",
                        "!type": "numder"
                    },
                    "setImage": {
                        "!doc": "Changes the image for a specified index.",
                        "!type": "fn(index: numder, image: string)"
                    }
                }
            },
            "ATTRIBUTE_UNDERLINE_COLOR": {
                "!doc": "Use with <Attribute.type> to change the color of the horizontal line.\n",
                "!type": "numder"
            },
            "URL_ERROR_TIMEOUT": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> when a timeout occurs.",
                "!type": "numder"
            },
            "createService": {
                "!type": "fn() -> +Titanium.Android.Service"
            },
            "createModules": {
                "!type": "fn() -> +Modules"
            },
            "BLEND_MODE_XOR": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "TEXT_ALIGNMENT_RIGHT": {
                "!doc": "Right align text.",
                "!type": "numder"
            },
            "RETURNKEY_EMERGENCY_CALL": {
                "!doc": "Set the return key text to \"Emergency Call\".",
                "!type": "numder"
            },
            "ATTRIBUTE_WRITING_DIRECTION": {
                "!doc": "Use with <Attribute.type> to control the direction of the text.\n",
                "!type": "numder"
            },
            "ATTRIBUTE_UNDERLINE_PATTERN_DOT": {
                "!doc": "Use with <Attribute.value> to draw a dotted line.\n",
                "!type": "numder"
            },
            "createWriteStreamCallbackArgs": {
                "!type": "fn() -> +WriteStreamCallbackArgs"
            },
            "createTableViewEdgeInsets": {
                "!type": "fn() -> +TableViewEdgeInsets"
            },
            "INPUT_BORDERSTYLE_ROUNDED": {
                "!doc": "Use a rounded-rectangle border on the input field.",
                "!type": "numder"
            },
            "UNKNOWN": {
                "!doc": "Orientation constant representing an unknown orientation.",
                "!type": "numder"
            },
            "TableViewRow": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableViewRow",
                "!doc": "A table view row is an individual item in a table, organized into table view sections.\n",
                "prototype": {
                    "opacity": {},
                    "hasChild": {
                        "!doc": "Determines whether a system-provided arrow is displayed on the right-hand side of the row.\n",
                        "!type": "bool"
                    },
                    "rightImage": {
                        "!doc": "Image to render in the right image area of the row, specified as a local path or URL.",
                        "!type": "string"
                    },
                    "color": {
                        "!doc": "Default text color of the row when not selected, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "selectedColor": {
                        "!doc": "Color of the row text when the row is selected, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "hasDetail": {
                        "!doc": "Determines whether a system-provided detail disclosure button is displayed on the right-hand \nside of the row.\n",
                        "!type": "bool"
                    },
                    "leftImage": {
                        "!doc": "Image to render in the left image area of the row, specified as a local path or URL.",
                        "!type": "string"
                    },
                    "editable": {
                        "!doc": "Determines the rows' editable behavior, which allows them to be deleted by the user when the \ntable is in `editing` or `moving` mode.\n",
                        "!type": "bool"
                    },
                    "selectedBackgroundImage": {
                        "!doc": "Background image to render when the row is selected.",
                        "!type": "string"
                    },
                    "selectionStyle": {
                        "!doc": "Selection style constant to control the selection color.",
                        "!type": "numder"
                    },
                    "className": {
                        "!doc": "Class name for the row.",
                        "!type": "string"
                    },
                    "hasCheck": {
                        "!doc": "Determines whether a system-provided checkmark is displayed on the right-hand side of \nthe row.\n",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "indentionLevel": {
                        "!doc": "Indention level for the row.",
                        "!type": "numder"
                    },
                    "moveable": {
                        "!doc": "Determines the rows' moveable behavior, which allows them to be re-ordered by the user when \nthe table is in `editing` or `moving` mode.\n",
                        "!type": "bool"
                    },
                    "accessibilityLabel": {
                        "!doc": "A succint label associated with the table row for the device's accessibility service.",
                        "!type": "string"
                    },
                    "title": {
                        "!doc": "Text to display on the row.",
                        "!type": "string"
                    },
                    "font": {
                        "!doc": "Font to use for the row title.",
                        "!type": "+Font"
                    },
                    "selectedBackgroundColor": {
                        "!doc": "Background color to render when the row is selected, as a color name or hex triplet.",
                        "!type": "string"
                    }
                }
            },
            "createTabbedBar": {
                "!type": "fn() -> +Titanium.UI.iOS.TabbedBar"
            },
            "createDictionary": {
                "!type": "fn() -> +Dictionary"
            },
            "URL_ERROR_SSL_FAILED": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> for an SSL failure.",
                "!type": "numder"
            },
            "createSound": {
                "!type": "fn() -> +Titanium.Media.Sound"
            },
            "URL_ERROR_BAD_URL": {
                "!doc": "Bad url error code reported via <Titanium.UI.WebView.error>.",
                "!type": "numder"
            },
            "BLEND_MODE_PLUS_LIGHTER": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "INPUT_BUTTONMODE_NEVER": {
                "!doc": "Never show buttons on the input field.",
                "!type": "numder"
            },
            "createListView": {
                "!type": "fn() -> +Titanium.UI.ListView"
            },
            "createlaunchOptions": {
                "!type": "fn() -> +launchOptions"
            },
            "ATTRIBUTE_LIGATURE": {
                "!doc": "Use with <Attribute.type> to enable or disable ligatures.\n",
                "!type": "numder"
            },
            "createGeolocation": {
                "!type": "fn() -> +Titanium.Geolocation"
            },
            "createScrollView": {
                "!type": "fn() -> +Titanium.UI.ScrollView"
            },
            "ATTRIBUTE_BASELINE_OFFSET": {
                "!doc": "Use with <Attribute.type> to apply a different baseline to the text.\n",
                "!type": "numder"
            },
            "TextArea": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TextArea",
                "!doc": "A multiline text field that supports editing and scrolling.",
                "prototype": {
                    "selection": {
                        "!doc": "Returns the currently selected text of the text area.",
                        "!type": "+textAreaSelectedParams"
                    },
                    "color": {
                        "!doc": "Color of the text in this text area, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "returnKeyType": {
                        "!doc": "Specifies the text to display on the keyboard `Return` key when this text area is focused.\n",
                        "!type": "numder"
                    },
                    "focus": {
                        "!doc": "Forces this text area to gain focus.",
                        "!type": "fn()"
                    },
                    "hasText": {
                        "!doc": "Returns `true` if this text area contains text.",
                        "!type": "fn() -> bool"
                    },
                    "remove": {
                        "!type": "fn()"
                    },
                    "font": {
                        "!doc": "Font to use for text.",
                        "!type": "+Font"
                    },
                    "handleLinks": {
                        "!doc": "Specifies if the text area should allow user interaction with the given URL in the given range of text.",
                        "!type": "bool"
                    },
                    "scrollsToTop": {
                        "!doc": "Controls whether the scroll-to-top gesture is effective.",
                        "!type": "bool"
                    },
                    "keyboardToolbarHeight": {
                        "!doc": "Height of the keyboard toolbar if keyboardToolbar is an array.",
                        "!type": "numder"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "enableReturnKey": {
                        "!doc": "Determines whether the return key is enabled automatically when there is text in this text \narea.\n",
                        "!type": "bool"
                    },
                    "blur": {
                        "!doc": "Forces this text area to lose focus.",
                        "!type": "fn()"
                    },
                    "keyboardToolbar": {
                        "!doc": "Array of toolbar button objects or a [toolbar](Titanium.UI.iOS.Toolbar) to be used when the \nkeyboard is displayed.\n",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "ellipsize": {
                        "!doc": "Determines whether an ellipsis (`...`) should be used to indicate truncated text.",
                        "!type": "bool"
                    },
                    "suppressReturn": {
                        "!doc": "Determines if the return key should be suppressed during text entry.",
                        "!type": "bool"
                    },
                    "scrollable": {
                        "!doc": "Determines whether this text area can be scrolled.",
                        "!type": "bool"
                    },
                    "keyboardToolbarColor": {
                        "!doc": "Color of the keyboard toolbar if keyboardToolbar is an array, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "editable": {
                        "!doc": "Determines whether this field can be edited.",
                        "!type": "bool"
                    },
                    "clearOnEdit": {
                        "!doc": "Determines whether the value of this text area should be cleared when it is focused.",
                        "!type": "bool"
                    },
                    "hintText": {
                        "!doc": "Hint text to display when the field is empty.",
                        "!type": "string"
                    },
                    "maxLength": {
                        "!doc": "Maximum length of text field input.",
                        "!type": "numder"
                    },
                    "textAlign": {
                        "!doc": "Text alignment within this text area.",
                        "!type": "string"
                    },
                    "autoLink": {
                        "!doc": "Automatically convert text to clickable links.",
                        "!type": "numder"
                    },
                    "verticalAlign": {
                        "!doc": "Vertical alignment within this text area.",
                        "!type": "numder"
                    },
                    "setSelection": {
                        "!doc": "Selects the text in range (start, end).",
                        "!type": "fn(start: numder, end: numder)"
                    },
                    "keyboardType": {
                        "!doc": "Keyboard type to display when this text area is focused.",
                        "!type": "numder"
                    },
                    "appearance": {
                        "!doc": "Determines the appearance of the keyboard displayed when this text area is focused.",
                        "!type": "numder"
                    },
                    "value": {
                        "!doc": "Value of this text area, which may be set programmatically and modified by the user.",
                        "!type": "string"
                    },
                    "hintTextColor": {
                        "!doc": "Color of hint text that displays when field is empty.",
                        "!type": "string"
                    },
                    "autocapitalization": {
                        "!doc": "Determines how text is capitalized during typing.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "autocorrect": {
                        "!doc": "Determines whether to automatically correct text entered into this text area.",
                        "!type": "bool"
                    },
                    "attributedString": {
                        "!doc": "TextArea attributed string.",
                        "!type": "+Titanium.UI.AttributedString"
                    }
                }
            },
            "UNIT_IN": {
                "!doc": "Unit constant representing units in inches.",
                "!type": "string"
            },
            "createTableViewAnimationProperties": {
                "!type": "fn() -> +TableViewAnimationProperties"
            },
            "LIST_ITEM_TEMPLATE_DEFAULT": {
                "!doc": "A built-in style for an item with an image view and left-aligned title label.\n",
                "!type": "numder"
            },
            "backgroundImage": {
                "!doc": "Local path or URL to an image file for setting a background for the master view (when there \nare no windows or other top-level controls displayed).\n",
                "!type": "string"
            },
            "createYQLResponse": {
                "!type": "fn() -> +YQLResponse"
            },
            "BLEND_MODE_COLOR": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createCloudFriendRequestsResponse": {
                "!type": "fn() -> +CloudFriendRequestsResponse"
            },
            "createApp": {
                "!type": "fn() -> +Titanium.App"
            },
            "AUTOLINK_URLS": {
                "!doc": "Converts strings formatted as URLs into clickable links.",
                "!type": "numder"
            },
            "AUTODETECT_CALENDAR": {
                "!doc": "Converts strings formatted as calendar events into clickable links.",
                "!type": "numder"
            },
            "createImageAsCroppedDict": {
                "!type": "fn() -> +ImageAsCroppedDict"
            },
            "LANDSCAPE_RIGHT": {
                "!doc": "Reverse landscape orientation (home button on right).",
                "!type": "numder"
            },
            "EXTEND_EDGE_BOTTOM": {
                "!doc": "Specifies that the bottom edge of the window can extend.",
                "!type": "numder"
            },
            "View": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.View",
                "!doc": "An empty drawing surface or container",
                "prototype": {
                    "right": {
                        "!doc": "View's right position, in platform-specific units.",
                        "!type": "numder"
                    },
                    "backgroundSelectedColor": {
                        "!doc": "Selected background color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "borderRadius": {
                        "!doc": "Radius for the rounded corners of the view's border.",
                        "!type": "numder"
                    },
                    "visible": {
                        "!doc": "Determines whether the view is visible.",
                        "!type": "bool"
                    },
                    "removeAllChildren": {
                        "!doc": "Removes all child views from this view's hierarchy.",
                        "!type": "fn()"
                    },
                    "accessibilityHidden": {
                        "!doc": "Whether the view should be \"hidden\" from (i.e., ignored by) the accessibility service.",
                        "!type": "bool"
                    },
                    "touchEnabled": {
                        "!doc": "Determines whether view should receive touch events.",
                        "!type": "bool"
                    },
                    "accessibilityHint": {
                        "!doc": "Briefly describes what performing an action (such as a click) on the view will do.",
                        "!type": "string"
                    },
                    "backgroundDisabledImage": {
                        "!doc": "Disabled background image for the view, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "animatedCenter": {
                        "!doc": "Current position of the view during an animation.",
                        "!type": "+Point"
                    },
                    "accessibilityLabel": {
                        "!doc": "A succint label identifying the view for the device's accessibility service.",
                        "!type": "string"
                    },
                    "animate": {
                        "!doc": "Animates this view.",
                        "!type": "fn(animation: +Titanium.UI.Animation, callback: +Callback<Object>)"
                    },
                    "softKeyboardOnFocus": {
                        "!doc": "Determines keyboard behavior when this view is focused.",
                        "!type": "numder"
                    },
                    "children": {
                        "!doc": "Array of this view's child views.",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "size": {
                        "!doc": "The size of the view in system units. \n",
                        "!type": "+Dimension"
                    },
                    "borderColor": {
                        "!doc": "Border color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "horizontalWrap": {
                        "!doc": "Determines whether the layout has wrapping behavior.",
                        "!type": "bool"
                    },
                    "layout": {
                        "!doc": "Specifies how the view positions its children. \nOne of: 'composite', 'vertical', or 'horizontal'.\n",
                        "!type": "string"
                    },
                    "bottom": {
                        "!doc": "View's bottom position, in platform-specific units.",
                        "!type": "numder"
                    },
                    "backgroundRepeat": {
                        "!doc": "Determines whether to tile a background across a view.",
                        "!type": "bool"
                    },
                    "top": {
                        "!doc": "The view's top position.",
                        "!type": "numder"
                    },
                    "viewShadowColor": {
                        "!doc": "Determines the color of the shadow.",
                        "!type": "string"
                    },
                    "keepScreenOn": {
                        "!doc": "Determines whether to keep the device screen on.",
                        "!type": "bool"
                    },
                    "transform": {
                        "!doc": "Transformation matrix to apply to the view.",
                        "!type": "+Titanium.UI.2DMatrix"
                    },
                    "viewShadowOffset": {
                        "!doc": "Determines the offset for the shadow of the view.",
                        "!type": "+Point"
                    },
                    "width": {
                        "!doc": "View's width, in platform-specific units.",
                        "!type": "numder"
                    },
                    "add": {
                        "!doc": "Adds a child to this view's hierarchy.",
                        "!type": "fn(view: +Titanium.UI.View)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "backgroundImage": {
                        "!doc": "Background image for the view, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "backgroundColor": {
                        "!doc": "Background color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "backgroundLeftCap": {
                        "!doc": "Size of the left end cap.",
                        "!type": "numder"
                    },
                    "pullBackgroundColor": {
                        "!doc": "Background color of the wrapper view when this view is used as either <Titanium.UI.ListView.pullView> or <Titanium.UI.TableView.headerPullView>.",
                        "!type": "string"
                    },
                    "opacity": {
                        "!doc": "Opacity of this view, from 0.0 (transparent) to 1.0 (opaque).",
                        "!type": "numder"
                    },
                    "backgroundSelectedImage": {
                        "!doc": "Selected background image url for the view, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "hide": {
                        "!doc": "Hides this view.",
                        "!type": "fn()"
                    },
                    "backgroundFocusedColor": {
                        "!doc": "Focused background color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "toImage": {
                        "!doc": "Returns an image of the rendered view, as a Blob.",
                        "!type": "fn(callback: +Callback<Titanium.Blob>, honorScaleFactor: bool) -> +Titanium.Blob"
                    },
                    "clipMode": {
                        "!doc": "View's clipping behavior.",
                        "!type": "numder"
                    },
                    "focusable": {
                        "!doc": "Whether view should be focusable while navigating with the trackball.",
                        "!type": "bool"
                    },
                    "startLayout": {
                        "!doc": "Starts a batch update of this view's layout properties.",
                        "!type": "fn()"
                    },
                    "backgroundFocusedImage": {
                        "!doc": "Focused background image for the view, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "tintColor": {
                        "!doc": "The view's tintColor. This property is applicable on iOS 7 and greater.",
                        "!type": "string"
                    },
                    "backgroundGradient": {
                        "!doc": "A background gradient for the view.",
                        "!type": "+Gradient"
                    },
                    "backgroundTopCap": {
                        "!doc": "Size of the top end cap.",
                        "!type": "numder"
                    },
                    "accessibilityValue": {
                        "!doc": "A string describing the value (if any) of the view for the device's accessibility service.",
                        "!type": "string"
                    },
                    "height": {
                        "!doc": "View height, in platform-specific units.",
                        "!type": "numder"
                    },
                    "rect": {
                        "!doc": "The bounding box of the view relative to its parent, in system units.\n",
                        "!type": "+Dimension"
                    },
                    "updateLayout": {
                        "!doc": "Performs a batch update of all supplied layout properties and schedules a layout pass after \nthey have been updated.\n",
                        "!type": "fn(params: +Dictionary)"
                    },
                    "zIndex": {
                        "!doc": "Z-index stack order position, relative to other sibling views.",
                        "!type": "numder"
                    },
                    "viewShadowRadius": {
                        "!doc": "Determines the blur radius used to create the shadow.",
                        "!type": "numder"
                    },
                    "anchorPoint": {
                        "!doc": "Coordinate of the view about which to pivot an animation.",
                        "!type": "+Point"
                    },
                    "center": {
                        "!doc": "View's center position, in the parent view's coordinates.",
                        "!type": "+Point"
                    },
                    "backgroundDisabledColor": {
                        "!doc": "Disabled background color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "overrideCurrentAnimation": {
                        "!doc": "When on, animate call overrides current animation if applicable.",
                        "!type": "bool"
                    },
                    "convertPointToView": {
                        "!doc": "Translates a point from this view's coordinate system to another view's coordinate system.\n",
                        "!type": "fn(point: +Point, destinationView: +Titanium.UI.View) -> +Point"
                    },
                    "show": {
                        "!doc": "Makes this view visible.",
                        "!type": "fn()"
                    },
                    "finishLayout": {
                        "!doc": "Finishes a batch update of the View's layout properties and schedules a layout pass of the \nview tree.\n",
                        "!type": "fn()"
                    },
                    "remove": {
                        "!doc": "Removes a child view from this view's hierarchy.",
                        "!type": "fn(view: +Titanium.UI.View)"
                    },
                    "borderWidth": {
                        "!doc": "Border width of the view.",
                        "!type": "numder"
                    },
                    "left": {
                        "!doc": "View's left position, in platform-specific units.",
                        "!type": "numder"
                    }
                }
            },
            "createshowStatusBarParams": {
                "!type": "fn() -> +showStatusBarParams"
            },
            "createCloudPhotosResponse": {
                "!type": "fn() -> +CloudPhotosResponse"
            },
            "createMobileWeb": {
                "!type": "fn() -> +Titanium.UI.MobileWeb"
            },
            "createDimension": {
                "!type": "fn() -> +Dimension"
            },
            "TEXT_ALIGNMENT_CENTER": {
                "!doc": "Center align text.",
                "!type": "numder"
            },
            "RETURNKEY_YAHOO": {
                "!doc": "Set the return key text to \"Yahoo\".",
                "!type": "numder"
            },
            "createSearchView": {
                "!type": "fn() -> +Titanium.UI.Android.SearchView"
            },
            "ATTRIBUTE_UNDERLINE_BY_WORD": {
                "!doc": "Use with <Attribute.value> to draw a line only underneath or through words.\n",
                "!type": "numder"
            },
            "createRowActionType": {
                "!type": "fn() -> +RowActionType"
            },
            "FACE_DOWN": {
                "!doc": "Constant value for face-down orientation.",
                "!type": "numder"
            },
            "createCloudUsersSecureDialog": {
                "!type": "fn() -> +CloudUsersSecureDialog"
            },
            "createPreviewImageOptions": {
                "!type": "fn() -> +PreviewImageOptions"
            },
            "createTab": {
                "!type": "fn() -> +Titanium.UI.Tab"
            },
            "createFailureResponse": {
                "!type": "fn() -> +FailureResponse"
            },
            "createCloudStatusesResponse": {
                "!type": "fn() -> +CloudStatusesResponse"
            },
            "createMapRegionType": {
                "!type": "fn() -> +MapRegionType"
            },
            "createRemoteViews": {
                "!type": "fn() -> +Titanium.Android.RemoteViews"
            },
            "TableViewSection": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableViewSection",
                "!doc": "A table view section is a container within a table used to organize table view rows.\n",
                "prototype": {
                    "headerView": {
                        "!doc": "View to use for this section header.",
                        "!type": "+Titanium.UI.View"
                    },
                    "rows": {
                        "!doc": "Rows in this section.",
                        "!type": "+Array<Titanium.UI.TableViewRow>"
                    },
                    "rowCount": {
                        "!doc": "Number of rows in this section.",
                        "!type": "numder"
                    },
                    "footerView": {
                        "!doc": "View to use for this section footer.",
                        "!type": "+Titanium.UI.View"
                    },
                    "remove": {
                        "!doc": "Removes a table view row from this section.",
                        "!type": "fn(row: +Titanium.UI.TableViewRow)"
                    },
                    "headerTitle": {
                        "!doc": "Title of this section header.",
                        "!type": "string"
                    },
                    "add": {
                        "!doc": "Adds a table view row to this section.",
                        "!type": "fn(row: +Titanium.UI.TableViewRow)"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "rowAtIndex": {
                        "!doc": "Returns a row in this section.",
                        "!type": "fn(index: numder) -> +Titanium.UI.TableViewRow"
                    },
                    "footerTitle": {
                        "!doc": "Title of this section footer.",
                        "!type": "string"
                    }
                }
            },
            "createUtils": {
                "!type": "fn() -> +Titanium.Utils"
            },
            "TEXT_STYLE_CAPTION2": {
                "!doc": "Specifies the text style for the <Font> Object.",
                "!type": "string"
            },
            "TEXT_STYLE_CAPTION1": {
                "!doc": "Specifies the text style for the <Font> Object.",
                "!type": "string"
            },
            "createCloudLikesResponse": {
                "!type": "fn() -> +CloudLikesResponse"
            },
            "createPushNotificationData": {
                "!type": "fn() -> +PushNotificationData"
            },
            "TEXT_VERTICAL_ALIGNMENT_CENTER": {
                "!doc": "Vertically align text to the center of the view.",
                "!type": "numder"
            },
            "createDashboardView": {
                "!type": "fn() -> +Titanium.UI.DashboardView"
            },
            "ATTRIBUTE_UNDERLINE_PATTERN_DASH": {
                "!doc": "Use with <Attribute.value> to draw a dashed line.\n",
                "!type": "numder"
            },
            "UPSIDE_PORTRAIT": {
                "!doc": "Orientation constant for inverted portait orientation.",
                "!type": "numder"
            },
            "createMediaAuthorizationResponse": {
                "!type": "fn() -> +MediaAuthorizationResponse"
            },
            "AUTODETECT_PHONE": {
                "!doc": "Converts strings formatted as phone numbers into clickable links.",
                "!type": "numder"
            },
            "createCloudResponse": {
                "!type": "fn() -> +CloudResponse"
            },
            "createFriends": {
                "!type": "fn() -> +Modules.Cloud.Friends"
            },
            "iPhone": {
                "showStatusBar": {
                    "!doc": "Shows the status bar.",
                    "!type": "fn(params: +showStatusBarParams)"
                },
                "TableViewSeparatorStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.TableViewSeparatorStyle",
                    "!doc": "A set of constants for the style that can be used for the `separatorStyle` property of \n<Titanium.UI.TableView>.\n",
                    "prototype": {
                        "NONE": {
                            "!doc": "The separator cell has no distinct style.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "SINGLE_LINE": {
                            "!doc": "The separator cell has a single line running across its width. This is the default value.",
                            "!type": "numder"
                        }
                    }
                },
                "!doc": "The iPhone/iPad-specific UI capabilities.  All properties, methods and events in this namespace \nwill only work on Apple iOS systems.\n",
                "MODAL_TRANSITION_STYLE_CROSS_DISSOLVE": {
                    "!doc": "When the window is presented, the current view fades out while the new view fades in at the \nsame time. On dismissal, a similar type of cross-fade is used to return to the original view.\n",
                    "!type": "numder"
                },
                "hideStatusBar": {
                    "!doc": "Hides the status bar.",
                    "!type": "fn(params: +hideStatusBarParams)"
                },
                "SystemButtonStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.SystemButtonStyle",
                    "!doc": "A set of constants for the system button styles that can be used for the button `style` property.\n",
                    "prototype": {
                        "DONE": {
                            "!doc": "The style for a **Done** button--for example, a button that completes some task and returns \nto the previous view.\n",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "BAR": {
                            "!doc": "Used with [ButtonBar](Titanium.UI.ButtonBar) or [TabbedBar](Titanium.UI.iOS.TabbedBar) only, \nto use the more condensed style used in nav bars and tool bars.\n",
                            "!type": "numder"
                        },
                        "BORDERED": {
                            "!doc": "A simple button style with a border.",
                            "!type": "numder"
                        },
                        "PLAIN": {
                            "!doc": "Specifies a borderless button, the default style for toolbars, button bars, and tabbed bars.\n",
                            "!type": "numder"
                        }
                    }
                },
                "appBadge": {
                    "!doc": "Value of the badge for the application's springboard icon.",
                    "!type": "numder"
                },
                "SystemButton": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.SystemButton",
                    "!doc": "A set of constants for creating standard iOS system buttons.",
                    "prototype": {
                        "FLEXIBLE_SPACE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create a flexible blank space \nfor spacing items in toolbars.\n",
                            "!type": "numder"
                        },
                        "DISCLOSURE": {
                            "!doc": "Use with [Button.style](Titanium.UI.Button.style) to specify a **Disclosure** button.",
                            "!type": "numder"
                        },
                        "STOP": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Stop** button.",
                            "!type": "numder"
                        },
                        "ORGANIZE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Organize** button.",
                            "!type": "numder"
                        },
                        "DONE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Done** button.",
                            "!type": "numder"
                        },
                        "TRASH": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Trash** button.",
                            "!type": "numder"
                        },
                        "FIXED_SPACE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create a fixed-width blank space \nfor spacing items in toolbars.\n",
                            "!type": "numder"
                        },
                        "INFO_LIGHT": {
                            "!doc": "Use with [Button.style](Titanium.UI.Button.style) to specify a light-colored **Info** button.",
                            "!type": "numder"
                        },
                        "CAMERA": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Camera** button.",
                            "!type": "numder"
                        },
                        "ACTIVITY": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create an activity indicator that\ncan be used in navigation bars and toolbars. \n",
                            "!type": "numder"
                        },
                        "ACTION": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Action** button.",
                            "!type": "numder"
                        },
                        "PLAY": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Play** button.",
                            "!type": "numder"
                        },
                        "COMPOSE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Compose** button.",
                            "!type": "numder"
                        },
                        "REFRESH": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Refresh** button.",
                            "!type": "numder"
                        },
                        "SPINNER": {
                            "!doc": "Identical to [ACTIVITY](Titanium.UI.iPhone.SystemButton.ACTIVITY).",
                            "!type": "numder"
                        },
                        "ADD": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Add** button.",
                            "!type": "numder"
                        },
                        "CANCEL": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Cancel** button.",
                            "!type": "numder"
                        },
                        "REPLY": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Reply** button.",
                            "!type": "numder"
                        },
                        "PAUSE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Pause** button.",
                            "!type": "numder"
                        },
                        "SAVE": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Save** button.",
                            "!type": "numder"
                        },
                        "EDIT": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Edit** button.",
                            "!type": "numder"
                        },
                        "INFO_DARK": {
                            "!doc": "Use with [Button.style](Titanium.UI.Button.style) to specify a dark-colored **Info** button.",
                            "!type": "numder"
                        },
                        "FAST_FORWARD": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Fast Forward** button.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "REWIND": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Rewind** button.",
                            "!type": "numder"
                        },
                        "BOOKMARKS": {
                            "!doc": "Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Bookmarks** button.",
                            "!type": "numder"
                        },
                        "CONTACT_ADD": {
                            "!doc": "Use with [Button.style](Titanium.UI.Button.style) to specify a **ContactAdd** button.",
                            "!type": "numder"
                        }
                    }
                },
                "TableViewScrollPosition": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.TableViewScrollPosition",
                    "!doc": "A set of constants for the position value that can be used for the `position` property of \n<Titanium.UI.TableView> when invoking `scrollToIndex`.\n",
                    "prototype": {
                        "MIDDLE": {
                            "!doc": "The table view scrolls the row of interest to the middle of the visible table view.",
                            "!type": "numder"
                        },
                        "NONE": {
                            "!doc": "The table view scrolls the row of interest to be fully visible with a minimum of movement. If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by `TOP`. This is the default.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "TOP": {
                            "!doc": "The table view scrolls the row of interest to the top of the visible table view.",
                            "!type": "numder"
                        },
                        "BOTTOM": {
                            "!doc": "The table view scrolls the row of interest to the bottom of the visible table view.",
                            "!type": "numder"
                        }
                    }
                },
                "statusBarHidden": {
                    "!doc": "Determines whether the status bar is hidden.",
                    "!type": "bool"
                },
                "AlertDialogStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.AlertDialogStyle",
                    "!doc": "A set of constants for the style that can be used for the `style` property of \n<Titanium.UI.AlertDialog>.\n",
                    "prototype": {
                        "DEFAULT": {
                            "!doc": "A standard alert dialog. This is the default value.",
                            "!type": "numder"
                        },
                        "LOGIN_AND_PASSWORD_INPUT": {
                            "!doc": "An alert dialog that allows the user to enter login identifier and password.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "SECURE_TEXT_INPUT": {
                            "!doc": "An alert dialog that allows the user to enter text. The text field is obscured.",
                            "!type": "numder"
                        },
                        "PLAIN_TEXT_INPUT": {
                            "!doc": "An alert dialog that allows the user to enter text.",
                            "!type": "numder"
                        }
                    }
                },
                "ProgressBarStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ProgressBarStyle",
                    "!doc": "A set of constants for the bar styles used on the `style` property of <Titanium.UI.ProgressBar>.\n",
                    "prototype": {
                        "DEFAULT": {
                            "!doc": "he standard progress-view style. This is the default.",
                            "!type": "numder"
                        },
                        "PLAIN": {
                            "!doc": "The standard progress-view style. Same as `DEFAULT`.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "BAR": {
                            "!doc": "The style of progress view that is used in a toolbar.",
                            "!type": "numder"
                        }
                    }
                },
                "ListViewSeparatorStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ListViewSeparatorStyle",
                    "!doc": "A set of constants for the style that can be used for the `separatorStyle` property of \n<Titanium.UI.ListView>.\n",
                    "prototype": {
                        "NONE": {
                            "!doc": "The separator cell has no distinct style.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "SINGLE_LINE": {
                            "!doc": "The separator cell has a single line running across its width. This is the default value.",
                            "!type": "numder"
                        }
                    }
                },
                "MODAL_PRESENTATION_FULLSCREEN": {
                    "!doc": "Window covers the screen.",
                    "!type": "numder"
                },
                "TableViewStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.TableViewStyle",
                    "!doc": "A set of constants for the style that can be used for the button `style` property of \n<Titanium.UI.TableView>.\n",
                    "prototype": {
                        "GROUPED": {
                            "!doc": "A table view whose sections present distinct groups of rows. The section headers and footers \ndo not float.\n",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "PLAIN": {
                            "!doc": "A plain table view. Any section headers or footers are displayed as inline separators and \nfloat when the table view is scrolled.\n",
                            "!type": "numder"
                        }
                    }
                },
                "SystemIcon": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.SystemIcon",
                    "!doc": "A set of constants for the system icon styles that can be used on a tab group tab.",
                    "prototype": {
                        "SEARCH": {
                            "!doc": "Search style icon",
                            "!type": "numder"
                        },
                        "TOP_RATED": {
                            "!doc": "Top rated style icon",
                            "!type": "numder"
                        },
                        "RECENTS": {
                            "!doc": "Recents style icon",
                            "!type": "numder"
                        },
                        "CONTACTS": {
                            "!doc": "Contacts style icon",
                            "!type": "numder"
                        },
                        "DOWNLOADS": {
                            "!doc": "Downloads style icon",
                            "!type": "numder"
                        },
                        "MOST_RECENT": {
                            "!doc": "Most recent style icon",
                            "!type": "numder"
                        },
                        "MOST_VIEWED": {
                            "!doc": "Most viewed style icon",
                            "!type": "numder"
                        },
                        "FEATURED": {
                            "!doc": "Featured style icon",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "FAVORITES": {
                            "!doc": "Favorites style icon",
                            "!type": "numder"
                        },
                        "BOOKMARKS": {
                            "!doc": "Bookmark style icon",
                            "!type": "numder"
                        },
                        "MORE": {
                            "!doc": "More style icon",
                            "!type": "numder"
                        },
                        "HISTORY": {
                            "!doc": "History style icon",
                            "!type": "numder"
                        }
                    }
                },
                "appSupportsShakeToEdit": {
                    "!doc": "Determines whether the shake to edit system-wide capability is enabled.",
                    "!type": "bool"
                },
                "MODAL_PRESENTATION_CURRENT_CONTEXT": {
                    "!doc": "View presented with the same style as its parent window.",
                    "!type": "numder"
                },
                "MODAL_TRANSITION_STYLE_PARTIAL_CURL": {
                    "!doc": "When the window is presented, one corner of the current view curls up to reveal the modal \nview underneath. On dismissal, the curled up page unfurls itself back on top of the modal \nview.\n",
                    "!type": "numder"
                },
                "ListViewStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ListViewStyle",
                    "!doc": "A set of constants for the style that can be used for the `style` property of \n<Titanium.UI.ListView>.\n",
                    "prototype": {
                        "GROUPED": {
                            "!doc": "A list view whose sections present distinct groups of rows. The section headers and footers \ndo not float.\n",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "PLAIN": {
                            "!doc": "A plain list view. Any section headers or footers are displayed as inline separators and \nfloat when the list view is scrolled.\n",
                            "!type": "numder"
                        }
                    }
                },
                "TableViewCellSelectionStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.TableViewCellSelectionStyle",
                    "!doc": "A set of constants for the style that can be used for the `selectionStyle` property of \n<Titanium.UI.TableViewRow>.\n",
                    "prototype": {
                        "BLUE": {
                            "!doc": "The cell when selected has a blue background. This is the default value.",
                            "!type": "numder"
                        },
                        "GRAY": {
                            "!doc": "Then cell when selected has a gray background.",
                            "!type": "numder"
                        },
                        "NONE": {
                            "!doc": "The cell has no distinct style for when it is selected.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype"
                    }
                },
                "NavigationGroup": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.NavigationGroup",
                    "!doc": "A Navigation Group implements a specialized view that manages the navigation of hierarchical \ncontent.\n",
                    "prototype": {
                        "close": {
                            "!doc": "Closes a window and removes it from the navigation group.",
                            "!type": "fn(window: +Titanium.UI.Window, options: +Dictionary)"
                        },
                        "window": {
                            "!doc": "Window to add to this navigation group.",
                            "!type": "+Titanium.UI.Window"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "open": {
                            "!doc": "Opens a window within the navigation group.",
                            "!type": "fn(window: +Titanium.UI.Window, options: +Dictionary)"
                        }
                    }
                },
                "ScrollIndicatorStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ScrollIndicatorStyle",
                    "!doc": "A set of constants for the styles available for scrollbars used with <Titanium.UI.ScrollView.scrollIndicatorStyle> and <Titanium.UI.TableView.scrollIndicatorStyle> properties.",
                    "prototype": {
                        "DEFAULT": {
                            "!doc": "The default style of scroll indicator, which is black with a white border. This style is \ngood against any content background.\n",
                            "!type": "numder"
                        },
                        "WHITE": {
                            "!doc": "A style of indicator is white and smaller than the default style. This style is good against \na black content background.\n",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "BLACK": {
                            "!doc": "A style of indicator which is black smaller than the default style. This style is good \nagainst a white content background.\n",
                            "!type": "numder"
                        }
                    }
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone",
                "MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL": {
                    "!doc": "When the window is presented, the current view initiates a horizontal 3D flip from \nright-to-left, resulting in the revealing of the new view as if it were on the back of the \nprevious view. On dismissal, the flip occurs from left-to-right, returning to the original \nview.\n",
                    "!type": "numder"
                },
                "ListViewScrollPosition": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ListViewScrollPosition",
                    "!doc": "A set of constants for the position value that can be used for the `position` property of \n<ListViewAnimationProperties> when invoking the ListView's `scrollToItem`, `appendSection`,\n`deleteSectionAt`, `insertSectionAt` and `replaceSectionAt` methods.\n",
                    "prototype": {
                        "MIDDLE": {
                            "!doc": "The list view scrolls the row of interest to the middle of the list table view.",
                            "!type": "numder"
                        },
                        "NONE": {
                            "!doc": "The table view scrolls the row of interest to be fully visible with a minimal movement.\nIf the row is already fully visible, no scrolling occurs. For example, if the row is above the\nvisible area, the behavior is identical to that specified by `TOP`. This is the default.\n",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "TOP": {
                            "!doc": "The list view scrolls the row of interest to the top of the visible list view.",
                            "!type": "numder"
                        },
                        "BOTTOM": {
                            "!doc": "The list view scrolls the row of interest to the bottom of the visible list view.",
                            "!type": "numder"
                        }
                    }
                },
                "MODAL_TRANSITION_STYLE_COVER_VERTICAL": {
                    "!doc": "When the window is presented, its view slides up from the bottom of the screen. On dismissal, \nthe view slides back down (default.)\n",
                    "!type": "numder"
                },
                "StatusBar": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.StatusBar",
                    "!doc": "A set of constants for the status bar style.",
                    "prototype": {
                        "TRANSLUCENT_BLACK": {
                            "!doc": "Translucent black-colored status bar style, which provides some degree of transparency to \nthe device background.\n",
                            "!type": "numder"
                        },
                        "GRAY": {
                            "!doc": "Gray-colored status bar style.",
                            "!type": "numder"
                        },
                        "OPAQUE_BLACK": {
                            "!doc": "Opaque black-colored status bar style.",
                            "!type": "numder"
                        },
                        "DEFAULT": {
                            "!doc": "Default status bar style.",
                            "!type": "numder"
                        },
                        "ANIMATION_STYLE_SLIDE": {
                            "!doc": "Slide animation style, when the status bar is hidden or shown.",
                            "!type": "numder"
                        },
                        "GREY": {
                            "!doc": "Gray-colored status bar style.",
                            "!type": "numder"
                        },
                        "LIGHT_CONTENT": {
                            "!doc": "Status bar style to use with dark backgrounds. Valid on iOS 7 and above.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "ANIMATION_STYLE_FADE": {
                            "!doc": "Fade animation style, when the status bar is hidden or shown.",
                            "!type": "numder"
                        },
                        "ANIMATION_STYLE_NONE": {
                            "!doc": "No animation style, when the status bar is hidden or shown.",
                            "!type": "numder"
                        }
                    }
                },
                "RowAnimationStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.RowAnimationStyle",
                    "!doc": "A set of constants for the Animation Styles used for transition on table view rows.",
                    "prototype": {
                        "NONE": {
                            "!doc": "No animation is performed. The new cell value appears as if the cell had just been reloaded.\n",
                            "!type": "numder"
                        },
                        "RIGHT": {
                            "!doc": "The inserted row or rows slides in from the right; the deleted row or rows slides out to \nthe right.\n",
                            "!type": "numder"
                        },
                        "BOTTOM": {
                            "!doc": "The inserted row or rows slides in from the bottom; the deleted row or rows slides out \ntoward the bottom.\n",
                            "!type": "numder"
                        },
                        "TOP": {
                            "!doc": "The inserted row or rows slides in from the top; the deleted row or rows slides out toward \nthe top.\n",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "FADE": {
                            "!doc": "The inserted or deleted row or rows fades into or out of the table view.",
                            "!type": "numder"
                        },
                        "LEFT": {
                            "!doc": "The inserted row or rows slides in from the left; the deleted row or rows slides out to the \nleft.\n",
                            "!type": "numder"
                        }
                    }
                },
                "ActivityIndicatorStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ActivityIndicatorStyle",
                    "!doc": "A set of constants for the styles available for <Titanium.UI.ActivityIndicator> objects.",
                    "prototype": {
                        "DARK": {
                            "!doc": "Small gray spinning indicator.",
                            "!type": "numder"
                        },
                        "BIG": {
                            "!doc": "Large white spinning indicator.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "PLAIN": {
                            "!doc": "Small white spinning indicator (default.)",
                            "!type": "numder"
                        }
                    }
                },
                "statusBarStyle": {
                    "!doc": "Determines the status bar color style.",
                    "!type": "numder"
                },
                "ListViewCellSelectionStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.ListViewCellSelectionStyle",
                    "!doc": "A set of constants for the style that can be used for the `selectionStyle` property of a\nListItem, which is set in the `properties` dictionary of either the <ListDataItem> or\n<ItemTemplate>.\n",
                    "prototype": {
                        "BLUE": {
                            "!doc": "The cell when selected has a blue background. This is the default value.",
                            "!type": "numder"
                        },
                        "GRAY": {
                            "!doc": "The cell when selected has a gray background.",
                            "!type": "numder"
                        },
                        "NONE": {
                            "!doc": "The cell has no distinct style for when it is selected.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype"
                    }
                },
                "MODAL_PRESENTATION_FORMSHEET": {
                    "!doc": "Window width and height are smaller than those of the screen and the view is centered on \nthe screen.\n",
                    "!type": "numder"
                },
                "MODAL_PRESENTATION_PAGESHEET": {
                    "!doc": "Window height is the height of the screen and width is equal to screen width in a portrait \norientation.\n",
                    "!type": "numder"
                },
                "AnimationStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPhone.AnimationStyle",
                    "!doc": "A set of constants for the animation styles used for view transitions.",
                    "prototype": {
                        "NONE": {
                            "!doc": "No animation.",
                            "!type": "numder"
                        },
                        "FLIP_FROM_LEFT": {
                            "!doc": "Flip from left to right during a transition animation.",
                            "!type": "numder"
                        },
                        "FLIP_FROM_RIGHT": {
                            "!doc": "Flip from right to left during a transition animation.",
                            "!type": "numder"
                        },
                        "CURL_DOWN": {
                            "!doc": "Curl downwards during a transition animation.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "CURL_UP": {
                            "!doc": "Curl upwards during a transition animation.",
                            "!type": "numder"
                        }
                    }
                }
            },
            "createFacebook": {
                "!type": "fn() -> +Titanium.Facebook"
            },
            "createLikes": {
                "!type": "fn() -> +Modules.Cloud.Likes"
            },
            "URL_ERROR_HOST_LOOKUP": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> when a host name cannot be resolved, such as via a DNS lookup error.",
                "!type": "numder"
            },
            "createUserNotificationSettings": {
                "!type": "fn() -> +UserNotificationSettings"
            },
            "URL_ERROR_FILE_NOT_FOUND": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> when a requested file does not exist on the host.",
                "!type": "numder"
            },
            "create2DMatrix": {
                "!doc": "Creates and returns an instance of <Titanium.UI.2DMatrix>.",
                "!type": "fn(parameters: +MatrixCreationDict) -> +Titanium.UI.2DMatrix"
            },
            "BLEND_MODE_SOFT_LIGHT": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "ANIMATION_CURVE_EASE_IN_OUT": {
                "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts\nslowly, and speeds up, then slows down at the end of the animation.\n",
                "!type": "numder"
            },
            "createTitanium": {
                "!type": "fn() -> +Titanium"
            },
            "createCloud": {
                "!type": "fn() -> +Modules.Cloud"
            },
            "createCloudPushNotificationErrorArg": {
                "!type": "fn() -> +CloudPushNotificationErrorArg"
            },
            "URL_ERROR_FILE": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> for a failure to access a file resource on a host, except \"file not found\", which has its own constant.",
                "!type": "numder"
            },
            "createCollisionBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.CollisionBehavior"
            },
            "3DMatrix": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.3DMatrix",
                "!doc": "The 3D Matrix is an object for holding values for a 3D affine transform.",
                "prototype": {
                    "m11": {
                        "!doc": "The entry at position [1,1] in the matrix.",
                        "!type": "numder"
                    },
                    "m13": {
                        "!doc": "The entry at position [1,3] in the matrix.",
                        "!type": "numder"
                    },
                    "m12": {
                        "!doc": "The entry at position [1,2] in the matrix.",
                        "!type": "numder"
                    },
                    "m44": {
                        "!doc": "The entry at position [4,4] in the matrix.",
                        "!type": "numder"
                    },
                    "scale": {
                        "!doc": "Returns a matrix constructed by scaling this matrix.",
                        "!type": "fn(sx: numder, sy: numder, sz: numder) -> +Titanium.UI.3DMatrix"
                    },
                    "invert": {
                        "!doc": "Returns a matrix constructed by inverting this matrix.",
                        "!type": "fn() -> +Titanium.UI.3DMatrix"
                    },
                    "m34": {
                        "!doc": "The entry at position [3,4] in the matrix.",
                        "!type": "numder"
                    },
                    "m33": {
                        "!doc": "The entry at position [3,3] in the matrix.",
                        "!type": "numder"
                    },
                    "m32": {
                        "!doc": "The entry at position [3,2] in the matrix.",
                        "!type": "numder"
                    },
                    "m31": {
                        "!doc": "The entry at position [3,1] in the matrix.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "translate": {
                        "!doc": "Returns a matrix constructed by translating an existing matrix.",
                        "!type": "fn(tx: numder, ty: numder, tz: numder) -> +Titanium.UI.3DMatrix"
                    },
                    "multiply": {
                        "!doc": "Returns a matrix constructed by combining two existing matrix.",
                        "!type": "fn(t2: +Titanium.UI.3DMatrix) -> +Titanium.UI.3DMatrix"
                    },
                    "rotate": {
                        "!doc": "Returns a matrix constructed by rotating this matrix.",
                        "!type": "fn(angle: numder, x: numder, y: numder, z: numder) -> +Titanium.UI.3DMatrix"
                    },
                    "m24": {
                        "!doc": "The entry at position [2,4] in the matrix.",
                        "!type": "numder"
                    },
                    "m43": {
                        "!doc": "The entry at position [4,3] in the matrix.",
                        "!type": "numder"
                    },
                    "m41": {
                        "!doc": "The entry at position [4,1] in the matrix.",
                        "!type": "numder"
                    },
                    "m21": {
                        "!doc": "The entry at position [2,1] in the matrix.",
                        "!type": "numder"
                    },
                    "m22": {
                        "!doc": "The entry at position [2,2] in the matrix.",
                        "!type": "numder"
                    },
                    "m23": {
                        "!doc": "The entry at position [2,3] in the matrix.",
                        "!type": "numder"
                    },
                    "m42": {
                        "!doc": "The entry at position [4,2] in the matrix.",
                        "!type": "numder"
                    },
                    "m14": {
                        "!doc": "The entry at position [1,4] in the matrix.",
                        "!type": "numder"
                    }
                }
            },
            "createActivityResult": {
                "!type": "fn() -> +ActivityResult"
            },
            "createPushSchedules": {
                "!type": "fn() -> +Modules.Cloud.PushSchedules"
            },
            "AUTOLINK_EMAIL_ADDRESSES": {
                "!doc": "Converts strings formatted as email addresses into clickable links.",
                "!type": "numder"
            },
            "AUTOLINK_MAP_ADDRESSES": {
                "!doc": "Converts strings formatted as addresses into clickable links.",
                "!type": "numder"
            },
            "createCloudSocialIntegrationsResponse": {
                "!type": "fn() -> +CloudSocialIntegrationsResponse"
            },
            "ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT": {
                "!doc": "Use with <Attribute.value> to write text left to right.\n",
                "!type": "numder"
            },
            "createCameraMediaItemType": {
                "!type": "fn() -> +CameraMediaItemType"
            },
            "createLocationResults": {
                "!type": "fn() -> +LocationResults"
            },
            "createLocationCoordinates": {
                "!type": "fn() -> +LocationCoordinates"
            },
            "UNIT_MM": {
                "!doc": "Unit constant representing units in millimeters.",
                "!type": "string"
            },
            "createListViewContentInsetOption": {
                "!type": "fn() -> +ListViewContentInsetOption"
            },
            "createTableViewRow": {
                "!type": "fn() -> +Titanium.UI.TableViewRow"
            },
            "createServiceIntentOptions": {
                "!type": "fn() -> +ServiceIntentOptions"
            },
            "ATTRIBUTE_FONT": {
                "!doc": "Use with <Attribute.type> to specify a font.\n",
                "!type": "numder"
            },
            "currentWindow": {
                "!doc": "The active window associated with the executing JavaScript context.",
                "!type": "+Titanium.UI.Window"
            },
            "PickerRow": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.PickerRow",
                "!doc": "A picker row, representing a selectable item in a <Titanium.UI.Picker>. \n",
                "prototype": {
                    "color": {
                        "!doc": "Color of the item text, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "add": {
                        "!doc": "Adds a child view to this picker row, to provide a custom row.",
                        "!type": "fn(view: +Titanium.UI.View)"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "font": {
                        "!doc": "Font to use for the item text.",
                        "!type": "+Font"
                    },
                    "title": {
                        "!doc": "Item text.",
                        "!type": "string"
                    }
                }
            },
            "createScrollableView": {
                "!type": "fn() -> +Titanium.UI.ScrollableView"
            },
            "createCheckins": {
                "!type": "fn() -> +Modules.Cloud.Checkins"
            },
            "ImageView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ImageView",
                "!doc": "A view to display a single image or series of animated images. \n",
                "prototype": {
                    "enableZoomControls": {
                        "!doc": "Show zoom controls when the user touches the image view.",
                        "!type": "bool"
                    },
                    "repeatCount": {
                        "!doc": "Number of times to repeat the image animation.",
                        "!type": "numder"
                    },
                    "image": {
                        "!doc": "Image to display.",
                        "!type": "string"
                    },
                    "preventDefaultImage": {
                        "!doc": "Prevent the default image from being displayed while loading a remote image. This property \nis ignored when the `defaultImage` property is set.\n",
                        "!type": "bool"
                    },
                    "paused": {
                        "!doc": "Indicates whether the animation is paused.",
                        "!type": "bool"
                    },
                    "duration": {
                        "!doc": "Amount of time in milliseconds to animate one cycle.",
                        "!type": "numder"
                    },
                    "images": {
                        "!doc": "Array of images to animate, defined using local filesystem paths, `File` objects, \nremote URLs (Android only), or `Blob` objects containing image data. `Blob` and `File` \nobjects are not supported on Mobile Web.\n",
                        "!type": "[string]"
                    },
                    "pause": {
                        "!doc": "Pauses a running animation. Use `resume` method to continue.",
                        "!type": "fn()"
                    },
                    "start": {
                        "!doc": "Starts the image animation. On Android and Mobile Web, also resets `index` to the first image.\n",
                        "!type": "fn()"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "hires": {
                        "!doc": "Set to `true` to prevent scaling of 2x-resolution remote images for Retina \ndisplays.\n",
                        "!type": "bool"
                    },
                    "resume": {
                        "!doc": "Resumes an animation from a `pause` state.",
                        "!type": "fn()"
                    },
                    "defaultImage": {
                        "!doc": "Local path to the default image to display while loading a remote image.",
                        "!type": "string"
                    },
                    "stop": {
                        "!doc": "Stops a running animation. On iOS and Mobile Web, also resets `index` to the first image.",
                        "!type": "fn()"
                    },
                    "decodeRetries": {
                        "!doc": "Number of times to retry decoding the bitmap at a URL.\n",
                        "!type": "numder"
                    },
                    "reverse": {
                        "!doc": "Run the animation in reverse.",
                        "!type": "bool"
                    },
                    "url": {
                        "!doc": "URL to the image to display.",
                        "!type": "string"
                    },
                    "toBlob": {
                        "!doc": "Returns the image as a Blob object.",
                        "!type": "fn() -> +Titanium.Blob"
                    },
                    "remove": {
                        "!type": "fn()"
                    },
                    "autorotate": {
                        "!doc": "Indicates whether the image should be rotated based on exif orientation data. \nBy default, this is false on android and true on iOS. \nThe auto rotate behavior is not supported on Mobile Web.\n",
                        "!type": "bool"
                    },
                    "animating": {
                        "!doc": "Indicates whether animation is running.\n",
                        "!type": "bool"
                    }
                }
            },
            "createLabel": {
                "!type": "fn() -> +Titanium.UI.Label"
            },
            "PICKER_TYPE_COUNT_DOWN_TIMER": {
                "!doc": "Use a picker with a countdown timer appearance, showing hours and minutes.",
                "!type": "numder"
            },
            "createSearchBar": {
                "!type": "fn() -> +Titanium.UI.SearchBar"
            },
            "ProgressBar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ProgressBar",
                "!doc": "A progress bar.",
                "prototype": {
                    "style": {
                        "!doc": "Style of the progress bar.",
                        "!type": "numder"
                    },
                    "min": {
                        "!doc": "Minimum value of the progress bar.",
                        "!type": "numder"
                    },
                    "color": {
                        "!doc": "Color of the progress bar text, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "max": {
                        "!doc": "Maximum value of the progress bar.",
                        "!type": "numder"
                    },
                    "value": {
                        "!doc": "Current value of the progress bar.",
                        "!type": "numder"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "remove": {
                        "!type": "fn()"
                    },
                    "message": {
                        "!doc": "Progress bar text.",
                        "!type": "string"
                    },
                    "font": {
                        "!doc": "Font for the progress bar text.",
                        "!type": "+Font"
                    }
                }
            },
            "createFacebookGraphResponsev1": {
                "!type": "fn() -> +FacebookGraphResponsev1"
            },
            "createEvent": {
                "!type": "fn() -> +Titanium.Event"
            },
            "createMusicLibraryOptionsType": {
                "!type": "fn() -> +MusicLibraryOptionsType"
            },
            "Notification": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Notification",
                "!doc": "An Android Toast-style notification.",
                "prototype": {
                    "show": {
                        "!doc": "Show the notification.",
                        "!type": "fn()"
                    },
                    "verticalMargin": {
                        "!doc": "Vertical placement of the notifcation, *as a fraction of the screen height*.",
                        "!type": "numder"
                    },
                    "yOffset": {
                        "!doc": "Y offset from the default position, in pixels.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "duration": {
                        "!doc": "Determines how long the notification stays on screen.",
                        "!type": "numder"
                    },
                    "message": {
                        "!doc": "Notification text to display.",
                        "!type": "string"
                    },
                    "horizontalMargin": {
                        "!doc": "Horizontal placement of the notification, *as a fraction of the screen width*.",
                        "!type": "numder"
                    },
                    "xOffset": {
                        "!doc": "X offset from the default position, in pixels.",
                        "!type": "numder"
                    }
                }
            },
            "ATTRIBUTE_UNDERLINE_STYLE_NONE": {
                "!doc": "Use with <Attribute.value> to not draw a line.\n",
                "!type": "numder"
            },
            "createAccelerometer": {
                "!type": "fn() -> +Titanium.Accelerometer"
            },
            "ATTRIBUTE_EXPANSION": {
                "!doc": "Use with <Attribute.type> to stretch the text horizontally.\n",
                "!type": "numder"
            },
            "createUserNotificationCategory": {
                "!type": "fn() -> +Titanium.App.iOS.UserNotificationCategory"
            },
            "createItemTemplate": {
                "!type": "fn() -> +ItemTemplate"
            },
            "createWebView": {
                "!type": "fn() -> +Titanium.UI.WebView"
            },
            "createAnchorAttachmentBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.AnchorAttachmentBehavior"
            },
            "PORTRAIT": {
                "!doc": "Orientation constant for portrait mode orientation.",
                "!type": "numder"
            },
            "UNIT_CM": {
                "!doc": "Unit constant representing units in centimeters.",
                "!type": "string"
            },
            "RETURNKEY_GOOGLE": {
                "!doc": "Set the return key text to \"Google\".",
                "!type": "numder"
            },
            "createAndroid": {
                "!type": "fn() -> +Titanium.UI.Android"
            },
            "PICKER_TYPE_PLAIN": {
                "!doc": "Use a plain picker (for values other than date or time).",
                "!type": "numder"
            },
            "RETURNKEY_GO": {
                "!doc": "Set the return key text to \"Go\".",
                "!type": "numder"
            },
            "createPhotoGalleryOptionsType": {
                "!type": "fn() -> +PhotoGalleryOptionsType"
            },
            "createPopover": {
                "!type": "fn() -> +Titanium.UI.iPad.Popover"
            },
            "createToolbar": {
                "!type": "fn() -> +Titanium.UI.iOS.Toolbar"
            },
            "createCloudPushSchedulesResponse": {
                "!type": "fn() -> +CloudPushSchedulesResponse"
            },
            "createCloudGeoFenceResponse": {
                "!type": "fn() -> +CloudGeoFenceResponse"
            },
            "AUTOLINK_PHONE_NUMBERS": {
                "!doc": "Converts strings formatted as phone numbers into clickable links.",
                "!type": "numder"
            },
            "ListView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ListView",
                "!doc": "A list view is used to present information, organized in to sections and items,\nin a vertically-scrolling view.\n",
                "prototype": {
                    "templates": {
                        "!doc": "Contain key-value pairs mapping a style name (key) to an <ItemTemplate> (value).",
                        "!type": "+Dictionary"
                    },
                    "headerView": {
                        "!doc": "List view header as a view that will be rendered instead of a label.",
                        "!type": "+Titanium.UI.View"
                    },
                    "separatorStyle": {
                        "!doc": "Separator style constant.",
                        "!type": "numder"
                    },
                    "allowsSelection": {
                        "!doc": "Determines whether this item can be selected.",
                        "!type": "bool"
                    },
                    "setContentInsets": {
                        "!doc": "Sets this list view's content insets.",
                        "!type": "fn(edgeInsets: +ListViewEdgeInsets, animated: +ListViewContentInsetOption)"
                    },
                    "pullView": {
                        "!doc": "View positioned above the first row that is only revealed when the user drags the list view contents down.",
                        "!type": "+Titanium.UI.View"
                    },
                    "headerDividersEnabled": {
                        "!doc": "When set to false, the ListView will not draw the divider after the header view.",
                        "!type": "bool"
                    },
                    "keepSectionsInSearch": {
                        "!doc": "Determines if the section information is displayed in the search results when using the `searchText` property.",
                        "!type": "bool"
                    },
                    "deselectItem": {
                        "!doc": "Deselects a specific item.",
                        "!type": "fn(sectionIndex: numder, itemIndex: numder)"
                    },
                    "insertSectionAt": {
                        "!doc": "Inserts a section or an array of sections at a specific index.",
                        "!type": "fn(sectionIndex: numder, section: +Titanium.UI.ListSection, animation: +ListViewAnimationProperties)"
                    },
                    "addMarker": {
                        "!doc": "Adds a reference item in the list view.",
                        "!type": "fn(markerProps: +ListViewMarkerProps)"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "defaultItemTemplate": {
                        "!doc": "Sets the default template for list data items that do not specify the `template` property.",
                        "!type": "string"
                    },
                    "footerTitle": {
                        "!doc": "List view footer title.",
                        "!type": "string"
                    },
                    "sections": {
                        "!doc": "Sections of this list.",
                        "!type": "+Array<Titanium.UI.ListSection>"
                    },
                    "canScroll": {
                        "!doc": "Determines if the list view can scroll in response to user actions.",
                        "!type": "bool"
                    },
                    "deleteSectionAt": {
                        "!doc": "Deletes an existing section.",
                        "!type": "fn(sectionIndex: numder, animation: +ListViewAnimationProperties)"
                    },
                    "appendSection": {
                        "!doc": "Appends a single section or an array of sections to the end of the list.",
                        "!type": "fn(section: +Titanium.UI.ListSection, animation: +ListViewAnimationProperties)"
                    },
                    "footerDividersEnabled": {
                        "!doc": "When set to false, the ListView will not draw the divider before the footer view.",
                        "!type": "bool"
                    },
                    "style": {
                        "!doc": "Style of the list view.",
                        "!type": "numder"
                    },
                    "sectionCount": {
                        "!doc": "Number of sections in this list view.",
                        "!type": "numder"
                    },
                    "scrollToItem": {
                        "!doc": "Scrolls to a specific item.",
                        "!type": "fn(sectionIndex: numder, itemIndex: numder, animation: +ListViewAnimationProperties)"
                    },
                    "caseInsensitiveSearch": {
                        "!doc": "Determines if the search performed is case insensitive.",
                        "!type": "bool"
                    },
                    "editing": {
                        "!doc": "Determines if the list view is currently in editing mode.",
                        "!type": "bool"
                    },
                    "willScrollOnStatusTap": {
                        "!doc": "Controls the scroll-to-top gesture.",
                        "!type": "bool"
                    },
                    "footerView": {
                        "!doc": "List view footer as a view that will be rendered instead of a label.",
                        "!type": "+Titanium.UI.View"
                    },
                    "replaceSectionAt": {
                        "!doc": "Replaces an existing section.",
                        "!type": "fn(sectionIndex: numder, section: +Titanium.UI.ListSection, animation: +ListViewAnimationProperties)"
                    },
                    "sectionIndexTitles": {
                        "!doc": "Array of objects (with `title` and `index` properties) to control the list view index.",
                        "!type": "[+ListViewIndexEntry]"
                    },
                    "showVerticalScrollIndicator": {
                        "!doc": "Determines whether this list view displays a vertical scroll indicator.",
                        "!type": "bool"
                    },
                    "searchText": {
                        "!doc": "The string to use as the search parameter.",
                        "!type": "string"
                    },
                    "selectItem": {
                        "!doc": "Selects an item in the list using the specified item and section indices.",
                        "!type": "fn(sectionIndex: numder, itemIndex: numder)"
                    },
                    "pruneSectionsOnEdit": {
                        "!doc": "Determines if empty sections are retained when the user completes editing the list view.",
                        "!type": "bool"
                    },
                    "scrollIndicatorStyle": {
                        "!doc": "Style of the scrollbar.",
                        "!type": "numder"
                    },
                    "refreshControl": {
                        "!doc": "View positioned above the first row that is only revealed when the user drags the list view contents down.",
                        "!type": "+Titanium.UI.RefreshControl"
                    },
                    "separatorColor": {
                        "!doc": "Separator line color between rows, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "searchView": {
                        "!doc": "Search field to use for the list view.",
                        "!type": "+Titanium.UI.SearchBar"
                    },
                    "headerTitle": {
                        "!doc": "List view header title.",
                        "!type": "string"
                    },
                    "setMarker": {
                        "!doc": "Sets a reference item in the list view.",
                        "!type": "fn(markerProps: +ListViewMarkerProps)"
                    },
                    "separatorInsets": {
                        "!doc": "The insets for list view separators (applies to all cells). This property is applicable on iOS 7 and greater.",
                        "!type": "+Dictionary"
                    }
                }
            },
            "PICKER_TYPE_DATE_AND_TIME": {
                "!doc": "Use a date and time picker.",
                "!type": "numder"
            },
            "TEXT_VERTICAL_ALIGNMENT_BOTTOM": {
                "!doc": "Align text to the bottom of the view.",
                "!type": "numder"
            },
            "2DMatrix": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.2DMatrix",
                "!doc": "The 2D Matrix is an object for holding values for an affine transformation matrix.",
                "prototype": {
                    "a": {
                        "!doc": "The entry at position [1,1] in the matrix.",
                        "!type": "numder"
                    },
                    "c": {
                        "!doc": "The entry at position [2,1] in the matrix.",
                        "!type": "numder"
                    },
                    "b": {
                        "!doc": "The entry at position [1,2] in the matrix.",
                        "!type": "numder"
                    },
                    "d": {
                        "!doc": "The entry at position [2,2] in the matrix.",
                        "!type": "numder"
                    },
                    "tx": {
                        "!doc": "The entry at position [3,1] in the matrix.",
                        "!type": "numder"
                    },
                    "ty": {
                        "!doc": "The entry at position [3,2] in the matrix.",
                        "!type": "numder"
                    },
                    "invert": {
                        "!doc": "Returns a matrix constructed by inverting this matrix.",
                        "!type": "fn() -> +Titanium.UI.2DMatrix"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "scale": {
                        "!doc": "Returns a `2DMatrix` object that specifies a scaling animation from one scale to another.\n",
                        "!type": "fn(sx: numder, sy: numder, toSx: numder, toSy: numder) -> +Titanium.UI.2DMatrix"
                    },
                    "multiply": {
                        "!doc": "Returns a matrix constructed by combining two existing matrices.",
                        "!type": "fn(t2: +Titanium.UI.2DMatrix) -> +Titanium.UI.2DMatrix"
                    },
                    "translate": {
                        "!doc": "Returns a matrix constructed by applying a translation transform to this matrix.",
                        "!type": "fn(tx: numder, ty: numder) -> +Titanium.UI.2DMatrix"
                    },
                    "rotate": {
                        "!doc": "Returns a matrix constructed by rotating this matrix.",
                        "!type": "fn(angle: numder, toAngle: numder) -> +Titanium.UI.2DMatrix"
                    }
                }
            },
            "createListViewEdgeInsets": {
                "!type": "fn() -> +ListViewEdgeInsets"
            },
            "INHERIT": {
                "!doc": "INHERIT behavior for UI layout.",
                "!type": "string"
            },
            "createTCPSocket": {
                "!type": "fn() -> +Titanium.Network.TCPSocket"
            },
            "convertUnits": {
                "!doc": "Converts one type of unit to another using the metrics of the main display.",
                "!type": "fn(convertFromValue: string, convertToUnits: numder) -> numder"
            },
            "EXTEND_EDGE_LEFT": {
                "!doc": "Specifies that the left edge of the window can extend.",
                "!type": "numder"
            },
            "createEncodeStringDict": {
                "!type": "fn() -> +EncodeStringDict"
            },
            "MobileWeb": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.MobileWeb",
                "!doc": "The UI capabilities specific to Mobile Web. All events, methods and properties in this namespace \nwill only work on this platform.\n",
                "TableViewSeparatorStyle": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.MobileWeb.TableViewSeparatorStyle",
                    "!doc": "A set of constants for the style that can be used for the `separatorStyle` property of \n<Titanium.UI.TableView>.\n",
                    "prototype": {
                        "NONE": {
                            "!doc": "The separator cell has no distinct style.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "SINGLE_LINE": {
                            "!doc": "The separator cell has a single line running across its width (default.)",
                            "!type": "numder"
                        }
                    }
                },
                "NavigationGroup": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.MobileWeb.NavigationGroup",
                    "!doc": "A Navigation Group implements a specialized view that manages the navigation of hierarchical \ncontent.\n",
                    "prototype": {
                        "navBarAtTop": {
                            "!doc": "Specifies whether the navigation should be at the top of the screen or the bottom of the screen.",
                            "!type": "bool"
                        },
                        "window": {
                            "!doc": "Root window to add to this navigation group.",
                            "!type": "+Titanium.UI.Window"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "open": {
                            "!doc": "Opens a window within the navigation group.",
                            "!type": "fn(window: +Titanium.UI.Window, options: +Dictionary)"
                        },
                        "close": {
                            "!doc": "Closes a window and removes it from the navigation group.",
                            "!type": "fn(window: +Titanium.UI.Window, options: +Dictionary)"
                        }
                    }
                }
            },
            "createMessages": {
                "!type": "fn() -> +Modules.Cloud.Messages"
            },
            "EXTEND_EDGE_TOP": {
                "!doc": "Specifies that the top edge of the window can extend.",
                "!type": "numder"
            },
            "LIST_ITEM_TEMPLATE_CONTACTS": {
                "!doc": "A built-in style for an item with a right-aligned title label on the left side of the cell,\nwhich is next to a left-aligned subtitle label.\n",
                "!type": "numder"
            },
            "createCloudPlacesResponse": {
                "!type": "fn() -> +CloudPlacesResponse"
            },
            "createPickerRow": {
                "!type": "fn() -> +Titanium.UI.PickerRow"
            },
            "createTabGroup": {
                "!type": "fn() -> +Titanium.UI.TabGroup"
            },
            "BLEND_MODE_DARKEN": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createIntent": {
                "!type": "fn() -> +Titanium.Android.Intent"
            },
            "KEYBOARD_EMAIL": {
                "!doc": "Use a keyboard suitable for composing email, with the standard keyboard layout.",
                "!type": "numder"
            },
            "createCloudObjectsResponse": {
                "!type": "fn() -> +CloudObjectsResponse"
            },
            "createMapPointType": {
                "!type": "fn() -> +MapPointType"
            },
            "TEXT_ALIGNMENT_LEFT": {
                "!doc": "Left align text.",
                "!type": "numder"
            },
            "Animation": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Animation",
                "!doc": "The `Animation` object defines an animation that can be applied to a view.",
                "prototype": {
                    "transition": {
                        "!doc": "Transition type to use during a transition animation.",
                        "!type": "numder"
                    },
                    "color": {
                        "!doc": "Value of the `color` property at the end of the animation, as a color name or hex triplet.\n",
                        "!type": "string"
                    },
                    "height": {
                        "!doc": "Value of the `height` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "visible": {
                        "!doc": "Value of the `visible` property at the end of the animation.",
                        "!type": "bool"
                    },
                    "right": {
                        "!doc": "Value of the `right` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "duration": {
                        "!doc": "Duration of the animation, in milliseconds.",
                        "!type": "numder"
                    },
                    "bottom": {
                        "!doc": "Value of the `bottom` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "top": {
                        "!doc": "Value of the `top` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "transform": {
                        "!doc": "Animate the view from its current tranform to the specified transform.",
                        "!type": "+Titanium.UI.2DMatrix"
                    },
                    "delay": {
                        "!doc": "Delay, in milliseconds before starting the animation.",
                        "!type": "numder"
                    },
                    "width": {
                        "!doc": "Value of the `width` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "backgroundColor": {
                        "!doc": "Value of the `backgroundColor` property at the end of the animation, as a color name \nor hex triplet.\n",
                        "!type": "string"
                    },
                    "opacity": {
                        "!doc": "Value of the `opacity` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "repeat": {
                        "!doc": "Number of times the animation should be performed.",
                        "!type": "numder"
                    },
                    "autoreverse": {
                        "!doc": "Specifies if the animation should be replayed in reverse upon completion.",
                        "!type": "bool"
                    },
                    "zIndex": {
                        "!doc": "Value of the `zIndex` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "anchorPoint": {
                        "!doc": "Coordinate of the view about which to pivot an animation.",
                        "!type": "+Point"
                    },
                    "center": {
                        "!doc": "Value of the `center` property at the end of the animation.",
                        "!type": "+Object"
                    },
                    "opaque": {
                        "!doc": "Value of the `opaque` property at the end of the animation.",
                        "!type": "bool"
                    },
                    "curve": {
                        "!doc": "Animation curve or easing function to apply to the animation.",
                        "!type": "numder"
                    },
                    "left": {
                        "!doc": "Value of the `left` property at the end of the animation.",
                        "!type": "numder"
                    },
                    "view": {
                        "!doc": "New view to transition to.",
                        "!type": "+Titanium.UI.View"
                    }
                }
            },
            "createMovieSize": {
                "!type": "fn() -> +MovieSize"
            },
            "createRouteDescription": {
                "!type": "fn() -> +RouteDescription"
            },
            "Android": {
                "hideSoftKeyboard": {
                    "!doc": "Hides the soft keyboard.\n",
                    "!type": "fn()"
                },
                "SOFT_INPUT_STATE_HIDDEN": {
                    "!doc": "Attempt to hide the soft input area (ie software keyboard) when the current heavyweight \nwindow receives focus.\n",
                    "!type": "numder"
                },
                "WEBVIEW_LOAD_DEFAULT": {
                    "!doc": "Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.\n",
                    "!type": "numder"
                },
                "!doc": "The Android-specific UI capabilities. All properties, methods and events in this namespace will \nonly work on Android systems.\n",
                "SOFT_INPUT_STATE_ALWAYS_HIDDEN": {
                    "!doc": "Always hide the soft input area (ie software keyboard) when the current heavyweight window \nreceives focus.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGBX_8888": {
                    "!doc": "Android RGBX_8888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "SOFT_INPUT_STATE_VISIBLE": {
                    "!doc": "Attempt to show the soft input area (ie software keyboard) when the current heavyweight \nwindow receives focus.\n",
                    "!type": "numder"
                },
                "SearchView": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Android.SearchView",
                    "!doc": "A specialized text field for entering search text.",
                    "prototype": {
                        "iconifiedByDefault": {
                            "!doc": "Sets the default or resting state of the search view",
                            "!type": "bool"
                        },
                        "color": {
                            "!doc": "Color of the text in this SearchView, as a color name or hex triplet.",
                            "!type": "string"
                        },
                        "iconified": {
                            "!doc": "Iconifies or expands the search view",
                            "!type": "bool"
                        },
                        "focus": {
                            "!doc": "Causes the search view to gain focus.",
                            "!type": "fn()"
                        },
                        "value": {
                            "!doc": "Value of the search view.",
                            "!type": "string"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "submitEnabled": {
                            "!doc": "Whether to display the submit button when necessary or never display.",
                            "!type": "bool"
                        },
                        "hintText": {
                            "!doc": "Text to show when the search view field is not focused.",
                            "!type": "string"
                        },
                        "blur": {
                            "!doc": "Causes the search view to lose focus.",
                            "!type": "fn()"
                        }
                    }
                },
                "WEBVIEW_LOAD_NO_CACHE": {
                    "!doc": "Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.\n",
                    "!type": "numder"
                },
                "SOFT_KEYBOARD_SHOW_ON_FOCUS": {
                    "!doc": "Attempt to show the soft keyboard when a view receives focus. Note: system can override \nrequest.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGB_888": {
                    "!doc": "Android RGB_888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "ProgressIndicator": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Android.ProgressIndicator",
                    "!doc": "A progress dialog or a horizontal progress bar in the title of the window.",
                    "prototype": {
                        "hide": {
                            "!doc": "Hides the progress indicator and stops the animation.",
                            "!type": "fn()"
                        },
                        "min": {
                            "!doc": "Minimum value of the progress bar.",
                            "!type": "numder"
                        },
                        "max": {
                            "!doc": "Maximum value of the progress bar.",
                            "!type": "numder"
                        },
                        "show": {
                            "!doc": "Shows the progress indicator and starts the animation.",
                            "!type": "fn()"
                        },
                        "cancelable": {
                            "!doc": "When `true` allows the user to cancel the progress dialog by pressing the BACK button.\n",
                            "!type": "bool"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "location": {
                            "!doc": "Location for the progress indicator.",
                            "!type": "numder"
                        },
                        "messageid": {
                            "!doc": "Key identifying a string in the locale file to use for the message text.",
                            "!type": "string"
                        },
                        "message": {
                            "!doc": "Message text.",
                            "!type": "string"
                        },
                        "type": {
                            "!doc": "Type for the progress indicator.",
                            "!type": "numder"
                        },
                        "canceledOnTouchOutside": {
                            "!doc": "When `cancelable` is set to `true` and this is set to `true`, the dialog is canceled when touched outside the window's bounds.\n",
                            "!type": "bool"
                        }
                    }
                },
                "OVER_SCROLL_NEVER": {
                    "!doc": "Never allow a user to over-scroll this view.",
                    "!type": "numder"
                },
                "SWITCH_STYLE_TOGGLEBUTTON": {
                    "!doc": "Display a toggle button.",
                    "!type": "numder"
                },
                "SOFT_INPUT_STATE_ALWAYS_VISIBLE": {
                    "!doc": "Always show the soft input area (ie software keyboard) when the current heavyweight window \nreceives focus.\n",
                    "!type": "numder"
                },
                "OVER_SCROLL_ALWAYS": {
                    "!doc": "Always allow a user to over-scroll this view, provided it is a view that can scroll.",
                    "!type": "numder"
                },
                "SWITCH_STYLE_SWITCH": {
                    "!doc": "Display a switch.",
                    "!type": "numder"
                },
                "openPreferences": {
                    "!doc": "Opens an application preferences dialog, using the native Android system settings interface, \ndefined by the platform-specific `preferences.xml` and `array.xml` files.\n",
                    "!type": "fn()"
                },
                "PIXEL_FORMAT_UNKNOWN": {
                    "!doc": "Android UNKNOWN pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "SOFT_INPUT_STATE_UNSPECIFIED": {
                    "!doc": "Use the system-default behavior to determine whether to show the soft input area \n(ie software keyboard) when the current heavyweight window receives focus.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGBA_8888": {
                    "!doc": "Android RGBA_8888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "LINKIFY_ALL": {
                    "!doc": "Converts all detectable types of data into clickable links.",
                    "!type": "numder"
                },
                "LINKIFY_MAP_ADDRESSES": {
                    "!doc": "Converts strings formatted as addresses into clickable links.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Android",
                "OVER_SCROLL_IF_CONTENT_SCROLLS": {
                    "!doc": "Allow a user to over-scroll this view only if the content is large enough to meaningfully scroll, provided it is a view that can scroll.",
                    "!type": "numder"
                },
                "SOFT_INPUT_ADJUST_PAN": {
                    "!doc": "Pan the current heavyweight window when the input method (ie software keyboard) is shown, to \nensure that its contents are not obscured.\n",
                    "!type": "numder"
                },
                "PROGRESS_INDICATOR_DETERMINANT": {
                    "!doc": "Used with the <Titanium.UI.Android.ProgressIndicator.type> property to indicate an ongoing \nactivity of determinate length.\n",
                    "!type": "numder"
                },
                "SWITCH_STYLE_CHECKBOX": {
                    "!doc": "Display a checkbox.",
                    "!type": "numder"
                },
                "SOFT_INPUT_ADJUST_UNSPECIFIED": {
                    "!doc": "Use the system-default behavior to determine how the soft input area (ie software keyboard) \nis accomodated by the current heavyweight window when it receives focus (default.)\n",
                    "!type": "numder"
                },
                "LINKIFY_PHONE_NUMBERS": {
                    "!doc": "Converts strings formatted as phone numbers into clickable links.",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_OPAQUE": {
                    "!doc": "Android OPAQUE pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "WEBVIEW_PLUGINS_ON_DEMAND": {
                    "!doc": "Display a placeholder and only load plugins when user selects it.",
                    "!type": "numder"
                },
                "LINKIFY_WEB_URLS": {
                    "!doc": "Converts strings formatted as URLs into clickable links.",
                    "!type": "numder"
                },
                "WEBVIEW_LOAD_CACHE_ELSE_NETWORK": {
                    "!doc": "Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_A_8": {
                    "!doc": "Android A_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_TRANSLUCENT": {
                    "!doc": "Android TRANSLUCENT pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGBA_5551": {
                    "!doc": "Android RGBA_5551 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_TRANSPARENT": {
                    "!doc": "Android A_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can \nimprove image clarity and performance.\n",
                    "!type": "numder"
                },
                "PROGRESS_INDICATOR_DIALOG": {
                    "!doc": "Display <Titanium.UI.Android.ProgressIndicator> as a modal dialog. (default)",
                    "!type": "numder"
                },
                "SOFT_KEYBOARD_DEFAULT_ON_FOCUS": {
                    "!doc": "Use Android default behavior to handle keyboard visibility when a view receives focus. \n(default)\n",
                    "!type": "numder"
                },
                "WEBVIEW_PLUGINS_OFF": {
                    "!doc": "Use with [WebView.pluginState](Titanium.UI.WebView.pluginState) to disable plugins in a web view.\n",
                    "!type": "numder"
                },
                "LINKIFY_EMAIL_ADDRESSES": {
                    "!doc": "Converts strings formatted as email addresses into clickable links.",
                    "!type": "numder"
                },
                "WEBVIEW_PLUGINS_ON": {
                    "!doc": "Use with [WebView.pluginState](Titanium.UI.WebView.pluginState) to enable plugins in a web view.\n",
                    "!type": "numder"
                },
                "PROGRESS_INDICATOR_STATUS_BAR": {
                    "!doc": "Display <Titanium.UI.Android.ProgressIndicator> as a horizontal progress bar in the title of \nthe window.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_LA_88": {
                    "!doc": "Android LA_88 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "SOFT_INPUT_ADJUST_RESIZE": {
                    "!doc": "Resize the current heavyweight window when the input method (ie software keyboard) is shown, \nto ensure that its contents are not obscured.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_L_8": {
                    "!doc": "Android L_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGB_332": {
                    "!doc": "Android RGB_332 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGBA_4444": {
                    "!doc": "Android RGBA_4444 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                },
                "WEBVIEW_LOAD_CACHE_ONLY": {
                    "!doc": "Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.\n",
                    "!type": "numder"
                },
                "SOFT_KEYBOARD_HIDE_ON_FOCUS": {
                    "!doc": "Attempt to hide the soft keyboard when a view receives focus. Note: system can override \nrequest.\n",
                    "!type": "numder"
                },
                "PROGRESS_INDICATOR_INDETERMINANT": {
                    "!doc": "Used with the <Titanium.UI.Android.ProgressIndicator.type> property to indicate an ongoing \nactivity of indeterminate length. (default)\n",
                    "!type": "numder"
                },
                "PIXEL_FORMAT_RGB_565": {
                    "!doc": "Android RGB_565 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format \ncan improve image clarity and performance.\n",
                    "!type": "numder"
                }
            },
            "createSuccessResponse": {
                "!type": "fn() -> +SuccessResponse"
            },
            "createViewTemplate": {
                "!type": "fn() -> +ViewTemplate"
            },
            "createContacts": {
                "!type": "fn() -> +Titanium.Contacts"
            },
            "PickerColumn": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.PickerColumn",
                "!doc": "A picker column, representing a selectable group of items in a <Titanium.UI.Picker>.",
                "prototype": {
                    "rows": {
                        "!doc": "Rows of this column.",
                        "!type": "+Array<Titanium.UI.PickerRow>"
                    },
                    "selectedRow": {
                        "!doc": "The selected row in this column.",
                        "!type": "+Titanium.UI.PickerRow"
                    },
                    "removeRow": {
                        "!doc": "Removes a row from this column.",
                        "!type": "fn(row: +Titanium.UI.PickerRow)"
                    },
                    "rowCount": {
                        "!doc": "Number of rows in this column.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "addRow": {
                        "!doc": "Adds a row to this column.",
                        "!type": "fn(row: +Titanium.UI.PickerRow)"
                    },
                    "font": {
                        "!doc": "Font to use for text.",
                        "!type": "+Font"
                    }
                }
            },
            "ANIMATION_CURVE_EASE_OUT": {
                "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts\nquickly, then slows down at the end of the animation.\n",
                "!type": "numder"
            },
            "createNavigationGroup": {
                "!type": "fn() -> +Titanium.UI.MobileWeb.NavigationGroup"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI",
            "Toolbar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Toolbar",
                "!doc": "An iOS toolbar, which can contain buttons and other controls.",
                "prototype": {
                    "items": {
                        "!doc": "An array of buttons (or other widgets) contained in the toolbar.",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "borderBottom": {
                        "!doc": "If `true`, a border is drawn on the bottom of the toolbar.",
                        "!type": "bool"
                    },
                    "barColor": {
                        "!doc": "Background color for the toolbar, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "borderTop": {
                        "!doc": "If `true`, a border is drawn on the top of the toolbar.",
                        "!type": "bool"
                    },
                    "translucent": {
                        "!doc": "If `true`, a translucent background color is used for the toolbar.",
                        "!type": "bool"
                    }
                }
            },
            "AUTOLINK_ALL": {
                "!doc": "Converts all detectable types of data into clickable links.",
                "!type": "numder"
            },
            "createSlider": {
                "!type": "fn() -> +Titanium.UI.Slider"
            },
            "Button": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Button",
                "!doc": "A button widget that has four states: normal, disabled, focused and selected.\n",
                "prototype": {
                    "color": {
                        "!doc": "Default button text color, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "image": {
                        "!doc": "Image to display on the button, specified as a local path, URL or a `Blob`.",
                        "!type": "string"
                    },
                    "titleid": {
                        "!doc": "Key identifying a string from the locale file to use for the button title.",
                        "!type": "string"
                    },
                    "backgroundDisabledImage": {
                        "!doc": "Background image for the button in its disabled state, specified as a local file path \nor URL. \n",
                        "!type": "string"
                    },
                    "font": {
                        "!doc": "Font to use for the button text.",
                        "!type": "+Font"
                    },
                    "style": {
                        "!doc": "Style constant for the button, as defined in <Titanium.UI.iPhone.SystemButtonStyle>.",
                        "!type": "numder"
                    },
                    "title": {
                        "!doc": "Button title.",
                        "!type": "string"
                    },
                    "shadowColor": {
                        "!doc": "Shadow color of the [title](Titanium.UI.Button.title), as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "disabledColor": {
                        "!doc": "Text color of the button in its disabled state, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "shadowRadius": {
                        "!doc": "Shadow radius of the [title](Titanium.UI.Button.title).",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "backgroundImage": {
                        "!doc": "Background image for the button in its normal state, specified as a local file path or URL. \n",
                        "!type": "string"
                    },
                    "backgroundSelectedImage": {
                        "!doc": "Background image for the button in its selected state, specified as a local file \npath or URL. \n",
                        "!type": "string"
                    },
                    "backgroundFocusedImage": {
                        "!doc": "Background image for the button in its focused state, specified as a local file path \nor URL. \n",
                        "!type": "string"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "shadowOffset": {
                        "!doc": "Shadow offset of the [title](Titanium.UI.Button.title), as a dictionary with the properties `x` and `y`.",
                        "!type": "+Dictionary"
                    },
                    "textAlign": {
                        "!doc": "Text alignment, specified using one of the <Titanium.UI> text alignment constants.\n",
                        "!type": "string"
                    },
                    "verticalAlign": {
                        "!doc": "Vertical alignment for the text field, specified using one of the \nvertical alignment constants from <Titanium.UI>.\n",
                        "!type": "numder"
                    },
                    "selectedColor": {
                        "!doc": "Button text color used to indicate the selected state, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "enabled": {
                        "!doc": "Set to `true` to enable the button, `false` to disable the button.",
                        "!type": "bool"
                    },
                    "remove": {
                        "!type": "fn()"
                    },
                    "systemButton": {
                        "!doc": "Specifies an iOS system button appearance, as defined in <Titanium.UI.iPhone.SystemButton>.",
                        "!type": "numder"
                    }
                }
            },
            "createListViewAnimationProperties": {
                "!type": "fn() -> +ListViewAnimationProperties"
            },
            "EmailDialog": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.EmailDialog",
                "!doc": "An email dialog is a modal window that allows users to compose and send an email.\n",
                "prototype": {
                    "isSupported": {
                        "!doc": "Indicates whether sending email is supported by the system.",
                        "!type": "fn() -> bool"
                    },
                    "ccRecipients": {
                        "!doc": "Recipients of the email included via the `CC` (Carbon Copy) field.",
                        "!type": "[string]"
                    },
                    "addAttachment": {
                        "!doc": "Adds an attachment.",
                        "!type": "fn(attachment: +Titanium.Blob)"
                    },
                    "open": {
                        "!doc": "Opens this email dialog.",
                        "!type": "fn(properties: +Object)"
                    },
                    "toRecipients": {
                        "!doc": "Recipients of the email included via the main `TO` field.",
                        "!type": "[string]"
                    },
                    "html": {
                        "!doc": "Determines whether the email message, specifically the contents of \n[messageBody](Titanium.UI.EmailDialog.messageBody), should be sent as HTML content type \nrather than plain text.\n",
                        "!type": "bool"
                    },
                    "messageBody": {
                        "!doc": "Email message body.",
                        "!type": "string"
                    },
                    "barColor": {
                        "!doc": "Bar color of the email dialog window, as a color name or hex triplet.\n",
                        "!type": "string"
                    },
                    "FAILED": {
                        "!doc": "Constant for the `FAILED` status result.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "bccRecipients": {
                        "!doc": "Recipients of the email included via the `BCC` (Blind Carbon Copy) field.",
                        "!type": "[string]"
                    },
                    "CANCELLED": {
                        "!doc": "Constant for the `CANCELLED` status result. On Android, this property exists but is not used.",
                        "!type": "numder"
                    },
                    "SAVED": {
                        "!doc": "Constant for the `SAVED` status result. On Android, this property exists but is not used.",
                        "!type": "numder"
                    },
                    "SENT": {
                        "!doc": "Constant for the `SENT` status result.",
                        "!type": "numder"
                    },
                    "subject": {
                        "!doc": "Subject line for the email.",
                        "!type": "string"
                    }
                }
            },
            "createProxy": {
                "!type": "fn() -> +Titanium.Proxy"
            },
            "createNavigationWindow": {
                "!type": "fn() -> +Titanium.UI.iOS.NavigationWindow"
            },
            "ListSection": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ListSection",
                "!doc": "A list section is a container within a list view used to organize list items.",
                "prototype": {
                    "headerView": {
                        "!doc": "View to use for this section header.",
                        "!type": "+Titanium.UI.View"
                    },
                    "insertItemsAt": {
                        "!doc": "Inserts data entries to the list section at the specified index.",
                        "!type": "fn(itemIndex: numder, dataItems: [+ListDataItem], animation: +ListViewAnimationProperties)"
                    },
                    "setItems": {
                        "!doc": "Sets the data entries in the list section.",
                        "!type": "fn(dataItems: [+ListDataItem], animation: +ListViewAnimationProperties)"
                    },
                    "footerView": {
                        "!doc": "View to use for this section footer.",
                        "!type": "+Titanium.UI.View"
                    },
                    "items": {
                        "!doc": "Items of this list section.",
                        "!type": "[+ListDataItem]"
                    },
                    "getItemAt": {
                        "!doc": "Returns the item entry from the list view at the specified index.",
                        "!type": "fn(itemIndex: numder)"
                    },
                    "deleteItemsAt": {
                        "!doc": "Removes count entries from the list section at the specified index.",
                        "!type": "fn(itemIndex: numder, count: numder, animation: +ListViewAnimationProperties)"
                    },
                    "headerTitle": {
                        "!doc": "Title of this section header.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "updateItemAt": {
                        "!doc": "Updates an item at the specified index.\n",
                        "!type": "fn(index: numder, dataItem: +ListDataItem, animation: +ListViewAnimationProperties)"
                    },
                    "footerTitle": {
                        "!doc": "Title of this section footer.",
                        "!type": "string"
                    },
                    "replaceItemsAt": {
                        "!doc": "Removes count entries from the list section at the specified index,\nthen inserts data entries to the list section at the same index.\n",
                        "!type": "fn(index: numder, count: numder, dataItems: [+ListDataItem], animation: +ListViewAnimationProperties)"
                    },
                    "appendItems": {
                        "!doc": "Appends the data entries to the end of the list section.",
                        "!type": "fn(dataItems: [+ListDataItem], animation: +ListViewAnimationProperties)"
                    }
                }
            },
            "BLEND_MODE_DESTINATION_IN": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createMatrixCreationDict": {
                "!type": "fn() -> +MatrixCreationDict"
            },
            "createGroup": {
                "!type": "fn() -> +Titanium.Contacts.Group"
            },
            "KEYBOARD_NUMBERS_PUNCTUATION": {
                "!doc": "Use a keyboard with numbers and punctuation only, with the standard keyboard layout.",
                "!type": "numder"
            },
            "createString": {
                "!type": "fn() -> +Global.String"
            },
            "createACLs": {
                "!type": "fn() -> +Modules.Cloud.ACLs"
            },
            "!doc": "The main <Titanium.UI> module.",
            "createSwitch": {
                "!type": "fn() -> +Titanium.UI.Switch"
            },
            "createAnimator": {
                "!type": "fn() -> +Titanium.UI.iOS.Animator"
            },
            "createCreateBufferArgs": {
                "!type": "fn() -> +CreateBufferArgs"
            },
            "createCloudPushNotificationsQueryChannelResponse": {
                "!type": "fn() -> +CloudPushNotificationsQueryChannelResponse"
            },
            "ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT": {
                "!doc": "Use with <Attribute.value> to draw an alternating line of dashes and dots.\n",
                "!type": "numder"
            },
            "createModule": {
                "!type": "fn() -> +Titanium.Module"
            },
            "createCloudChatsResponse": {
                "!type": "fn() -> +CloudChatsResponse"
            },
            "createGradientColorRef": {
                "!type": "fn() -> +GradientColorRef"
            },
            "createtextFieldSelectedParams": {
                "!type": "fn() -> +textFieldSelectedParams"
            },
            "TEXT_AUTOCAPITALIZATION_ALL": {
                "!doc": "Auto-capitalize all text in the input field.",
                "!type": "numder"
            },
            "createBarItemType": {
                "!type": "fn() -> +BarItemType"
            },
            "createDecodeStringDict": {
                "!type": "fn() -> +DecodeStringDict"
            },
            "createDocumentViewer": {
                "!type": "fn() -> +Titanium.UI.iPad.DocumentViewer"
            },
            "createEmails": {
                "!type": "fn() -> +Modules.Cloud.Emails"
            },
            "backgroundColor": {
                "!doc": "Sets the background color of the master view (when there are no windows or other top-level \ncontrols displayed).\n",
                "!type": "string"
            },
            "createBonjourBrowser": {
                "!type": "fn() -> +Titanium.Network.BonjourBrowser"
            },
            "PICKER_TYPE_DATE": {
                "!doc": "Use a date picker.",
                "!type": "numder"
            },
            "createMediaScannerResponse": {
                "!type": "fn() -> +MediaScannerResponse"
            },
            "createConnectedCallbackArgs": {
                "!type": "fn() -> +ConnectedCallbackArgs"
            },
            "BLEND_MODE_DESTINATION_ATOP": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createListViewMarkerProps": {
                "!type": "fn() -> +ListViewMarkerProps"
            },
            "createGlobal": {
                "!type": "fn() -> +Global"
            },
            "createLocale": {
                "!type": "fn() -> +Titanium.Locale"
            },
            "createFacebookDialogResponsev1": {
                "!type": "fn() -> +FacebookDialogResponsev1"
            },
            "createPlaces": {
                "!type": "fn() -> +Modules.Cloud.Places"
            },
            "createiOS": {
                "!type": "fn() -> +Titanium.UI.iOS"
            },
            "createAPSConnectionDelegate": {
                "!type": "fn() -> +APSConnectionDelegate"
            },
            "LANDSCAPE_LEFT": {
                "!doc": "Standard landscape orientation (home button on left).",
                "!type": "numder"
            },
            "createCookie": {
                "!type": "fn() -> +Titanium.Network.Cookie"
            },
            "createObjects": {
                "!type": "fn() -> +Modules.Cloud.Objects"
            },
            "createPhotoCollections": {
                "!type": "fn() -> +Modules.Cloud.PhotoCollections"
            },
            "PICKER_TYPE_TIME": {
                "!doc": "Use a time picker.",
                "!type": "numder"
            },
            "LIST_ACCESSORY_TYPE_DISCLOSURE": {
                "!doc": "Displays a disclosure indicator on the right side of an item in a list view.",
                "!type": "numder"
            },
            "BLEND_MODE_DESTINATION_OUT": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createTableViewIndexEntry": {
                "!type": "fn() -> +TableViewIndexEntry"
            },
            "FILL": {
                "!doc": "FILL behavior for UI layout.",
                "!type": "string"
            },
            "createGesture": {
                "!type": "fn() -> +Titanium.Gesture"
            },
            "URL_ERROR_REDIRECT_LOOP": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> when a redirect loop is detected.",
                "!type": "numder"
            },
            "KEYBOARD_APPEARANCE_DEFAULT": {
                "!doc": "Use the platform-specific default keyboard appearance.",
                "!type": "numder"
            },
            "BLEND_MODE_COPY": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createReadyStatePayload": {
                "!type": "fn() -> +ReadyStatePayload"
            },
            "createCloudPushNotificationSuccessArg": {
                "!type": "fn() -> +CloudPushNotificationSuccessArg"
            },
            "createEmailDialog": {
                "!type": "fn() -> +Titanium.UI.EmailDialog"
            },
            "TableView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableView",
                "!doc": "A table view is used to present information, organized in sections and rows, in a \nvertically-scrolling view.\n",
                "prototype": {
                    "headerView": {
                        "!doc": "Table view header as a view that will be rendered instead of a label.",
                        "!type": "+Titanium.UI.View"
                    },
                    "separatorStyle": {
                        "!doc": "Separator style constant.",
                        "!type": "numder"
                    },
                    "allowsSelection": {
                        "!doc": "Determines whether this table's rows can be selected.",
                        "!type": "bool"
                    },
                    "scrollToIndex": {
                        "!doc": "Scrolls the table view to ensure that the specified row is on screen.",
                        "!type": "fn(index: numder, animation: +TableViewAnimationProperties)"
                    },
                    "moveable": {
                        "!doc": "Determines the rows' default moveable behavior, which allows them to be re-ordered by the \nuser when the table is in `editing` or `moving` mode.\n",
                        "!type": "bool"
                    },
                    "scrollToTop": {
                        "!doc": "Scrolls the table to a specific top position where 0 is the topmost y position in the \ntable view.\n",
                        "!type": "fn(top: numder, animation: +TableViewAnimationProperties)"
                    },
                    "insertRowAfter": {
                        "!doc": "Inserts a row after another row.",
                        "!type": "fn(index: numder, row: +Titanium.UI.TableViewRow, animation: +TableViewAnimationProperties)"
                    },
                    "insertSectionAfter": {
                        "!doc": "Inserts a section after another section.",
                        "!type": "fn(index: numder, section: +Titanium.UI.TableViewSection, animation: +TableViewAnimationProperties)"
                    },
                    "searchAsChild": {
                        "!doc": "Determines whether the [SearchBar](Titanium.UI.SearchBar) or [SearchView](Titanium.UI.Android.SearchView) appears as part of the TableView.",
                        "!type": "bool"
                    },
                    "setContentInsets": {
                        "!doc": "Sets this tableview's content insets.",
                        "!type": "fn(edgeInsets: +TableViewEdgeInsets, animated: +TableViewContentInsetOption)"
                    },
                    "allowsSelectionDuringEditing": {
                        "!doc": "Determines whether this table's rows can be selected while editing the table.",
                        "!type": "bool"
                    },
                    "headerDividersEnabled": {
                        "!doc": "When set to false, the ListView will not draw the divider after the header view.",
                        "!type": "bool"
                    },
                    "updateRow": {
                        "!doc": "Updates an existing row, optionally with animation.",
                        "!type": "fn(index: numder, row: +Titanium.UI.TableViewRow, animation: +TableViewAnimationProperties)"
                    },
                    "index": {
                        "!doc": "Array of objects (with `title` and `index` properties) to control the table view index.",
                        "!type": "[+TableViewIndexEntry]"
                    },
                    "style": {
                        "!doc": "Style of the table view, specified using one of the constants from \n<Titanium.UI.iPhone.TableViewStyle>.\n",
                        "!type": "numder"
                    },
                    "scrollsToTop": {
                        "!doc": "Controls whether the scroll-to-top gesture is effective.",
                        "!type": "bool"
                    },
                    "minRowHeight": {
                        "!doc": "Minimum row height for table view rows.",
                        "!type": "numder"
                    },
                    "insertSectionBefore": {
                        "!doc": "Inserts a section before another section.",
                        "!type": "fn(index: numder, section: +Titanium.UI.TableViewSection, animation: +TableViewAnimationProperties)"
                    },
                    "selectRow": {
                        "!doc": "Programmatically selects a row. In Android, it sets the currently selected item. If in touch mode,\nthe item will not be selected but it will still be positioned appropriately. If the specified \nselection position is less than 0, then the item at position 0 will be selected.\n",
                        "!type": "fn(row: numder)"
                    },
                    "deleteRow": {
                        "!doc": "Deletes an existing row.",
                        "!type": "fn(row: numder, animation: +TableViewAnimationProperties)"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "setHeaderPullView": {
                        "!doc": "Sets the value of the [Titanium.UI.TableView.headerPullView] property.",
                        "!type": "fn(view: +Titanium.UI.View)"
                    },
                    "filterAttribute": {
                        "!doc": "Filter attribute to be used when searching.",
                        "!type": "string"
                    },
                    "backgroundColor": {
                        "!doc": "Background color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "footerTitle": {
                        "!doc": "Table view footer title.",
                        "!type": "string"
                    },
                    "updateSection": {
                        "!doc": "Updates an existing section, optionally with animation.",
                        "!type": "fn(index: numder, section: +Titanium.UI.TableViewSection, animation: +TableViewAnimationProperties)"
                    },
                    "filterCaseInsensitive": {
                        "!doc": "Determines whether the search is case insensitive.",
                        "!type": "bool"
                    },
                    "setData": {
                        "!doc": "Sets the data in the table.",
                        "!type": "fn(data: +Array<Titanium.UI.TableViewRow>, animation: +TableViewAnimationProperties)"
                    },
                    "deselectRow": {
                        "!doc": "Programmatically deselects a row.",
                        "!type": "fn(row: numder)"
                    },
                    "hideSearchOnSelection": {
                        "!doc": "Determines whether the search field should hide on completion.",
                        "!type": "bool"
                    },
                    "footerDividersEnabled": {
                        "!doc": "When set to false, the ListView will not draw the divider before the footer view.",
                        "!type": "bool"
                    },
                    "sections": {
                        "!doc": "Sections of this table.",
                        "!type": "+Array<Titanium.UI.TableViewSection>"
                    },
                    "appendSection": {
                        "!doc": "Appends a single section or an array of sections to the end of the table.",
                        "!type": "fn(section: +Titanium.UI.TableViewSection, animation: +TableViewAnimationProperties)"
                    },
                    "insertRowBefore": {
                        "!doc": "Inserts a row before another row.",
                        "!type": "fn(index: numder, row: +Titanium.UI.TableViewRow, animation: +TableViewAnimationProperties)"
                    },
                    "headerPullView": {
                        "!doc": "View positioned above the first row that is only revealed when the user drags the table \ncontents down.\n",
                        "!type": "+Titanium.UI.View"
                    },
                    "editable": {
                        "!doc": "Determines the rows' default editable behavior, which allows them to be deleted by the user \nwhen the table is in `editing` or `moving` mode.\n",
                        "!type": "bool"
                    },
                    "showVerticalScrollIndicator": {
                        "!doc": "Determines whether this table view displays a vertical scroll indicator.",
                        "!type": "bool"
                    },
                    "separatorInsets": {
                        "!doc": "The insets for table view separators (applies to all cells). This property is applicable on iOS 7 and greater.",
                        "!type": "+Dictionary"
                    },
                    "moving": {
                        "!doc": "Determines whether row moving mode is active.\n",
                        "!type": "bool"
                    },
                    "sectionCount": {
                        "!doc": "Number of sections in this table view.",
                        "!type": "numder"
                    },
                    "maxRowHeight": {
                        "!doc": "Maximum row height for table view rows.",
                        "!type": "numder"
                    },
                    "overScrollMode": {
                        "!doc": "Determines the behavior when the user overscrolls the view.",
                        "!type": "numder"
                    },
                    "editing": {
                        "!doc": "Determines whether row editing mode is active.\n",
                        "!type": "bool"
                    },
                    "data": {
                        "!doc": "Rows of the table view.",
                        "!type": "+Dictionary"
                    },
                    "appendRow": {
                        "!doc": "Appends a single row or an array of rows to the end of the table.",
                        "!type": "fn(row: +Titanium.UI.TableViewRow, animation: +TableViewAnimationProperties)"
                    },
                    "scrollable": {
                        "!doc": "If `true`, the tableview can be scrolled.",
                        "!type": "bool"
                    },
                    "search": {
                        "!doc": "Search field to use for the table view.",
                        "!type": "+Titanium.UI.SearchBar"
                    },
                    "rowHeight": {
                        "!doc": "Default row height for table view rows.",
                        "!type": "numder"
                    },
                    "deleteSection": {
                        "!doc": "Deletes an existing section.",
                        "!type": "fn(section: numder, animation: +TableViewAnimationProperties)"
                    },
                    "footerView": {
                        "!doc": "Table view footer as a view that will be rendered instead of a label.",
                        "!type": "+Titanium.UI.View"
                    },
                    "scrollIndicatorStyle": {
                        "!doc": "Style of the scrollbar.",
                        "!type": "numder"
                    },
                    "refreshControl": {
                        "!doc": "View positioned above the first row that is only revealed when the user drags the list view contents down.",
                        "!type": "+Titanium.UI.RefreshControl"
                    },
                    "separatorColor": {
                        "!doc": "Separator line color between rows, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "headerTitle": {
                        "!doc": "Table view header title.",
                        "!type": "string"
                    },
                    "filterAnchored": {
                        "!doc": "Determines whether the search is limited to the start of the string",
                        "!type": "bool"
                    },
                    "searchHidden": {
                        "!doc": "Determines whether the search field is visible.",
                        "!type": "bool"
                    }
                }
            },
            "createEncodeNumberDict": {
                "!type": "fn() -> +EncodeNumberDict"
            },
            "ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT": {
                "!doc": "Use with <Attribute.value> to draw an alternating line of dashes and two dots.\n",
                "!type": "numder"
            },
            "createReadCallbackArgs": {
                "!type": "fn() -> +ReadCallbackArgs"
            },
            "createCloudPushNotificationsShowChannelResponse": {
                "!type": "fn() -> +CloudPushNotificationsShowChannelResponse"
            },
            "KEYBOARD_URL": {
                "!doc": "Use an keyboard optimized for entering URLs, with the standard keyboard layout.",
                "!type": "numder"
            },
            "createshowContactsParams": {
                "!type": "fn() -> +showContactsParams"
            },
            "ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT": {
                "!doc": "Use with <Attribute.value> to write text right to left.\n",
                "!type": "numder"
            },
            "createListSection": {
                "!type": "fn() -> +Titanium.UI.ListSection"
            },
            "AUTODETECT_ALL": {
                "!doc": "Converts all detectable types of data into clickable links.",
                "!type": "numder"
            },
            "createshadowDict": {
                "!type": "fn() -> +shadowDict"
            },
            "EXTEND_EDGE_RIGHT": {
                "!doc": "Specifies that the right edge of the window can extend.",
                "!type": "numder"
            },
            "createAttribute": {
                "!type": "fn() -> +Titanium.UI.iOS.Attribute"
            },
            "createOptionDialog": {
                "!type": "fn() -> +Titanium.UI.OptionDialog"
            },
            "UNIT_DIP": {
                "!doc": "Unit constant representing units in density-independent pixels.",
                "!type": "string"
            },
            "createAcceptDict": {
                "!type": "fn() -> +AcceptDict"
            },
            "createCloudPhotoCollectionsResponse": {
                "!type": "fn() -> +CloudPhotoCollectionsResponse"
            },
            "createMediaQueryType": {
                "!type": "fn() -> +MediaQueryType"
            },
            "KEYBOARD_ASCII": {
                "!doc": "Use an ASCII keyboard, with the standard keyboard layout.",
                "!type": "numder"
            },
            "createClipboard": {
                "!type": "fn() -> +Titanium.UI.Clipboard"
            },
            "createLocationProvider": {
                "!type": "fn() -> +Titanium.Geolocation.Android.LocationProvider"
            },
            "createCloudStreamProgress": {
                "!type": "fn() -> +CloudStreamProgress"
            },
            "ATTRIBUTE_STROKE_COLOR": {
                "!doc": "Use with <Attribute.type> to specify a color for the stroke text.\n",
                "!type": "numder"
            },
            "createBonjourService": {
                "!type": "fn() -> +Titanium.Network.BonjourService"
            },
            "createCloudEmailsResponse": {
                "!type": "fn() -> +CloudEmailsResponse"
            },
            "createFilesystem": {
                "!type": "fn() -> +Titanium.Filesystem"
            },
            "createReferenceInsets": {
                "!type": "fn() -> +ReferenceInsets"
            },
            "createCloudUsersSecureResponse": {
                "!type": "fn() -> +CloudUsersSecureResponse"
            },
            "createPushNotificationSuccessArg": {
                "!type": "fn() -> +PushNotificationSuccessArg"
            },
            "BLEND_MODE_SOURCE_ATOP": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createAnalytics": {
                "!type": "fn() -> +Titanium.Analytics"
            },
            "createLocationRule": {
                "!type": "fn() -> +Titanium.Geolocation.Android.LocationRule"
            },
            "Switch": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Switch",
                "!doc": "An on/off switch control.",
                "prototype": {
                    "style": {
                        "!doc": "Style of the switch.",
                        "!type": "numder"
                    },
                    "verticalAlign": {
                        "!doc": "Vertical alignment for the text field.",
                        "!type": "numder"
                    },
                    "title": {
                        "!doc": "Text to display next to the switch, when the checkbox style is in use.",
                        "!type": "string"
                    },
                    "color": {
                        "!doc": "Color to use for switch text, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "enabled": {
                        "!doc": "Determines whether the switch is enabled.",
                        "!type": "bool"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "value": {
                        "!doc": "Indicates whether the switch has been turned on or off by the user. May also be set \nprogrammatically.\n",
                        "!type": "bool"
                    },
                    "tintColor": {
                        "!doc": "The color used to tint the outline of the switch when it is turned off.",
                        "!type": "string"
                    },
                    "titleOn": {
                        "!doc": "Text to display on the switch in its \"on\" state, when the toggle button style is in use.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "remove": {
                        "!type": "fn()"
                    },
                    "thumbTintColor": {
                        "!doc": "The color used to tint the appearance of the thumb.",
                        "!type": "string"
                    },
                    "titleOff": {
                        "!doc": "Text to display on the switch in its \"off\" state, when the toggle button style is in use.",
                        "!type": "string"
                    },
                    "font": {
                        "!doc": "Font to use for the switch text.",
                        "!type": "+Font"
                    },
                    "textAlign": {
                        "!doc": "Horizontal text alignment of the switch title.\n",
                        "!type": "string"
                    },
                    "onTintColor": {
                        "!doc": "The color used to tint the appearance of the switch when it is turned on.",
                        "!type": "string"
                    }
                }
            },
            "createPlatform": {
                "!type": "fn() -> +Titanium.Platform"
            },
            "createXML": {
                "!type": "fn() -> +Titanium.XML"
            },
            "TabGroup": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TabGroup",
                "!doc": "A tabbed group of windows.",
                "prototype": {
                    "activeTabBackgroundImage": {
                        "!doc": "Default background image for the active tab.",
                        "!type": "string"
                    },
                    "getActiveTab": {
                        "!doc": "Gets the currently-active tab.",
                        "!type": "fn() -> +Titanium.UI.Tab"
                    },
                    "tabs": {
                        "!doc": "Tabs managed by the tab group.\n",
                        "!type": "+Array<Titanium.UI.Tab>"
                    },
                    "activeTab": {
                        "!doc": "Active tab.",
                        "!type": "+Titanium.UI.Tab"
                    },
                    "tabsBackgroundImage": {
                        "!doc": "Default background image for tabs.",
                        "!type": "string"
                    },
                    "tabsBackgroundSelectedColor": {
                        "!doc": "Default background selected color for tabs, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "barColor": {
                        "!doc": "Default navigation bar color (typically for the **More** tab), as a color name or hex triplet.\n",
                        "!type": "string"
                    },
                    "tabsTintColor": {
                        "!doc": "The tintColor to apply to the tabs. This property is applicable on iOS 7 and greater.",
                        "!type": "string"
                    },
                    "tabDividerColor": {
                        "!doc": "Color of the divider between tabs, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "exitOnClose": {
                        "!doc": "Boolean value indicating if the application should exit when closing the tab group, whether via Android\nback button or the [close](Titanium.UI.TabGroup.close) method.\n",
                        "!type": "bool"
                    },
                    "close": {
                        "!doc": "Closes the tab group and removes it from the UI.",
                        "!type": "fn()"
                    },
                    "open": {
                        "!doc": "Opens the tab group and makes it visible.",
                        "!type": "fn()"
                    },
                    "tabsBackgroundFocusedImage": {
                        "!doc": "Default background focused image for tabs.",
                        "!type": "string"
                    },
                    "windowSoftInputMode": {
                        "!doc": "Determines how the tab group is treated when a soft input method (such as a virtual keyboard) \nis displayed.\n",
                        "!type": "numder"
                    },
                    "swipeable": {
                        "!doc": "Boolean value indicating if tab navigation can be done by swipes, in addition to tab clicks.\n",
                        "!type": "bool"
                    },
                    "activeTabBackgroundDisabledColor": {
                        "!doc": "Default background disabled color for the active tab, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "activeTabBackgroundSelectedColor": {
                        "!doc": "Default background selected color for the active tab, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "tabsAtBottom": {
                        "!doc": "Determines whether the tabs should be positioned at the top rather than the bottom of the \nscreen.\n",
                        "!type": "bool"
                    },
                    "title": {
                        "!doc": "Title for this tabGroup.",
                        "!type": "string"
                    },
                    "activeTabBackgroundColor": {
                        "!doc": "Default background color for the active tab, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "tabsBackgroundColor": {
                        "!doc": "Default background color for inactive tabs, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "setActiveTab": {
                        "!doc": "Selects the currently active tab in a tab group.",
                        "!type": "fn(indexOrObject: numder)"
                    },
                    "shadowImage": {
                        "!doc": "Image of the shadow placed between the tab bar and the content area.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "activeTabIconTint": {
                        "!doc": "Color applied to active tabs icons, as a color name or hex triplet, where the tab's activeIcon was not defined.",
                        "!type": "string"
                    },
                    "disableTabNavigation": {
                        "!doc": "Disable (or re-enable) tab navigation. If tab navigation is disabled, the tabs are hidden and\nthe last selected tab window is shown.\n",
                        "!type": "fn(disable: bool)"
                    },
                    "activeTabBackgroundFocusedColor": {
                        "!doc": "Default background focused color for the active tab, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "navTintColor": {
                        "!doc": "The tintColor to apply to the navigation bar (typically for the **More** tab). This property is applicable on iOS 7 and greater.",
                        "!type": "string"
                    },
                    "getTabs": {
                        "!doc": "Gets all tabs that are managed by the tab group.",
                        "!type": "fn() -> +Array<Titanium.UI.Tab>"
                    },
                    "removeTab": {
                        "!doc": "Removes a tab from the tab group.",
                        "!type": "fn(tab: +Titanium.UI.Tab)"
                    },
                    "activeTabBackgroundFocusedImage": {
                        "!doc": "Default background focused image for the active tab.",
                        "!type": "string"
                    },
                    "allowUserCustomization": {
                        "!doc": "Allow the user to reorder tabs in the tab group using the **Edit** button on the **More** \ntab.\n",
                        "!type": "bool"
                    },
                    "tabHeight": {
                        "!doc": "Height of the tabs.",
                        "!type": "numder"
                    },
                    "activeTabBackgroundSelectedImage": {
                        "!doc": "Default background selected image for the active tab.",
                        "!type": "string"
                    },
                    "tabsBackgroundDisabledColor": {
                        "!doc": "Default background disabled color for tabs, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "tabsBackgroundSelectedImage": {
                        "!doc": "Default background selected image for tabs.",
                        "!type": "string"
                    },
                    "tabsBackgroundDisabledImage": {
                        "!doc": "Default background disabled image for tabs.",
                        "!type": "string"
                    },
                    "editButtonTitle": {
                        "!doc": "Title for the edit button on the **More** tab.",
                        "!type": "string"
                    },
                    "translucent": {
                        "!doc": "Boolean value indicating if the nav bar (typically for the **More** tab), is translucent.",
                        "!type": "bool"
                    },
                    "smoothScrollOnTabClick": {
                        "!doc": "Boolean value indicating if changing pages by tab clicks is animated.\n",
                        "!type": "bool"
                    },
                    "navBarHidden": {
                        "!doc": "Hide the nav bar (`true`) or show the nav bar (`false`) for this tab group.",
                        "!type": "bool"
                    },
                    "titleAttributes": {
                        "!doc": "Title text attributes of the window to be applied on the **More** tab.",
                        "!type": "+titleAttributesParams"
                    },
                    "activity": {
                        "!doc": "Reference to the Android Activity object associated with this tab group.\n",
                        "!type": "+Titanium.Android.Activity"
                    },
                    "addTab": {
                        "!doc": "Adds a tab to the tab group.",
                        "!type": "fn(tab: +Titanium.UI.Tab)"
                    },
                    "activeTabBackgroundDisabledImage": {
                        "!doc": "Default background disabled image for the active tab.",
                        "!type": "string"
                    },
                    "tabsBackgroundFocusedColor": {
                        "!doc": "Default background focused color for tabs, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "tabDividerWidth": {
                        "!doc": "Width of the divider between tabs.",
                        "!type": "numder"
                    }
                }
            },
            "BLEND_MODE_SCREEN": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createCloudClientsResponse": {
                "!type": "fn() -> +CloudClientsResponse"
            },
            "createMusicLibraryResponseType": {
                "!type": "fn() -> +MusicLibraryResponseType"
            },
            "BLEND_MODE_SOURCE_OUT": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createNotification": {
                "!type": "fn() -> +Titanium.UI.Notification"
            },
            "Window": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Window",
                "!doc": "The Window is an empty drawing surface or container.",
                "prototype": {
                    "tabBarHidden": {
                        "!doc": "Boolean value indicating if the tab bar should be hidden. \n",
                        "!type": "bool"
                    },
                    "right": {
                        "!doc": "Window's right position, in platform-specific units.",
                        "!type": "numder"
                    },
                    "windowPixelFormat": {
                        "!doc": "Set the pixel format for the Activity's Window.",
                        "!type": "numder"
                    },
                    "exitOnClose": {
                        "!doc": "Boolean value indicating if the application should exit when the Android\nBack button is pressed while the window is being shown or when the window \nis closed programmatically.\n",
                        "!type": "bool"
                    },
                    "showNavBar": {
                        "!doc": "Makes the navigation bar visible.",
                        "!type": "fn(options: +Dictionary)"
                    },
                    "titleid": {
                        "!doc": "Key identifying a string from the locale file to use for the window title.",
                        "!type": "string"
                    },
                    "rightNavButtons": {
                        "!doc": "An Array of views to show in the right nav bar area.",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "barColor": {
                        "!doc": "Background color for the nav bar, as a color name or hex triplet.\n",
                        "!type": "string"
                    },
                    "includeOpaqueBars": {
                        "!doc": "Specifies if the edges should extend beyond opaque bars (navigation bar, tab bar, toolbar). Valid on iOS 7 and greater.\n",
                        "!type": "bool"
                    },
                    "titleImage": {
                        "!doc": "Image to show in the title area of the nav bar, specified as a local file path or URL.",
                        "!type": "string"
                    },
                    "windowFlags": {
                        "!doc": "Additional flags to set on the Activity Window.",
                        "!type": "numder"
                    },
                    "hideShadow": {
                        "!doc": "Set this to true to hide the shadow image of the navigation bar.",
                        "!type": "bool"
                    },
                    "close": {
                        "!doc": "Closes the window.",
                        "!type": "fn(params: +Dictionary<Titanium.UI.Animation>)"
                    },
                    "open": {
                        "!doc": "Opens the window.",
                        "!type": "fn(params: +openWindowParams)"
                    },
                    "orientation": {
                        "!doc": "Current orientation of the window.",
                        "!type": "numder"
                    },
                    "autoAdjustScrollViewInsets": {
                        "!doc": "Specifies whether or not the view controller should automatically adjust its scroll view insets. Valid on iOS 7 and greater.\n",
                        "!type": "bool"
                    },
                    "fullscreen": {
                        "!doc": "Boolean value indicating if the window is fullscreen.",
                        "!type": "bool"
                    },
                    "windowSoftInputMode": {
                        "!doc": "Determines whether a heavyweight window's soft input area (ie software keyboard) is visible\nas it receives focus and how the window behaves in order to accomodate it while keeping its\ncontents in view.\n",
                        "!type": "numder"
                    },
                    "flagSecure": {
                        "!doc": "Treat the content of the window as secure, preventing it from appearing in screenshots or from being viewed on non-secure displays.\n",
                        "!type": "bool"
                    },
                    "bottom": {
                        "!doc": "Window's bottom position, in platform-specific units.",
                        "!type": "numder"
                    },
                    "top": {
                        "!doc": "Window's top position, in platform-specific units.",
                        "!type": "numder"
                    },
                    "leftNavButtons": {
                        "!doc": "An Array of views to show in the left nav bar area.",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "statusBarStyle": {
                        "!doc": "The status bar style associated with this window.",
                        "!type": "numder"
                    },
                    "backButtonTitle": {
                        "!doc": "Title for the back button. This is only valid when the window is a child of a tab.",
                        "!type": "string"
                    },
                    "titlepromptid": {
                        "!doc": "Key identifying a string from the locale file to use for the window title prompt.",
                        "!type": "string"
                    },
                    "shadowImage": {
                        "!doc": "Shadow image for the navigation bar, specified as a URL to a local image..",
                        "!type": "string"
                    },
                    "theme": {
                        "!doc": "Name of the theme to apply to the window.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "translucent": {
                        "!doc": "Boolean value indicating if the nav bar is translucent.",
                        "!type": "bool"
                    },
                    "backgroundColor": {
                        "!doc": "Background color of the window, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "titlePrompt": {
                        "!doc": "Title prompt for the window.",
                        "!type": "string"
                    },
                    "rightNavButton": {
                        "!doc": "View to show in the right nav bar area.",
                        "!type": "+Titanium.UI.View"
                    },
                    "navTintColor": {
                        "!doc": "The tintColor to apply to the navigation bar. This property is applicable on iOS 7 and greater.",
                        "!type": "string"
                    },
                    "opacity": {
                        "!doc": "The opacity from 0.0-1.0.",
                        "!type": "numder"
                    },
                    "hideNavBar": {
                        "!doc": "Hides the navigation bar.",
                        "!type": "fn(options: +Dictionary)"
                    },
                    "titleControl": {
                        "!doc": "View to show in the title area of the nav bar.",
                        "!type": "+Titanium.UI.View"
                    },
                    "transitionAnimation": {
                        "!doc": "Use a transition animation when opening or closing windows in a\n<Titanium.UI.iOS.NavigationWindow> or <Titanium.UI.Tab>.\n",
                        "!type": "+Titanium.Proxy"
                    },
                    "splitActionBar": {
                        "!doc": "Boolean value to enable split action bar.",
                        "!type": "bool"
                    },
                    "toolbar": {
                        "!doc": "Array of button objects to show in the window's toolbar.\n",
                        "!type": "[+Object]"
                    },
                    "barImage": {
                        "!doc": "Background image for the nav bar, specified as a URL to a local image.",
                        "!type": "string"
                    },
                    "url": {
                        "!doc": "Loads a JavaScript file from a local URL.",
                        "!type": "string"
                    },
                    "navBarHidden": {
                        "!doc": "Hides the nav bar (`true`) or shows the nav bar (`false`).",
                        "!type": "bool"
                    },
                    "title": {
                        "!doc": "Title of the window.",
                        "!type": "string"
                    },
                    "titleAttributes": {
                        "!doc": "Title text attributes of the window.",
                        "!type": "+titleAttributesParams"
                    },
                    "orientationModes": {
                        "!doc": "Array of supported orientation modes, specified using the orientation\nconstants defined in <Titanium.UI>.\n",
                        "!type": "[numder]"
                    },
                    "modal": {
                        "!doc": "Indicates to open a modal window or not.",
                        "!type": "bool"
                    },
                    "activity": {
                        "!doc": "For lightweight windows, this property returns undefined.\nFor heavyweight windows, this property contains a reference to the\nAndroid Activity object associated with this window.\n",
                        "!type": "+Titanium.Android.Activity"
                    },
                    "setToolbar": {
                        "!doc": "Sets the array of items to show in the window's toolbar.",
                        "!type": "fn(items: [+Object], params: +windowToolbarParam)"
                    },
                    "hideTabBar": {
                        "!doc": "Hides the tab bar. Must be called before opening the window.",
                        "!type": "fn()"
                    },
                    "left": {
                        "!doc": "Window's left position, in platform-specific units.",
                        "!type": "numder"
                    },
                    "backButtonTitleImage": {
                        "!doc": "The image to show as the back button. This is only valid when the window is a child of a tab.",
                        "!type": "string"
                    },
                    "extendEdges": {
                        "!doc": "An array of supported values specified using the EXTEND_EDGE constants in <Titanium.UI>. Valid on iOS 7 and greater.\n",
                        "!type": "[numder]"
                    },
                    "leftNavButton": {
                        "!doc": "View to show in the left nav bar area.",
                        "!type": "+Titanium.UI.View"
                    }
                }
            },
            "TEXT_STYLE_SUBHEADLINE": {
                "!doc": "Specifies the text style for the <Font> Object.",
                "!type": "string"
            },
            "createErrorCallbackArgs": {
                "!type": "fn() -> +ErrorCallbackArgs"
            },
            "createPlayerQueue": {
                "!type": "fn() -> +PlayerQueue"
            },
            "createcloseWindowParams": {
                "!type": "fn() -> +closeWindowParams"
            },
            "DashboardItem": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.DashboardItem",
                "!doc": "A dashboard item is a view that is displayed as an icon in a <Titanium.UI.DashboardView>.",
                "prototype": {
                    "image": {
                        "!doc": "Image or path to image to display in the item by default.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "badge": {
                        "!doc": "Integer value displayed in a badge.",
                        "!type": "numder"
                    },
                    "canDelete": {
                        "!doc": "Determines whether this item can be deleted when it edit mode.",
                        "!type": "bool"
                    },
                    "selectedImage": {
                        "!doc": "Image or path to image to display in the item as it is selected.",
                        "!type": "string"
                    }
                }
            },
            "orientation": {
                "!doc": "Updates the orientation of the current window to the specified orientation value.",
                "!type": "numder"
            },
            "ATTRIBUTE_UNDERLINE_PATTERN_SOLID": {
                "!doc": "Use with <Attribute.value> to draw a solid line.\n",
                "!type": "numder"
            },
            "ATTRIBUTE_UNDERLINE_STYLE_DOUBLE": {
                "!doc": "Use with <Attribute.value> to draw a double line.\n",
                "!type": "numder"
            },
            "BLEND_MODE_COLOR_DODGE": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "ATTRIBUTE_LETTERPRESS_STYLE": {
                "!doc": "Use with <Attribute.value> to use a letterpress text effect.\n",
                "!type": "numder"
            },
            "createMapLocationType": {
                "!type": "fn() -> +MapLocationType"
            },
            "createAdView": {
                "!type": "fn() -> +Titanium.UI.iOS.AdView"
            },
            "createPreviewImageError": {
                "!type": "fn() -> +PreviewImageError"
            },
            "createView": {
                "!type": "fn() -> +Titanium.UI.View"
            },
            "createPerson": {
                "!type": "fn() -> +Titanium.Contacts.Person"
            },
            "createCoverFlowView": {
                "!type": "fn() -> +Titanium.UI.iOS.CoverFlowView"
            },
            "AttributedString": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.AttributedString",
                "!doc": "An attributed string proxy manages character strings and associated sets of attributes (for example,\nfont and foregroundcolor) that apply to individual characters or ranges of characters in the string.\n",
                "prototype": {
                    "text": {
                        "!doc": "The text applied to the attributed string.\n",
                        "!type": "string"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "addAttribute": {
                        "!doc": "Adds an [attribute](Attribute) with the given name and value to the characters in the specified range.",
                        "!type": "fn(attribute: +Attribute)"
                    },
                    "attributes": {
                        "!doc": "An array of attributes to add.\n",
                        "!type": "[+Attribute]"
                    }
                }
            },
            "createHTTPClient": {
                "!type": "fn() -> +Titanium.Network.HTTPClient"
            },
            "createEvents": {
                "!type": "fn() -> +Modules.Cloud.Events"
            },
            "createdaysOfTheWeekDictionary": {
                "!type": "fn() -> +daysOfTheWeekDictionary"
            },
            "createCloudACLsCheckResponse": {
                "!type": "fn() -> +CloudACLsCheckResponse"
            },
            "createMapRouteType": {
                "!type": "fn() -> +MapRouteType"
            },
            "createContactsAuthorizationResponse": {
                "!type": "fn() -> +ContactsAuthorizationResponse"
            },
            "UNIT_PX": {
                "!doc": "Unit constant representing units in pixels.",
                "!type": "string"
            },
            "createGravityBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.GravityBehavior"
            },
            "createProgressBar": {
                "!type": "fn() -> +Titanium.UI.ProgressBar"
            },
            "createAcceptedCallbackArgs": {
                "!type": "fn() -> +AcceptedCallbackArgs"
            },
            "iOS": {
                "BLEND_MODE_MULTIPLY": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_LINK": {
                    "!doc": "Use with <Attribute.type> to create a link.\n",
                    "!type": "numder"
                },
                "!doc": "Apple iOS specific UI capabilities.  All properties, methods and events in this namespace will \nonly work on Apple iOS devices.\n",
                "WEBVIEW_NAVIGATIONTYPE_RELOAD": {
                    "!doc": "User tapped the reload button.",
                    "!type": "numder"
                },
                "BLEND_MODE_NORMAL": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "COLLISION_MODE_BOUNDARY": {
                    "!doc": "Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with\nboundaries only.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT": {
                    "!doc": "Use with <Attribute.value> to draw an alternating line of dashes and dots.\n",
                    "!type": "numder"
                },
                "CLIP_MODE_DISABLED": {
                    "!doc": "Use with <Titanium.UI.View.clipMode> to specify clipping behavior.\n",
                    "!type": "numder"
                },
                "SplitWindow": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.SplitWindow",
                    "!doc": "A SplitWindow is a window that manages the presentation of two side-by-side view \ncontrollers. \n",
                    "prototype": {
                        "showMasterInPortrait": {
                            "!doc": "Determines whether to show the master view in portrait orientation.",
                            "!type": "bool"
                        },
                        "setShowMasterInPortrait": {
                            "!doc": "Sets the value of the [showMasterInPortrait](Titanium.UI.iOS.SplitWindow.showMasterInPortrait) property.",
                            "!type": "fn(showMasterInPortrait: bool, animated: +animationOption)"
                        },
                        "masterView": {
                            "!doc": "View for the master view section of the SplitWindow.",
                            "!type": "+Titanium.UI.View"
                        },
                        "masterIsOverlayed": {
                            "!doc": "Determines whether to show the master view is overlayed in portrait orientation.",
                            "!type": "bool"
                        },
                        "setMasterIsOverlayed": {
                            "!doc": "Sets the value of the [masterIsOverlayed](Titanium.UI.iOS.SplitWindow.masterIsOverlayed) property.",
                            "!type": "fn(masterIsOverlayed: bool, animated: +animationOption)"
                        },
                        "portraitSplit": {
                            "!doc": "Determines the width of the `masterView` in portrait mode.",
                            "!type": "numder"
                        },
                        "landscapeSplit": {
                            "!doc": "Determines the width of the `masterView` in landscape mode.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.UI.Window.prototype",
                        "detailView": {
                            "!doc": "View for the detail view section of the SplitWindow.",
                            "!type": "+Titanium.UI.View"
                        }
                    }
                },
                "DocumentViewer": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.DocumentViewer",
                    "!doc": "A DocumentViewer provides in-app support for managing user interactions with files on the\nlocal system.\n",
                    "prototype": {
                        "url": {
                            "!doc": "URL of the document being previewed.",
                            "!type": "string"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "hide": {
                            "!doc": "Dismisses the document viewer.",
                            "!type": "fn(options: +DocumentViewerOptions)"
                        },
                        "name": {
                            "!doc": "Name of the file (without the path).",
                            "!type": "string"
                        },
                        "show": {
                            "!doc": "Displays the document viewer over the current view.",
                            "!type": "fn(options: +DocumentViewerOptions)"
                        }
                    }
                },
                "COLOR_SCROLLVIEW_BACKGROUND": {
                    "!doc": "Returns the iOS system texture used to render the area behind scrollable content.",
                    "!type": "string"
                },
                "BLEND_MODE_DESTINATION_OVER": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_HUE": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "CollisionBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.CollisionBehavior",
                    "!doc": "Dynamic behavior to support collisions between items and boundaries.",
                    "prototype": {
                        "collisionMode": {
                            "!doc": "Specifies the collision behavior.",
                            "!type": "numder"
                        },
                        "boundaryIdentifiers": {
                            "!doc": "Boundary identfiers added to this behavior.",
                            "!type": "[+BoundaryIdentifier]"
                        },
                        "items": {
                            "!doc": "Items added to this behavior.",
                            "!type": "+Array<Titanium.UI.View>"
                        },
                        "addItem": {
                            "!doc": "Adds an item to this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "addBoundary": {
                            "!doc": "Adds a boundary to this behavior.",
                            "!type": "fn(boundary: +BoundaryIdentifier)"
                        },
                        "referenceInsets": {
                            "!doc": "Insets to apply when using the animator's reference view as the boundary.",
                            "!type": "+ReferenceInsets"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "treatReferenceAsBoundary": {
                            "!doc": "Use the animator's reference view as the boundary.",
                            "!type": "bool"
                        },
                        "removeItem": {
                            "!doc": "Removes the specified item from this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "removeAllBoundaries": {
                            "!doc": "Removes all boundaries from this behavior.",
                            "!type": "fn()"
                        },
                        "removeBoundary": {
                            "!doc": "Removes the specified boundary from this behavior.",
                            "!type": "fn(boundary: +BoundaryIdentifier)"
                        }
                    }
                },
                "ATTRIBUTE_OBLIQUENESS": {
                    "!doc": "Use with <Attribute.type> to skew the text.\n",
                    "!type": "numder"
                },
                "AUTODETECT_ALL": {
                    "!doc": "Converts all detectable types of data into clickable links.",
                    "!type": "numder"
                },
                "BLEND_MODE_LIGHTEN": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_PATTERN_DASH": {
                    "!doc": "Use with <Attribute.value> to draw a dashed line.\n",
                    "!type": "numder"
                },
                "AUTODETECT_PHONE": {
                    "!doc": "Converts strings formatted as phone numbers into clickable links.",
                    "!type": "numder"
                },
                "BLEND_MODE_OVERLAY": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "COLLISION_MODE_ITEM": {
                    "!doc": "Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with items only.\n",
                    "!type": "numder"
                },
                "createTransitionAnimation": {
                    "!doc": "Creates a transition animation when opening or closing windows in a\n<Titanium.UI.iOS.NavigationWindow> or <Titanium.UI.Tab>.\n",
                    "!type": "fn(transition: +transitionAnimationParam)"
                },
                "ATTRIBUTE_STRIKETHROUGH_COLOR": {
                    "!doc": "Use with <Attribute.type> to change the color of the horizontal line.\n",
                    "!type": "numder"
                },
                "AUTODETECT_ADDRESS": {
                    "!doc": "Converts strings formatted as addresses into clickable links.",
                    "!type": "numder"
                },
                "Animator": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.Animator",
                    "!doc": "Provides support for the built-in iOS dynamic animations",
                    "prototype": {
                        "behaviors": {
                            "!doc": "Behaviors associated with this animator.",
                            "!type": "+Array<Titanium.Proxy>"
                        },
                        "stopAnimator": {
                            "!doc": "Stops the animation behaviors.",
                            "!type": "fn()"
                        },
                        "startAnimator": {
                            "!doc": "Starts the animation behaviors.",
                            "!type": "fn()"
                        },
                        "removeAllBehaviors": {
                            "!doc": "Removes all behaviors from this animator.",
                            "!type": "fn()"
                        },
                        "running": {
                            "!doc": "Returns `true` if the animator is running else `false`.",
                            "!type": "bool"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "removeBehavior": {
                            "!doc": "Removes the specified behavior from the animator.",
                            "!type": "fn(behavior: +Titanium.Proxy)"
                        },
                        "updateItemUsingCurrentState": {
                            "!doc": "Updates the animator's state information with the current state of the specified item.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "addBehavior": {
                            "!doc": "Adds a dynamic behavior to the animator.",
                            "!type": "fn(behavior: +Titanium.Proxy)"
                        },
                        "referenceView": {
                            "!doc": "Titanium View object to initialize as the reference view for the animator.",
                            "!type": "+Titanium.UI.View"
                        }
                    }
                },
                "ATTRIBUTE_BACKGROUND_COLOR": {
                    "!doc": "Use with <Attribute.type> to specify a background color.\n",
                    "!type": "numder"
                },
                "AUTODETECT_LINK": {
                    "!doc": "Converts strings formatted as URLs into clickable links.",
                    "!type": "numder"
                },
                "BLEND_MODE_DESTINATION_ATOP": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "GravityBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.GravityBehavior",
                    "!doc": "Gravitational force to apply to an item.",
                    "prototype": {
                        "angle": {
                            "!doc": "Specifies the angle of the gravity vector in radians.",
                            "!type": "numder"
                        },
                        "items": {
                            "!doc": "Items added to this behavior.",
                            "!type": "+Array<Titanium.UI.View>"
                        },
                        "addItem": {
                            "!doc": "Adds an item to this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "magnitude": {
                            "!doc": "Specifies the magnitude of the gravity vector.",
                            "!type": "numder"
                        },
                        "gravityDirection": {
                            "!doc": "Specifies the direction of the gravity vector as an x, y pair.",
                            "!type": "+Point"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "removeItem": {
                            "!doc": "Removes the specified item from this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        }
                    }
                },
                "BLEND_MODE_PLUS_DARKER": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_SOFT_LIGHT": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "PUSH_MODE_CONTINUOUS": {
                    "!doc": "Use with <Titanium.UI.iOS.PushBehavior.pushMode> to specifiy a continuous force.\n",
                    "!type": "numder"
                },
                "COLOR_VIEW_FLIPSIDE_BACKGROUND": {
                    "!doc": "Returns the iOS system texture used for the back side of a view while it is being flipped.",
                    "!type": "string"
                },
                "ANIMATION_CURVE_EASE_IN_OUT": {
                    "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts \nslowly, and speeds up, then slows down at the end of the animation.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_FOREGROUND_COLOR": {
                    "!doc": "Use with <Attribute.type> to specify a font color.\n",
                    "!type": "numder"
                },
                "AUTODETECT_NONE": {
                    "!doc": "Disables converting strings into clickable links.",
                    "!type": "numder"
                },
                "3DMatrix": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.3DMatrix",
                    "!doc": "The 3D Matrix is an object for holding values for a 3D affine transform.\n",
                    "prototype": {
                        "m11": {
                            "!doc": "The entry at position [1,1] in the matrix.",
                            "!type": "numder"
                        },
                        "m13": {
                            "!doc": "The entry at position [1,3] in the matrix.",
                            "!type": "numder"
                        },
                        "m12": {
                            "!doc": "The entry at position [1,2] in the matrix.",
                            "!type": "numder"
                        },
                        "m44": {
                            "!doc": "The entry at position [4,4] in the matrix.",
                            "!type": "numder"
                        },
                        "scale": {
                            "!doc": "Returns a matrix constructed by scaling an existing matrix.",
                            "!type": "fn(sx: numder, sy: numder, sz: numder) -> +Titanium.UI.3DMatrix"
                        },
                        "invert": {
                            "!doc": "Returns a matrix constructed by inverting an existing matrix.",
                            "!type": "fn() -> +Titanium.UI.3DMatrix"
                        },
                        "m34": {
                            "!doc": "The entry at position [3,4] in the matrix.",
                            "!type": "numder"
                        },
                        "m33": {
                            "!doc": "The entry at position [3,3] in the matrix.",
                            "!type": "numder"
                        },
                        "m32": {
                            "!doc": "The entry at position [3,2] in the matrix.",
                            "!type": "numder"
                        },
                        "m31": {
                            "!doc": "The entry at position [3,1] in the matrix.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "translate": {
                            "!doc": "Returns a matrix constructed by translating an existing matrix.",
                            "!type": "fn(tx: numder, ty: numder, tz: numder) -> +Titanium.UI.3DMatrix"
                        },
                        "multiply": {
                            "!doc": "Returns a matrix constructed by combining two existing matrices.",
                            "!type": "fn(t2: +Titanium.UI.3DMatrix) -> +Titanium.UI.3DMatrix"
                        },
                        "rotate": {
                            "!doc": "Returns a matrix constructed by rotating an existing matrix.",
                            "!type": "fn(angle: numder, x: numder, y: numder, z: numder) -> +Titanium.UI.3DMatrix"
                        },
                        "m24": {
                            "!doc": "The entry at position [2,4] in the matrix.",
                            "!type": "numder"
                        },
                        "m43": {
                            "!doc": "The entry at position [4,3] in the matrix.",
                            "!type": "numder"
                        },
                        "m41": {
                            "!doc": "The entry at position [4,1] in the matrix.",
                            "!type": "numder"
                        },
                        "m21": {
                            "!doc": "The entry at position [2,1] in the matrix.",
                            "!type": "numder"
                        },
                        "m22": {
                            "!doc": "The entry at position [2,2] in the matrix.",
                            "!type": "numder"
                        },
                        "m23": {
                            "!doc": "The entry at position [2,3] in the matrix.",
                            "!type": "numder"
                        },
                        "m42": {
                            "!doc": "The entry at position [4,2] in the matrix.",
                            "!type": "numder"
                        },
                        "m14": {
                            "!doc": "The entry at position [1,4] in the matrix.",
                            "!type": "numder"
                        }
                    }
                },
                "ViewAttachmentBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.ViewAttachmentBehavior",
                    "!doc": "Dynamic behavior to support connections between two items.",
                    "prototype": {
                        "distance": {
                            "!doc": "Distance, in points, between the two attachment points.",
                            "!type": "numder"
                        },
                        "anchorOffset": {
                            "!doc": "Offset from the center point of the anchor item for the attachment.",
                            "!type": "+Point"
                        },
                        "frequency": {
                            "!doc": "Frequency of oscillation for the behavior.",
                            "!type": "numder"
                        },
                        "item": {
                            "!doc": "Item to connect to use the attachment behavior.",
                            "!type": "+Titanium.UI.View"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "anchorItem": {
                            "!doc": "Item to use as the anchor in this behavior.",
                            "!type": "+Titanium.UI.View"
                        },
                        "damping": {
                            "!doc": "Amount of damping to apply to the attachment behavior.",
                            "!type": "numder"
                        },
                        "itemOffset": {
                            "!doc": "Offset from the center point of the item for the attachment.",
                            "!type": "+Point"
                        }
                    }
                },
                "ATTRIBUTE_WRITING_DIRECTION_NATURAL": {
                    "!doc": "Use with <Attribute.value> to use the \n[Unicode Bidirection Algorithm rules P2 and P3](http://www.unicode.org/reports/tr9/#The_Paragraph_Level)\nto determine which direction to use.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_STROKE_WIDTH": {
                    "!doc": "Use with <Attribute.type> to specify the width of the stroke text.\n",
                    "!type": "numder"
                },
                "AD_SIZE_LANDSCAPE": {
                    "!doc": "Use with [AdView.adSize](Titanium.UI.iOS.AdView.adSize) to specify a banner ad size\nappropriate for landscape orientations.\n",
                    "!type": "string"
                },
                "BLEND_MODE_DESTINATION_OUT": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT": {
                    "!doc": "Use with <Attribute.value> to write text left to right.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_STYLE_THICK": {
                    "!doc": "Use with <Attribute.value> to draw a thick line.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_SOURCE_IN": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_KERN": {
                    "!doc": "Use with <Attribute.type> to specify kerning (space between characters).\n",
                    "!type": "numder"
                },
                "BLEND_MODE_LUMINOSITY": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ANIMATION_CURVE_LINEAR": {
                    "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that proceeds \nat a constant rate.\n",
                    "!type": "numder"
                },
                "ROW_ACTION_STYLE_DEFAULT": {
                    "!doc": "The default style for <RowActionType>.",
                    "!type": "numder"
                },
                "PUSH_MODE_INSTANTANEOUS": {
                    "!doc": "Use with <Titanium.UI.iOS.PushBehavior.pushMode> to specifiy an instantaneous force.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_FONT": {
                    "!doc": "Use with <Attribute.type> to specify a font.\n",
                    "!type": "numder"
                },
                "AnchorAttachmentBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.AnchorAttachmentBehavior",
                    "!doc": "Dynamic behavior to support connections between an anchor point and an item.",
                    "prototype": {
                        "distance": {
                            "!doc": "Distance, in points, between the two attachment points.",
                            "!type": "numder"
                        },
                        "item": {
                            "!doc": "Item to connect to use the attachment behavior.",
                            "!type": "+Titanium.UI.View"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "frequency": {
                            "!doc": "Frequency of oscillation for the behavior.",
                            "!type": "numder"
                        },
                        "damping": {
                            "!doc": "Amount of damping to apply to the attachment behavior.",
                            "!type": "numder"
                        },
                        "offset": {
                            "!doc": "Offset from the center point of the item for the attachment.",
                            "!type": "+Point"
                        },
                        "anchor": {
                            "!doc": "Anchor point for the attachment behavior relative to the animator's coordinate system.",
                            "!type": "+Point"
                        }
                    }
                },
                "SnapBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.SnapBehavior",
                    "!doc": "Dynamic behavior defining an item's movement to a specific point.",
                    "prototype": {
                        "item": {
                            "!doc": "Item to add to this behavior.",
                            "!type": "+Titanium.UI.View"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "damping": {
                            "!doc": "Specifies the amount of oscillation during the conclusion of the snap.",
                            "!type": "numder"
                        },
                        "snapPoint": {
                            "!doc": "Specifies the point to snap to.",
                            "!type": "+Point"
                        }
                    }
                },
                "BLEND_MODE_COPY": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED": {
                    "!doc": "User tapped a link.",
                    "!type": "numder"
                },
                "WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD": {
                    "!doc": "User tapped the back or forward button.",
                    "!type": "numder"
                },
                "SCROLL_DECELERATION_RATE_NORMAL": {
                    "!doc": "Use with <Titanium.UI.ScrollView.decelerationRate> to control deceleration rate.\n",
                    "!type": "numder"
                },
                "ANIMATION_CURVE_EASE_IN": {
                    "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts \nslowly and speeds up.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT": {
                    "!doc": "Use with <Attribute.value> to draw an alternating line of dashes and two dots.\n",
                    "!type": "numder"
                },
                "ROW_ACTION_STYLE_NORMAL": {
                    "!doc": "The normal style for <RowActionType>.",
                    "!type": "numder"
                },
                "AD_SIZE_PORTRAIT": {
                    "!doc": "Use with [AdView.adSize](Titanium.UI.iOS.AdView.adSize) to specify a banner ad size\nappropriate for portrait orientations.\n",
                    "!type": "string"
                },
                "WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED": {
                    "!doc": "User resubmitted a form.",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINES_STYLE": {
                    "!doc": "Use with <Attribute.type> to place a horizontal line under the text.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT": {
                    "!doc": "Use with <Attribute.value> to write text right to left.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_STYLE_NONE": {
                    "!doc": "Use with <Attribute.value> to not draw a line.\n",
                    "!type": "numder"
                },
                "TabbedBar": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.TabbedBar",
                    "!doc": "A button bar that maintains a selected state.",
                    "prototype": {
                        "labels": {
                            "!doc": "Array of labels for the tabbed bar.",
                            "!type": "[string]"
                        },
                        "index": {
                            "!doc": "Index of the currently selected button.",
                            "!type": "numder"
                        },
                        "style": {
                            "!doc": "Style of the tabbed bar.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.UI.View.prototype"
                    }
                },
                "ATTRIBUTE_EXPANSION": {
                    "!doc": "Use with <Attribute.type> to stretch the text horizontally.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_WRITING_DIRECTION_EMBEDDING": {
                    "!doc": "Use with <Attribute.value> to use the embedded text direction.\n",
                    "!type": "numder"
                },
                "WEBVIEW_NAVIGATIONTYPE_OTHER": {
                    "!doc": "Some other action occurred.",
                    "!type": "numder"
                },
                "BLEND_MODE_SATURATION": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "COLOR_GROUP_TABLEVIEW_BACKGROUND": {
                    "!doc": "Returns the iOS system texture used to render the background on a group table view.",
                    "!type": "string"
                },
                "SCROLL_DECELERATION_RATE_FAST": {
                    "!doc": "Use with <Titanium.UI.ScrollView.decelerationRate> to control deceleration rate.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_SHADOW": {
                    "!doc": "Use with <Attribute.type> to display a shadow behind the text.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_STROKE_COLOR": {
                    "!doc": "Use with <Attribute.type> to specify a color for the stroke text.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_STYLE_SINGLE": {
                    "!doc": "Use with <Attribute.value> to draw a single line.\n",
                    "!type": "numder"
                },
                "CoverFlowView": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.CoverFlowView",
                    "!doc": "The cover flow view is a container showing animated three-dimensional images in a style \nconsistent with the cover flow presentation style used for iPod, iTunes, and file browsing.\n",
                    "prototype": {
                        "images": {
                            "!doc": "Images to display in the view.",
                            "!type": "[string]"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "selected": {
                            "!doc": "Index to make selected.",
                            "!type": "numder"
                        },
                        "setImage": {
                            "!doc": "Changes the image for a specified index.",
                            "!type": "fn(index: numder, image: string)"
                        }
                    }
                },
                "ATTRIBUTE_UNDERLINE_COLOR": {
                    "!doc": "Use with <Attribute.type> to change the color of the horizontal line.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_COLOR_BURN": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_XOR": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_SOURCE_ATOP": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_WRITING_DIRECTION": {
                    "!doc": "Use with <Attribute.type> to control the direction of the text.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_PATTERN_DOT": {
                    "!doc": "Use with <Attribute.value> to draw a dotted line.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_SCREEN": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "AdView": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.AdView",
                    "!doc": "The AdView is a view for display Apple iAds.",
                    "prototype": {
                        "adSize": {
                            "!doc": "Size of the advertisement when minimized.",
                            "!type": "string"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "cancelAction": {
                            "!doc": "Cancel a banner to uncover the user interface.",
                            "!type": "fn()"
                        }
                    }
                },
                "BLEND_MODE_CLEAR": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_SOURCE_OUT": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "COLOR_UNDER_PAGE_BACKGROUND": {
                    "!doc": "Returns the iOS system texture used to render the background of a page.",
                    "!type": "string"
                },
                "WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED": {
                    "!doc": "User submitted a form.",
                    "!type": "numder"
                },
                "Attribute": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.Attribute",
                    "!doc": "An abstract datatype for specifying an attributed string attribute.",
                    "prototype": {
                        "range": {
                            "!doc": "Attribute range.",
                            "!type": "[numder]"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "type": {
                            "!doc": "Attribute to apply to the text.",
                            "!type": "numder"
                        },
                        "value": {
                            "!doc": "Attribute value.",
                            "!type": "numder"
                        }
                    }
                },
                "BLEND_MODE_DARKEN": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "CLIP_MODE_DEFAULT": {
                    "!doc": "Use with <Titanium.UI.View.clipMode> to specify clipping behavior.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_HARD_LIGHT": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_STRIKETHROUGH_STYLE": {
                    "!doc": "Use with <Attribute.type> to place a horizontal line through the text.\n",
                    "!type": "numder"
                },
                "COLLISION_MODE_ALL": {
                    "!doc": "Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with both items and\nboundaries.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_PATTERN_SOLID": {
                    "!doc": "Use with <Attribute.value> to draw a solid line.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_STYLE_DOUBLE": {
                    "!doc": "Use with <Attribute.value> to draw a double line.\n",
                    "!type": "numder"
                },
                "NavigationWindow": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.NavigationWindow",
                    "!doc": "A `NavigationWindow` implements a specialized view that manages the navigation of hierarchical \ncontent. \n",
                    "prototype": {
                        "window": {
                            "!doc": "Window to add to this navigation group.",
                            "!type": "+Titanium.UI.Window"
                        },
                        "!proto": "Titanium.UI.Window.prototype",
                        "closeWindow": {
                            "!doc": "Closes a window and removes it from the navigation group.",
                            "!type": "fn(window: +Titanium.UI.Window, options: +Dictionary)"
                        },
                        "openWindow": {
                            "!doc": "Opens a window within the navigation group.",
                            "!type": "fn(window: +Titanium.UI.Window, options: +Dictionary)"
                        }
                    }
                },
                "BLEND_MODE_COLOR_DODGE": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_LETTERPRESS_STYLE": {
                    "!doc": "Use with <Attribute.value> to use a letterpress text effect.\n",
                    "!type": "numder"
                },
                "PushBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.PushBehavior",
                    "!doc": "Continuous or instantaneous force to apply to an item.",
                    "prototype": {
                        "angle": {
                            "!doc": "Specifies the angle of the force vector in radians.",
                            "!type": "numder"
                        },
                        "items": {
                            "!doc": "Items added to this behavior.",
                            "!type": "+Array<Titanium.UI.View>"
                        },
                        "pushDirection": {
                            "!doc": "Specifies the direction of the force vector as an x, y pair.",
                            "!type": "+Point"
                        },
                        "addItem": {
                            "!doc": "Adds an item to this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "magnitude": {
                            "!doc": "Specifies the magnitude of the force vector.",
                            "!type": "numder"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "pushMode": {
                            "!doc": "Specifies the push mode.",
                            "!type": "numder"
                        },
                        "removeItem": {
                            "!doc": "Removes the specified item from this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "active": {
                            "!doc": "State of the push behavior's force.",
                            "!type": "bool"
                        }
                    }
                },
                "CLIP_MODE_ENABLED": {
                    "!doc": "Use with <Titanium.UI.View.clipMode> to specify clipping behavior.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_PLUS_LIGHTER": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "BLEND_MODE_EXCLUSION": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_LIGATURE": {
                    "!doc": "Use with <Attribute.type> to enable or disable ligatures.\n",
                    "!type": "numder"
                },
                "AttributedString": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.AttributedString",
                    "!doc": "An attributed string proxy manages character strings and associated sets of attributes (for example,\nfont and kerning) that apply to individual characters or ranges of characters in the string.\n",
                    "prototype": {
                        "text": {
                            "!doc": "The text applied to the attributed string.\n",
                            "!type": "string"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "addAttribute": {
                            "!doc": "Adds an [attribute](Attribute) with the given name and value to the characters in the specified range.",
                            "!type": "fn(attribute: +Attribute)"
                        },
                        "attributes": {
                            "!doc": "An array of attributes to add.\n",
                            "!type": "[+Attribute]"
                        }
                    }
                },
                "ATTRIBUTE_WRITING_DIRECTION_OVERRIDE": {
                    "!doc": "Use with <Attribute.value> to override the text direction.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_BASELINE_OFFSET": {
                    "!doc": "Use with <Attribute.type> to apply a different baseline to the text.\n",
                    "!type": "numder"
                },
                "ANIMATION_CURVE_EASE_OUT": {
                    "!doc": "Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts \nquickly, then slows down at the end of the animation.\n",
                    "!type": "numder"
                },
                "ROW_ACTION_STYLE_DESTRUCTIVE": {
                    "!doc": "The destructive style for <RowActionType>.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS",
                "BLEND_MODE_COLOR": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "Toolbar": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.Toolbar",
                    "!doc": "An iOS toolbar, which can contain buttons and certain other controls.",
                    "prototype": {
                        "items": {
                            "!doc": "An array of buttons (or other widgets) contained in the toolbar.",
                            "!type": "+Array<Titanium.UI.View>"
                        },
                        "borderBottom": {
                            "!doc": "If `true`, a border is drawn on the bottom of the toolbar. This property is ignored on iOS 7 and above.",
                            "!type": "bool"
                        },
                        "extendBackground": {
                            "!doc": "If `true`, the background of the toolbar extends upwards.",
                            "!type": "bool"
                        },
                        "barColor": {
                            "!doc": "Background color for the toolbar, as a color name or hex triplet.",
                            "!type": "string"
                        },
                        "!proto": "Titanium.UI.View.prototype",
                        "borderTop": {
                            "!doc": "If `true`, a border is drawn on the top of the toolbar. This property is ignored on iOS 7 and above.",
                            "!type": "bool"
                        },
                        "translucent": {
                            "!doc": "If `true`, a translucent background color is used for the toolbar.",
                            "!type": "bool"
                        }
                    }
                },
                "BLEND_MODE_DIFFERENCE": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "AUTODETECT_CALENDAR": {
                    "!doc": "Converts strings formatted as calendar events into clickable links.",
                    "!type": "numder"
                },
                "ATTRIBUTE_TEXT_EFFECT": {
                    "!doc": "Use with <Attribute.type> to apply a text effect.\n",
                    "!type": "numder"
                },
                "DynamicItemBehavior": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iOS.DynamicItemBehavior",
                    "!doc": "Base dynamic configuration for an item.",
                    "prototype": {
                        "angularVelocityForItem": {
                            "!doc": "Returns the angular velocity of the item.",
                            "!type": "fn(item: +Titanium.UI.View) -> numder"
                        },
                        "addLinearVelocityForItem": {
                            "!doc": "Adds a specified linear velocity for the item.",
                            "!type": "fn(item: +Titanium.UI.View, velocity: +Point)"
                        },
                        "density": {
                            "!doc": "Specifies the relative mass density of this item.",
                            "!type": "numder"
                        },
                        "items": {
                            "!doc": "Items added to this behavior.",
                            "!type": "+Array<Titanium.UI.View>"
                        },
                        "removeItem": {
                            "!doc": "Removes the specified item from this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "addItem": {
                            "!doc": "Adds an item to this behavior.",
                            "!type": "fn(item: +Titanium.UI.View)"
                        },
                        "elasticity": {
                            "!doc": "Specifies the elasticity applied to collisions for this item.",
                            "!type": "numder"
                        },
                        "friction": {
                            "!doc": "Specifies the linear resistance of the item when it slides against another item.",
                            "!type": "numder"
                        },
                        "resistance": {
                            "!doc": "Specifies the linear resistance of this item which reduces linear velocity over time.",
                            "!type": "numder"
                        },
                        "allowsRotation": {
                            "!doc": "Specifies if this item can rotate.",
                            "!type": "bool"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "angularResistance": {
                            "!doc": "Specifies the angular resistance of this item.",
                            "!type": "numder"
                        },
                        "addAngularVelocityForItem": {
                            "!doc": "Adds a specified angular velocity for the item.",
                            "!type": "fn(item: +Titanium.UI.View, velocity: numder)"
                        },
                        "linearVelocityForItem": {
                            "!doc": "Returns the linear velocity of the item.",
                            "!type": "fn(item: +Titanium.UI.View) -> +Point"
                        }
                    }
                },
                "BLEND_MODE_DESTINATION_IN": {
                    "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                    "!type": "numder"
                },
                "ATTRIBUTE_UNDERLINE_BY_WORD": {
                    "!doc": "Use with <Attribute.value> to draw a line only underneath or through words.\n",
                    "!type": "numder"
                }
            },
            "TEXT_AUTOCAPITALIZATION_WORDS": {
                "!doc": "Auto-capitalize the first letter of each word in the input field.",
                "!type": "numder"
            },
            "createCoverFlowImageType": {
                "!type": "fn() -> +CoverFlowImageType"
            },
            "createCloudChatGroupsResponse": {
                "!type": "fn() -> +CloudChatGroupsResponse"
            },
            "createReviews": {
                "!type": "fn() -> +Modules.Cloud.Reviews"
            },
            "RETURNKEY_NEXT": {
                "!doc": "Set the return key text to \"Next\".",
                "!type": "numder"
            },
            "createwindowToolbarParam": {
                "!type": "fn() -> +windowToolbarParam"
            },
            "createImageView": {
                "!type": "fn() -> +Titanium.UI.ImageView"
            },
            "createPumpCallbackArgs": {
                "!type": "fn() -> +PumpCallbackArgs"
            },
            "createconsole": {
                "!type": "fn() -> +Global.console"
            },
            "createTableView": {
                "!type": "fn() -> +Titanium.UI.TableView"
            },
            "createTextField": {
                "!type": "fn() -> +Titanium.UI.TextField"
            },
            "createrecurrenceEndDictionary": {
                "!type": "fn() -> +recurrenceEndDictionary"
            },
            "createshowParams": {
                "!type": "fn() -> +showParams"
            },
            "EXTEND_EDGE_NONE": {
                "!doc": "Specifies that none of the edges of the window can extend.",
                "!type": "numder"
            },
            "BLEND_MODE_MULTIPLY": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createNetwork": {
                "!type": "fn() -> +Titanium.Network"
            },
            "RETURNKEY_DEFAULT": {
                "!doc": "Use the default return key on the virtual keyboard.",
                "!type": "numder"
            },
            "createCloudMessagesResponse": {
                "!type": "fn() -> +CloudMessagesResponse"
            },
            "createCloudACLsResponse": {
                "!type": "fn() -> +CloudACLsResponse"
            },
            "createCloudFriendsResponse": {
                "!type": "fn() -> +CloudFriendsResponse"
            },
            "URL_ERROR_UNSUPPORTED_SCHEME": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> when a url contains an unsupported scheme.",
                "!type": "numder"
            },
            "createCloudKeyValuesResponse": {
                "!type": "fn() -> +CloudKeyValuesResponse"
            },
            "BLEND_MODE_DESTINATION_OVER": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createJSON": {
                "!type": "fn() -> +Global.JSON"
            },
            "createHeadingResponse": {
                "!type": "fn() -> +HeadingResponse"
            },
            "createThumbnailResponse": {
                "!type": "fn() -> +ThumbnailResponse"
            },
            "EXTEND_EDGE_ALL": {
                "!doc": "Specifies that all the edges of the window can extend.",
                "!type": "numder"
            },
            "createDocumentViewerOptions": {
                "!type": "fn() -> +DocumentViewerOptions"
            },
            "BLEND_MODE_LIGHTEN": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createCloudEventsResponse": {
                "!type": "fn() -> +CloudEventsResponse"
            },
            "createFont": {
                "!type": "fn() -> +Font"
            },
            "createCameraOptionsType": {
                "!type": "fn() -> +CameraOptionsType"
            },
            "createClients": {
                "!type": "fn() -> +Modules.Cloud.Clients"
            },
            "ATTRIBUTE_TEXT_EFFECT": {
                "!doc": "Use with <Attribute.type> to apply a text effect.\n",
                "!type": "numder"
            },
            "BLEND_MODE_OVERLAY": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "ATTRIBUTE_STRIKETHROUGH_COLOR": {
                "!doc": "Use with <Attribute.type> to change the color of the horizontal line.\n",
                "!type": "numder"
            },
            "AUTODETECT_ADDRESS": {
                "!doc": "Converts strings formatted as addresses into clickable links.",
                "!type": "numder"
            },
            "RETURNKEY_ROUTE": {
                "!doc": "Set the return key text to \"Route\".",
                "!type": "numder"
            },
            "ATTRIBUTE_BACKGROUND_COLOR": {
                "!doc": "Use with <Attribute.type> to specify a background color.\n",
                "!type": "numder"
            },
            "AUTODETECT_LINK": {
                "!doc": "Converts strings formatted as URLs into clickable links.",
                "!type": "numder"
            },
            "createPoint": {
                "!type": "fn() -> +Point"
            },
            "createCloudEventOccurrencesResponse": {
                "!type": "fn() -> +CloudEventOccurrencesResponse"
            },
            "createYahoo": {
                "!type": "fn() -> +Titanium.Yahoo"
            },
            "KEYBOARD_APPEARANCE_ALERT": {
                "!doc": "Use a keyboard appearance suitable for entering text on an alert.",
                "!type": "numder"
            },
            "ATTRIBUTE_STROKE_WIDTH": {
                "!doc": "Use with <Attribute.type> to specify the width of the stroke text.\n",
                "!type": "numder"
            },
            "BLEND_MODE_CLEAR": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "ListItem": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ListItem",
                "!doc": "A list item is an individual item in a list section.",
                "prototype": {
                    "itemId": {
                        "!doc": "A user defined string that gets passed to events.",
                        "!type": "string"
                    },
                    "selectedBackgroundGradient": {
                        "!doc": "Background gradient to render when the item is selected.",
                        "!type": "+Gradient"
                    },
                    "font": {
                        "!doc": "Font to use for the item title.",
                        "!type": "+Font"
                    },
                    "subtitle": {
                        "!doc": "Subtitle to set in the text area of the item.",
                        "!type": "string"
                    },
                    "backgroundColor": {
                        "!doc": "Background color of the view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "title": {
                        "!doc": "Title to set in the text area of the item.",
                        "!type": "string"
                    },
                    "color": {
                        "!doc": "Default text color of the item when not selected, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "image": {
                        "!doc": "Image to render in the image area of the item, specified as a local path or URL.",
                        "!type": "string"
                    },
                    "selectedBackgroundImage": {
                        "!doc": "Background image to render when the item is selected.",
                        "!type": "string"
                    },
                    "searchableText": {
                        "!doc": "The text to match against when the [ListView](Titanium.UI.ListView) is performing a search.",
                        "!type": "string"
                    },
                    "height": {
                        "!doc": "Row height in platform-specific units.",
                        "!type": "numder"
                    },
                    "selectionStyle": {
                        "!doc": "Selection style constant to control the selection color.",
                        "!type": "numder"
                    },
                    "canMove": {
                        "!doc": "Specifies if the item can be reordered within the list view by a user initiated action.",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "backgroundImage": {
                        "!doc": "Background image to render when the item is not selected.",
                        "!type": "string"
                    },
                    "backgroundGradient": {
                        "!doc": "Background gradient to render when the item is not selected.",
                        "!type": "+Gradient"
                    },
                    "accessoryType": {
                        "!doc": "Sets an accessory on the right side of an item.",
                        "!type": "numder"
                    },
                    "canEdit": {
                        "!doc": "Specifies if the item can be deleted by a user initiated action.",
                        "!type": "bool"
                    },
                    "editActions": {
                        "!doc": "Specifies custom action items to be shown when when a list item is edited.",
                        "!type": "[+RowActionType]"
                    },
                    "selectedBackgroundColor": {
                        "!doc": "Background color of the view, as a color name or hex triplet when item is selected.",
                        "!type": "string"
                    }
                }
            },
            "currentTab": {
                "!doc": "The currently active tab, if a tab group is open.",
                "!type": "+Titanium.UI.Tab"
            },
            "ATTRIBUTE_FOREGROUND_COLOR": {
                "!doc": "Use with <Attribute.type> to specify a font color.\n",
                "!type": "numder"
            },
            "createLocationCoordinatesFloor": {
                "!type": "fn() -> +LocationCoordinatesFloor"
            },
            "createStatuses": {
                "!type": "fn() -> +Modules.Cloud.Statuses"
            },
            "AUTODETECT_NONE": {
                "!doc": "Disables converting strings into clickable links.",
                "!type": "numder"
            },
            "Clipboard": {
                "clearData": {
                    "!doc": "Deletes data of the specified MIME type stored in the clipboard. If MIME type omitted, all \ndata is deleted.\n",
                    "!type": "fn(type: string)"
                },
                "!doc": "A module used for accessing clipboard data.",
                "setText": {
                    "!doc": "Stores text data in the clipboard.",
                    "!type": "fn(text: string)"
                },
                "clearText": {
                    "!doc": "Deletes all text data stored in the clipboard.",
                    "!type": "fn()"
                },
                "getText": {
                    "!doc": "Gets text data stored in the clipboard.",
                    "!type": "fn() -> string"
                },
                "hasText": {
                    "!doc": "Indicates whether any text data is stored in the clipboard.",
                    "!type": "fn()"
                },
                "hasData": {
                    "!doc": "Indicates whether any data of the specified MIME type is stored in the clipboard.",
                    "!type": "fn(type: string) -> bool"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Clipboard",
                "getData": {
                    "!doc": "Gets data of the specified MIME type stored in the clipboard.",
                    "!type": "fn(type: string)"
                },
                "setData": {
                    "!doc": "Stores data of the specified MIME type in the clipboard.",
                    "!type": "fn(type: string, data: +Object)"
                }
            },
            "KEYBOARD_NUMBER_PAD": {
                "!doc": "Use a keyboard with a number pad only, with the pad keyboard layout.",
                "!type": "numder"
            },
            "TEXT_AUTOCAPITALIZATION_NONE": {
                "!doc": "Do not auto-capitalize.",
                "!type": "numder"
            },
            "createPushNotifications": {
                "!type": "fn() -> +Modules.Cloud.PushNotifications"
            },
            "ATTRIBUTE_WRITING_DIRECTION_NATURAL": {
                "!doc": "Use with <Attribute.value> to use the\n[Unicode Bidirection Algorithm rules P2 and P3](http://www.unicode.org/reports/tr9/#The_Paragraph_Level)\nto determine which direction to use.\n",
                "!type": "numder"
            },
            "createAlertDialog": {
                "!type": "fn() -> +Titanium.UI.AlertDialog"
            },
            "LIST_ITEM_TEMPLATE_SUBTITLE": {
                "!doc": "A built-in style for an item with an image view; a black, left-aligned title label across the\ntop of the cell and a subtitle label below it.\n",
                "!type": "numder"
            },
            "ATTRIBUTE_UNDERLINE_STYLE_THICK": {
                "!doc": "Use with <Attribute.value> to draw a thick line.\n",
                "!type": "numder"
            },
            "BLEND_MODE_SOURCE_IN": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "AUTOLINK_NONE": {
                "!doc": "Disables converting strings into clickable links.",
                "!type": "numder"
            },
            "createButton": {
                "!type": "fn() -> +Titanium.UI.Button"
            },
            "TEXT_STYLE_HEADLINE": {
                "!doc": "Specifies the text style for the <Font> Object.",
                "!type": "string"
            },
            "TEXT_STYLE_BODY": {
                "!doc": "Specifies the text style for the <Font> Object.",
                "!type": "string"
            },
            "ScrollView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ScrollView",
                "!doc": "A view that contains a horizontally and/or vertically-scrollable region of content.  \n",
                "prototype": {
                    "scrollTo": {
                        "!doc": "Moves the specified coordinate of the scrollable region into the viewable area.",
                        "!type": "fn(x: numder, y: numder)"
                    },
                    "showHorizontalScrollIndicator": {
                        "!doc": "Determines whether the horizontal scroll indicator is visible.",
                        "!type": "bool"
                    },
                    "scrollingEnabled": {
                        "!doc": "Determines whether scrolling is enabled for the view.",
                        "!type": "bool"
                    },
                    "scrollToBottom": {
                        "!doc": "Moves the end of the scrollable region into the viewable area.",
                        "!type": "fn()"
                    },
                    "contentOffset": {
                        "!doc": "X and Y coordinates to which to reposition the top-left point of the scrollable region.\n",
                        "!type": "+Dictionary"
                    },
                    "contentWidth": {
                        "!doc": "Width of the scrollable region.",
                        "!type": "numder"
                    },
                    "contentHeight": {
                        "!doc": "Height of the scrollable region.",
                        "!type": "numder"
                    },
                    "verticalBounce": {
                        "!doc": "Determines whether vertical scroll bounce of the scrollable region is enabled.",
                        "!type": "bool"
                    },
                    "canCancelEvents": {
                        "!doc": "Determines whether this scroll view can cancel subview touches in order to scroll instead.",
                        "!type": "bool"
                    },
                    "scrollsToTop": {
                        "!doc": "Controls whether the scroll-to-top gesture is effective.",
                        "!type": "bool"
                    },
                    "decelerationRate": {
                        "!doc": "The deceleration rate of the ScrollView.",
                        "!type": "numder"
                    },
                    "setContentOffset": {
                        "!doc": "Sets the value of the [contentOffset](Titanium.UI.ScrollView.contentOffset) property.",
                        "!type": "fn(contentOffset: +Dictionary, animated: +contentOffsetOption)"
                    },
                    "horizontalBounce": {
                        "!doc": "Determines whether horizontal scroll bounce of the scrollable region is enabled.",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "maxZoomScale": {
                        "!doc": "Maximum scaling factor of the scrollable region and its content.",
                        "!type": "numder"
                    },
                    "minZoomScale": {
                        "!doc": "Minimum scaling factor of the scrollable region and its content.",
                        "!type": "numder"
                    },
                    "zoomScale": {
                        "!doc": "Scaling factor of the scroll view's content.",
                        "!type": "numder"
                    },
                    "overScrollMode": {
                        "!doc": "Determines the behavior when the user overscolls the view.",
                        "!type": "numder"
                    },
                    "showVerticalScrollIndicator": {
                        "!doc": "Determines whether the vertical scroll indicator is visible.",
                        "!type": "bool"
                    },
                    "scrollIndicatorStyle": {
                        "!doc": "Style of the scrollbar.",
                        "!type": "numder"
                    },
                    "disableBounce": {
                        "!doc": "Determines whether scroll bounce of the scrollable region is enabled.",
                        "!type": "bool"
                    },
                    "scrollType": {
                        "!doc": "Limits the direction of the scrollable region, overriding the deduced setting. Set to \n`horizontal` or `vertical`.\n",
                        "!type": "string"
                    },
                    "setZoomScale": {
                        "!doc": "Sets the value of the [zoomScale](Titanium.UI.ScrollView.zoomScale) property.",
                        "!type": "fn(zoomScale: numder, animated: +zoomScaleOption)"
                    }
                }
            },
            "createPushNotificationErrorArg": {
                "!type": "fn() -> +PushNotificationErrorArg"
            },
            "createForwardGeocodeResponse": {
                "!type": "fn() -> +ForwardGeocodeResponse"
            },
            "SearchBar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.SearchBar",
                "!doc": "A specialized text field for entering search text.",
                "prototype": {
                    "setShowCancel": {
                        "!doc": "Shows or hides the cancel button.",
                        "!type": "fn(showCancel: bool, animated: +Dictionary)"
                    },
                    "promptid": {
                        "!doc": "Key identifying a string from the locale file to use for the\n[prompt](Titanium.UI.SearchBar.prompt) property.\n",
                        "!type": "string"
                    },
                    "prompt": {
                        "!doc": "Single line of text displayed at the top of the search bar.",
                        "!type": "string"
                    },
                    "showCancel": {
                        "!doc": "Determines whether the cancel button is displayed.",
                        "!type": "bool"
                    },
                    "autocorrect": {
                        "!doc": "Determines whether the text in the search bar is autocorrected during typing.",
                        "!type": "bool"
                    },
                    "keyboardType": {
                        "!doc": "Keyboard type constant to use when the field is focused.",
                        "!type": "numder"
                    },
                    "focus": {
                        "!doc": "Causes the search bar to gain focus.",
                        "!type": "fn()"
                    },
                    "value": {
                        "!doc": "Value of the search bar.",
                        "!type": "string"
                    },
                    "barColor": {
                        "!doc": "Bar color of the search bar view, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "hintText": {
                        "!doc": "Text to show when the search bar field is not focused.",
                        "!type": "string"
                    },
                    "hinttextid": {
                        "!doc": "Key identifying a string from the locale file to use for the\n[hintText](Titanium.UI.SearchBar.hintText) property.\n",
                        "!type": "string"
                    },
                    "showBookmark": {
                        "!doc": "Determines whether the bookmark button is displayed.",
                        "!type": "bool"
                    },
                    "blur": {
                        "!doc": "Causes the search bar to lose focus.",
                        "!type": "fn()"
                    },
                    "autocapitalization": {
                        "!doc": "Determines how text is capitalized during typing.",
                        "!type": "numder"
                    }
                }
            },
            "createhideStatusBarParams": {
                "!type": "fn() -> +hideStatusBarParams"
            },
            "SIZE": {
                "!doc": "SIZE behavior for UI layout.",
                "!type": "string"
            },
            "createSplitWindow": {
                "!type": "fn() -> +Titanium.UI.iPad.SplitWindow"
            },
            "createTextArea": {
                "!type": "fn() -> +Titanium.UI.TextArea"
            },
            "createPopoverParams": {
                "!type": "fn() -> +PopoverParams"
            },
            "createcontentOffsetOption": {
                "!type": "fn() -> +contentOffsetOption"
            },
            "createtitleAttributesParams": {
                "!type": "fn() -> +titleAttributesParams"
            },
            "ActivityIndicatorStyle": {
                "!doc": "A set of constants for the styles available for <Titanium.UI.ActivityIndicator> objects.",
                "DARK": {
                    "!doc": "Small gray spinning indicator.",
                    "!type": "numder"
                },
                "BIG": {
                    "!doc": "Large white spinning indicator.",
                    "!type": "numder"
                },
                "BIG_DARK": {
                    "!doc": "Large gray spinning indicator.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ActivityIndicatorStyle",
                "PLAIN": {
                    "!doc": "Small white spinning indicator (default).",
                    "!type": "numder"
                }
            },
            "createCloudUsersResponse": {
                "!type": "fn() -> +CloudUsersResponse"
            },
            "createLocationProviderDict": {
                "!type": "fn() -> +LocationProviderDict"
            },
            "createUI": {
                "!type": "fn() -> +Titanium.UI"
            },
            "createCloudPush": {
                "!type": "fn() -> +Modules.CloudPush"
            },
            "create3DMatrix": {
                "!type": "fn() -> +Titanium.UI.iOS.3DMatrix"
            },
            "INPUT_BUTTONMODE_ONFOCUS": {
                "!doc": "Show buttons on the input field when it gains focus.",
                "!type": "numder"
            },
            "createTCP": {
                "!type": "fn() -> +Titanium.Network.Socket.TCP"
            },
            "ATTRIBUTE_UNDERLINES_STYLE": {
                "!doc": "Use with <Attribute.type> to place a horizontal line under the text.\n",
                "!type": "numder"
            },
            "INPUT_BUTTONMODE_ALWAYS": {
                "!doc": "Always show buttons on the input field.",
                "!type": "numder"
            },
            "createSocket": {
                "!type": "fn() -> +Titanium.Network.Socket"
            },
            "TabbedBar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TabbedBar",
                "!doc": "A button bar that maintains a selected state.",
                "prototype": {
                    "labels": {
                        "!doc": "Array of labels for the tabbed bar.",
                        "!type": "[string]"
                    },
                    "index": {
                        "!doc": "Index of the currently selected button.",
                        "!type": "numder"
                    },
                    "style": {
                        "!doc": "Style of the tabbed bar.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.UI.View.prototype"
                }
            },
            "createEventsAuthorizationResponse": {
                "!type": "fn() -> +EventsAuthorizationResponse"
            },
            "OptionDialog": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.OptionDialog",
                "!doc": "An option dialog is a modal view that includes a message and one or more option items positioned \nin the middle of the display on Android and at the bottom edge on iOS. On Android, buttons may \nbe added below the options.\n",
                "prototype": {
                    "hide": {
                        "!doc": "Hides this dialog.",
                        "!type": "fn(params: +hideParams)"
                    },
                    "buttonNames": {
                        "!doc": "List of button names.",
                        "!type": "[string]"
                    },
                    "title": {
                        "!doc": "Title of the dialog.",
                        "!type": "string"
                    },
                    "show": {
                        "!doc": "Shows this dialog.",
                        "!type": "fn(params: +showParams)"
                    },
                    "androidView": {
                        "!doc": "View to load inside the message area, to create a custom layout.",
                        "!type": "+Titanium.UI.View"
                    },
                    "titleid": {
                        "!doc": "Key identifying a string in the locale file to use for the title text.",
                        "!type": "string"
                    },
                    "persistent": {
                        "!doc": "Boolean value indicating if the option dialog should only be cancelled by user gesture or by hide method.",
                        "!type": "bool"
                    },
                    "selectedIndex": {
                        "!doc": "Defines the default selected option.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "opaquebackground": {
                        "!doc": "Boolean value indicating if the option dialog should have an opaque background.",
                        "!type": "bool"
                    },
                    "cancel": {
                        "!doc": "Index to define the cancel option.",
                        "!type": "numder"
                    },
                    "destructive": {
                        "!doc": "Index to define the destructive option, indicated by a visual cue when rendered.",
                        "!type": "numder"
                    },
                    "options": {
                        "!doc": "List of option names to display in the dialog.",
                        "!type": "[string]"
                    }
                }
            },
            "createCloudFilesResponse": {
                "!type": "fn() -> +CloudFilesResponse"
            },
            "createVideoPlayer": {
                "!type": "fn() -> +Titanium.Media.VideoPlayer"
            },
            "BLEND_MODE_SATURATION": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "RETURNKEY_SEARCH": {
                "!doc": "Set the return key text to \"Search\".",
                "!type": "numder"
            },
            "createSecurityManagerProtocol": {
                "!type": "fn() -> +SecurityManagerProtocol"
            },
            "createUserNotificationAction": {
                "!type": "fn() -> +Titanium.App.iOS.UserNotificationAction"
            },
            "createAudioPlayer": {
                "!type": "fn() -> +Titanium.Media.AudioPlayer"
            },
            "URL_ERROR_CONNECT": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> for a failure to connect to host.",
                "!type": "numder"
            },
            "createHeadingData": {
                "!type": "fn() -> +HeadingData"
            },
            "createCloudCheckinsResponse": {
                "!type": "fn() -> +CloudCheckinsResponse"
            },
            "createzoomScaleOption": {
                "!type": "fn() -> +zoomScaleOption"
            },
            "createStream": {
                "!type": "fn() -> +Titanium.Stream"
            },
            "createDynamicItemBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.DynamicItemBehavior"
            },
            "URL_ERROR_AUTHENTICATION": {
                "!doc": "Authentication error code reported via <Titanium.UI.WebView.error>.",
                "!type": "numder"
            },
            "BLEND_MODE_COLOR_BURN": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "KEYBOARD_PHONE_PAD": {
                "!doc": "Use a keyboard with a phone-style number pad, with the pad keyboard layout.",
                "!type": "numder"
            },
            "createWriteCallbackArgs": {
                "!type": "fn() -> +WriteCallbackArgs"
            },
            "createBuffer": {
                "!type": "fn() -> +Titanium.Buffer"
            },
            "ATTRIBUTE_UNDERLINE_STYLE_SINGLE": {
                "!doc": "Use with <Attribute.value> to draw a single line.\n",
                "!type": "numder"
            },
            "createPushBehavior": {
                "!type": "fn() -> +Titanium.UI.iOS.PushBehavior"
            },
            "INPUT_BORDERSTYLE_NONE": {
                "!doc": "Use no border on the input field.",
                "!type": "numder"
            },
            "createTableViewContentInsetOption": {
                "!type": "fn() -> +TableViewContentInsetOption"
            },
            "createButtonBar": {
                "!type": "fn() -> +Titanium.UI.ButtonBar"
            },
            "BLEND_MODE_HARD_LIGHT": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "URL_ERROR_UNKNOWN": {
                "!doc": "Error code reported via <Titanium.UI.WebView.error> when an unknown error occurs.",
                "!type": "numder"
            },
            "ATTRIBUTE_STRIKETHROUGH_STYLE": {
                "!doc": "Use with <Attribute.type> to place a horizontal line through the text.\n",
                "!type": "numder"
            },
            "RETURNKEY_SEND": {
                "!doc": "Set the return key text to \"Send\".",
                "!type": "numder"
            },
            "createDashboardItem": {
                "!type": "fn() -> +Titanium.UI.DashboardItem"
            },
            "BLEND_MODE_EXCLUSION": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createCropRectType": {
                "!type": "fn() -> +CropRectType"
            },
            "ActivityIndicator": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ActivityIndicator",
                "!doc": "An activity indicator that lets the user know an action is taking place.",
                "prototype": {
                    "style": {
                        "!doc": "The style for the activity indicator.",
                        "!type": "numder"
                    },
                    "right": {
                        "!doc": "Right position of the view.",
                        "!type": "numder"
                    },
                    "hide": {
                        "!doc": "Hides the activity indicator and stops the animation.",
                        "!type": "fn()"
                    },
                    "bottom": {
                        "!doc": "Bottom position of the view.",
                        "!type": "numder"
                    },
                    "color": {
                        "!doc": "Color of the message text, as a color name or hex triplet.\n",
                        "!type": "string"
                    },
                    "top": {
                        "!doc": "Top position of the view.",
                        "!type": "numder"
                    },
                    "indicatorDiameter": {
                        "!doc": "Diameter of the indicator.",
                        "!type": "string"
                    },
                    "indicatorColor": {
                        "!doc": "Color of the animated indicator.",
                        "!type": "string"
                    },
                    "remove": {
                        "!doc": "Removes a child from this activity indicator's hierarchy.",
                        "!type": "fn()"
                    },
                    "height": {
                        "!doc": "Width of the view. Only accepts value of <Titanium.UI.SIZE>, which must be explicitly set in order to\ndisplay the message and to position the view correctly.\n",
                        "!type": "string"
                    },
                    "width": {
                        "!doc": "Width of the view. Only accepts value of <Titanium.UI.SIZE>, which must be explicitly set in order to\ndisplay the message and to position the view correctly.\n",
                        "!type": "string"
                    },
                    "add": {
                        "!doc": "Adds a child to this activity indicator's hierarchy.",
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "messageid": {
                        "!doc": "Key identifying a string in the locale file to use for the message text.",
                        "!type": "string"
                    },
                    "show": {
                        "!doc": "Shows the activity indicator and starts the animation.",
                        "!type": "fn()"
                    },
                    "message": {
                        "!doc": "Message text.",
                        "!type": "string"
                    },
                    "font": {
                        "!doc": "Font used for the message text.",
                        "!type": "+Font"
                    },
                    "left": {
                        "!doc": "Left position of the view.",
                        "!type": "numder"
                    }
                }
            },
            "createAnimation": {
                "!type": "fn() -> +Titanium.UI.Animation"
            },
            "createCloudPushNotificationsResponse": {
                "!type": "fn() -> +CloudPushNotificationsResponse"
            },
            "Slider": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Slider",
                "!doc": "A slider component with a draggable thumb.",
                "prototype": {
                    "highlightedRightTrackImage": {
                        "!doc": "Image URL of the slider right track when in the highlighted state.",
                        "!type": "string"
                    },
                    "leftTrackTopCap": {
                        "!doc": "Size of the top end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.",
                        "!type": "numder"
                    },
                    "leftTrackLeftCap": {
                        "!doc": "Size of the left end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.",
                        "!type": "numder"
                    },
                    "rightTrackLeftCap": {
                        "!doc": "Size of the left end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.",
                        "!type": "numder"
                    },
                    "remove": {
                        "!type": "fn()"
                    },
                    "rightTrackImage": {
                        "!doc": "Image URL of the slider right track.",
                        "!type": "string"
                    },
                    "minRange": {
                        "!doc": "Lower limit on the slider value that can be selected.",
                        "!type": "numder"
                    },
                    "min": {
                        "!doc": "Minimum value of the slider.",
                        "!type": "numder"
                    },
                    "highlightedThumbImage": {
                        "!doc": "Image URL of the slider thumb when in the highlighted state.",
                        "!type": "string"
                    },
                    "disabledRightTrackImage": {
                        "!doc": "Image URL of the slider right track when in the disabled state.",
                        "!type": "string"
                    },
                    "add": {
                        "!type": "fn()"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "selectedThumbImage": {
                        "!doc": "Image URL of the slider thumb when in the selected state.",
                        "!type": "string"
                    },
                    "disabledLeftTrackImage": {
                        "!doc": "Image URL of the slider left track when in the disabled state.",
                        "!type": "string"
                    },
                    "leftTrackImage": {
                        "!doc": "Image URL of the slider left track.",
                        "!type": "string"
                    },
                    "setValue": {
                        "!doc": "Sets the [value](Titanium.UI.Slider.value) property.",
                        "!type": "fn(value: numder, options: +Dictionary)"
                    },
                    "thumbImage": {
                        "!doc": "Image for the slider thumb.",
                        "!type": "string"
                    },
                    "selectedLeftTrackImage": {
                        "!doc": "Image URL of the slider left track when in the selected state.",
                        "!type": "string"
                    },
                    "max": {
                        "!doc": "Maximum value of the slider.",
                        "!type": "numder"
                    },
                    "highlightedLeftTrackImage": {
                        "!doc": "Image URL of the slider left track when in the highlighted state.",
                        "!type": "string"
                    },
                    "disabledThumbImage": {
                        "!doc": "Image URL of the slider thumb when in the disabled state.",
                        "!type": "string"
                    },
                    "maxRange": {
                        "!doc": "Upper limit on the slider value that can be selected.",
                        "!type": "numder"
                    },
                    "enabled": {
                        "!doc": "Boolean to indicate the enabled state of the slider.",
                        "!type": "bool"
                    },
                    "value": {
                        "!doc": "Current value of the slider.",
                        "!type": "string"
                    },
                    "selectedRightTrackImage": {
                        "!doc": "Image URL of the slider right track when in the selected state.",
                        "!type": "string"
                    },
                    "rightTrackTopCap": {
                        "!doc": "Size of the top end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.",
                        "!type": "numder"
                    }
                }
            },
            "createMedia": {
                "!type": "fn() -> +Titanium.Media"
            },
            "createGeoFences": {
                "!type": "fn() -> +Modules.Cloud.GeoFences"
            },
            "RETURNKEY_JOIN": {
                "!doc": "Set the return key text to \"Join\".",
                "!type": "numder"
            },
            "ScrollableView": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ScrollableView",
                "!doc": "A view that encapsulates a horizontally-scrolling set of child views, known as pages, navigable \nusing its built-in horizontal swipe gestures.\n",
                "prototype": {
                    "pagingControlTimeout": {
                        "!doc": "Number of milliseconds to wait before hiding the paging control.",
                        "!type": "numder"
                    },
                    "pagingControlHeight": {
                        "!doc": "Height of the paging control, in pixels.",
                        "!type": "numder"
                    },
                    "overlayEnabled": {
                        "!doc": "Determines whether the paging control is added as an overlay to the view.",
                        "!type": "bool"
                    },
                    "pagingControlOnTop": {
                        "!doc": "Determines whether the paging control is displayed at the top or bottom of the view.",
                        "!type": "bool"
                    },
                    "moveNext": {
                        "!doc": "Sets the current page to the next consecutive page in <Titanium.UI.ScrollableView.views>.\n",
                        "!type": "fn()"
                    },
                    "hitRect": {
                        "!doc": "Sets the region where this view responds to gestures.",
                        "!type": "+Dimension"
                    },
                    "views": {
                        "!doc": "Sets the pages within this Scrollable View.",
                        "!type": "+Array<Titanium.UI.View>"
                    },
                    "scrollingEnabled": {
                        "!doc": "Determines whether scrolling is enabled for the view.",
                        "!type": "bool"
                    },
                    "clipViews": {
                        "!doc": "Determines whether the previous and next pages are clipped, so that they are not visible \nadjacent to the current page.\n",
                        "!type": "bool"
                    },
                    "pagingControlColor": {
                        "!doc": "Color of the paging control, as a color name or hex triplet.",
                        "!type": "string"
                    },
                    "showPagingControl": {
                        "!doc": "Determines whether the paging control is visible.",
                        "!type": "bool"
                    },
                    "disableBounce": {
                        "!doc": "Determines whether page bouncing effect is disabled.",
                        "!type": "bool"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "addView": {
                        "!doc": "Adds a new page to this Scrollable View.",
                        "!type": "fn(view: +Titanium.UI.View)"
                    },
                    "removeView": {
                        "!doc": "Removes an existing page from this Scrollable View.",
                        "!type": "fn(view: numder)"
                    },
                    "cacheSize": {
                        "!doc": "Number of pages to cache (pre-render).",
                        "!type": "numder"
                    },
                    "currentPage": {
                        "!doc": "Index of the active page.",
                        "!type": "numder"
                    },
                    "overScrollMode": {
                        "!doc": "Determines the behavior when the user overscolls the view.",
                        "!type": "numder"
                    },
                    "movePrevious": {
                        "!doc": "Sets the current page to the previous consecutive page in <Titanium.UI.ScrollableView.views>.\n",
                        "!type": "fn()"
                    },
                    "scrollToView": {
                        "!doc": "Scrolls to the specified page in <Titanium.UI.ScrollableView.views>.",
                        "!type": "fn(view: numder)"
                    },
                    "pagingControlAlpha": {
                        "!doc": "Alpha value of the paging control.",
                        "!type": "numder"
                    }
                }
            },
            "BLEND_MODE_DIFFERENCE": {
                "!doc": "Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.\n",
                "!type": "numder"
            },
            "createGeocodedAddress": {
                "!type": "fn() -> +GeocodedAddress"
            },
            "createAudioRecorder": {
                "!type": "fn() -> +Titanium.Media.AudioRecorder"
            },
            "KEYBOARD_DECIMAL_PAD": {
                "!doc": "Use a keyboard with decimal numbers only, with the pad keyboard layout.",
                "!type": "numder"
            },
            "TEXT_STYLE_FOOTNOTE": {
                "!doc": "Specifies the text style for the <Font> Object.",
                "!type": "string"
            },
            "Picker": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Picker",
                "!doc": "A control used to select one or more fixed values.\n",
                "prototype": {
                    "reloadColumn": {
                        "!doc": "Repopulates values for a column.",
                        "!type": "fn(column: +Titanium.UI.PickerColumn)"
                    },
                    "setSelectedRow": {
                        "!doc": "Selects a column's row.",
                        "!type": "fn(column: numder, row: numder, animated: bool)"
                    },
                    "locale": {
                        "!doc": "Locale used when displaying Date and Time picker values.",
                        "!type": "string"
                    },
                    "maxDate": {
                        "!doc": "Maximum date displayed when a Date picker is in use.",
                        "!type": "+Date"
                    },
                    "showTimePickerDialog": {
                        "!doc": "Shows Time picker as a modal dialog.",
                        "!type": "fn(dictObj: +Object)"
                    },
                    "font": {
                        "!doc": "Font to use for text.",
                        "!type": "+Font"
                    },
                    "showDatePickerDialog": {
                        "!doc": "Shows Date picker as a modal dialog.",
                        "!type": "fn(dictObj: +Object)"
                    },
                    "countDownDuration": {
                        "!doc": "Duration in milliseconds used for a Countdown Timer picker.",
                        "!type": "numder"
                    },
                    "add": {
                        "!doc": "Adds rows or columns to the picker.",
                        "!type": "fn(data: +Array<Titanium.UI.PickerRow>)"
                    },
                    "!proto": "Titanium.UI.View.prototype",
                    "backgroundColor": {},
                    "type": {
                        "!doc": "Determines the type of picker displayed",
                        "!type": "numder"
                    },
                    "columns": {
                        "!doc": "Columns used for this picker, as an array of <Titanium.UI.PickerColumn> objects.",
                        "!type": "+Array<Titanium.UI.PickerColumn>"
                    },
                    "setValue": {
                        "!doc": "Sets the date and time value property for Date pickers.",
                        "!type": "fn(date: +Object, suppressEvent: bool)"
                    },
                    "minuteInterval": {
                        "!doc": "Interval in minutes displayed when one of the Time types of pickers is in use.\n",
                        "!type": "numder"
                    },
                    "getSelectedRow": {
                        "!doc": "Gets the selected row for a column, or `null` if none exists.",
                        "!type": "fn(index: numder)"
                    },
                    "visibleItems": {
                        "!doc": "Number of visible rows to display. This is only applicable to a plain picker and when the \n`useSpinner` is `true`.\n",
                        "!type": "numder"
                    },
                    "useSpinner": {
                        "!doc": "Determines whether the non-native Android control, with a spinning wheel that looks and \nbehaves like the iOS picker, is invoked rather than the default native \"dropdown\" style.\n",
                        "!type": "bool"
                    },
                    "minDate": {
                        "!doc": "Minimum date displayed when a Date picker is in use.",
                        "!type": "+Date"
                    },
                    "value": {
                        "!doc": "Date and time value for Date and Time pickers.",
                        "!type": "+Date"
                    },
                    "format24": {
                        "!doc": "Determines whether the Time pickers display in 24-hour or 12-hour clock format.\n",
                        "!type": "bool"
                    },
                    "calendarViewShown": {
                        "!doc": "Determines whether the calenderView is visible.\n",
                        "!type": "bool"
                    },
                    "selectionIndicator": {
                        "!doc": "Determines whether the visual selection indicator is shown.\n",
                        "!type": "bool"
                    }
                }
            },
            "createopenWindowParams": {
                "!type": "fn() -> +openWindowParams"
            },
            "iPad": {
                "POPOVER_ARROW_DIRECTION_ANY": {
                    "!doc": "An arrow that points in any direction.",
                    "!type": "numder"
                },
                "POPOVER_ARROW_DIRECTION_DOWN": {
                    "!doc": "An arrow that points downward.",
                    "!type": "numder"
                },
                "!doc": "iPad specific UI capabilities.",
                "SplitWindow": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPad.SplitWindow",
                    "!doc": "A SplitWindow is a window that manages the presentation of two side-by-side view \ncontrollers. \n",
                    "prototype": {
                        "showMasterInPortrait": {
                            "!doc": "Determines whether to show the master view in portrait orientation.",
                            "!type": "bool"
                        },
                        "!proto": "Titanium.UI.Window.prototype",
                        "detailView": {
                            "!doc": "View for the detail view section of the SplitWindow.",
                            "!type": "+Titanium.UI.View"
                        },
                        "masterView": {
                            "!doc": "View for the master view section of the SplitWindow.",
                            "!type": "+Titanium.UI.View"
                        }
                    }
                },
                "Popover": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPad.Popover",
                    "!doc": "A Popover is used to manage the presentation of content in a popover.",
                    "prototype": {
                        "contentView": {
                            "!doc": "View to use for the popover content. Must be set before calling the `show()` method.",
                            "!type": "+Titanium.UI.View"
                        },
                        "hide": {
                            "!doc": "Hides the popover.",
                            "!type": "fn(options: +PopoverParams)"
                        },
                        "title": {
                            "!doc": "Title of the navigation area of the popover.",
                            "!type": "string"
                        },
                        "show": {
                            "!doc": "Displays the popover.",
                            "!type": "fn(params: +PopoverParams)"
                        },
                        "remove": {
                            "!doc": "Removes a child from the popover.",
                            "!type": "fn()"
                        },
                        "height": {
                            "!doc": "Height of the popover.",
                            "!type": "numder"
                        },
                        "width": {
                            "!doc": "Width of the popover.",
                            "!type": "numder"
                        },
                        "add": {
                            "!doc": "Adds a child to the popover.",
                            "!type": "fn()"
                        },
                        "!proto": "Titanium.Proxy.prototype",
                        "passthroughViews": {
                            "!doc": "Passthrough views to use when the popover is shown.",
                            "!type": "+Array<Titanium.UI.View>"
                        },
                        "arrowDirection": {
                            "!doc": "Indicates the arrow direction of the popover.",
                            "!type": "numder"
                        },
                        "rightNavButton": {
                            "!doc": "Right button in the navigation area of the popover.",
                            "!type": "+Object"
                        },
                        "leftNavButton": {
                            "!doc": "Left button in the navigation area of the popover.",
                            "!type": "+Object"
                        }
                    }
                },
                "POPOVER_ARROW_DIRECTION_UP": {
                    "!doc": "An arrow that points upward.",
                    "!type": "numder"
                },
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPad",
                "POPOVER_ARROW_DIRECTION_RIGHT": {
                    "!doc": "An arrow that points toward the right.",
                    "!type": "numder"
                },
                "POPOVER_ARROW_DIRECTION_UNKNOWN": {
                    "!doc": "The status of the arrow is currently unknown.",
                    "!type": "numder"
                },
                "POPOVER_ARROW_DIRECTION_LEFT": {
                    "!doc": "An arrow that points toward the left.",
                    "!type": "numder"
                },
                "DocumentViewer": {
                    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.iPad.DocumentViewer",
                    "!doc": "A DocumentViewer provides in-app support for managing user interactions with files on the \nlocal system.\n",
                    "prototype": {
                        "!proto": "Titanium.UI.View.prototype",
                        "setUrl": {
                            "!doc": "Sets the url of the document viewer.",
                            "!type": "fn(url: string)"
                        },
                        "show": {
                            "!doc": "Displays the document viewer over the current view.",
                            "!type": "fn(animated: bool, view: +Object)"
                        }
                    }
                }
            },
            "createAnnotation": {
                "!type": "fn() -> +Titanium.Map.Annotation"
            },
            "createAttributedString": {
                "!type": "fn() -> +Titanium.UI.iOS.AttributedString"
            },
            "createKeyValues": {
                "!type": "fn() -> +Modules.Cloud.KeyValues"
            }
        },
        "buildHash": {
            "!doc": "Git hash of the Titanium build.",
            "!type": "string"
        },
        "Calendar": {
            "!doc": "The Calendar module provides an API for accessing the native calendar functionality.\n",
            "RECURRENCEFREQUENCY_DAILY": {
                "!doc": "Indicates a daily recurrence rule for a events reccurance frequency.",
                "!type": "numder"
            },
            "VISIBILITY_CONFIDENTIAL": {
                "!doc": "Event confidential visibility.",
                "!type": "numder"
            },
            "AUTHORIZATION_AUTHORIZED": {
                "!doc": "A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value \nindicating that the application is authorized to use events in the Calendar.\n",
                "!type": "numder"
            },
            "VISIBILITY_PRIVATE": {
                "!doc": "Event private visibility.",
                "!type": "numder"
            },
            "AUTHORIZATION_DENIED": {
                "!doc": "A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value \nindicating that the application is not authorized to use events in the Calendar.\n",
                "!type": "numder"
            },
            "STATUS_CONFIRMED": {
                "!doc": "Event confirmed status.",
                "!type": "numder"
            },
            "AVAILABILITY_UNAVAILABLE": {
                "!doc": "Event has a tentative availability setting.",
                "!type": "numder"
            },
            "RECURRENCEFREQUENCY_YEARLY": {
                "!doc": "Indicates a yearly recurrence rule for a events reccurance frequency.",
                "!type": "numder"
            },
            "VISIBILITY_DEFAULT": {
                "!doc": "Event default visibility.",
                "!type": "numder"
            },
            "Reminder": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Calendar.Reminder",
                "!doc": "An object that represents a single reminder for an event in a calendar.",
                "prototype": {
                    "!proto": "Titanium.Proxy.prototype",
                    "minutes": {
                        "!doc": "Reminder notice period in minutes, that determines how long prior to the event this reminder \nshould trigger.\n",
                        "!type": "numder"
                    },
                    "id": {
                        "!doc": "Identifier of this reminder.",
                        "!type": "string"
                    },
                    "method": {
                        "!doc": "Method by which this reminder will be delivered.",
                        "!type": "numder"
                    }
                }
            },
            "METHOD_DEFAULT": {
                "!doc": "Reminder default delivery method.",
                "!type": "numder"
            },
            "RecurrenceRule": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Calendar.RecurrenceRule",
                "!doc": "An object that is used to describe the recurrence pattern for a recurring event.",
                "prototype": {
                    "weeksOfTheYear": {
                        "!doc": "The weeks of the year that the event occurs, as an array of number objects. \nValues can be from 1 to 53 and from -1 to -53. This parameter is only valid for \nrecurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).\n",
                        "!type": "[numder]"
                    },
                    "monthsOfTheYear": {
                        "!doc": "The months of the year that the event occurs, as an array of Number objects. \nValues can be from 1 to 12. This parameter is only valid for recurrence rules of \ntype [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).\n",
                        "!type": "[numder]"
                    },
                    "daysOfTheYear": {
                        "!doc": "The days of the year that the event occurs, as an array of number objects. \nValues can be from 1 to 366 and from -1 to -366. This parameter is only valid for \nrecurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).\n",
                        "!type": "[numder]"
                    },
                    "interval": {
                        "!doc": "The interval between instances of this recurrence. For example, a weekly \nrecurrence rule with an interval of 2 occurs every other week. Must be greater than 0.\n",
                        "!type": "numder"
                    },
                    "setPositions": {
                        "!doc": "An array of ordinal numbers that filters which recurrences to include in the \nrecurrence rule's frequency. For example, a yearly recurrence rule that has a \n[daysOfTheWeek](Titanium.Calendar.RecurrenceRule.daysOfTheWeek) value that specifies \nMonday through Friday, and a `setPositions` array containing 2 and -1, occurs only \non the second weekday and last weekday of every year. \n",
                        "!type": "[numder]"
                    },
                    "end": {
                        "!doc": "End of a recurrence rule.",
                        "!type": "+recurrenceEndDictionary"
                    },
                    "daysOfTheWeek": {
                        "!doc": "The days of the week that the event occurs, as an Dictionay of `daysOfWeek` and `Week`. \n",
                        "!type": "+daysOfTheWeekDictionary"
                    },
                    "calendarID": {
                        "!doc": "Identifier for the recurrence rule's calendar.",
                        "!type": "string"
                    },
                    "frequency": {
                        "!doc": "Frequency of the recurrence rule.\n",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "daysOfTheMonth": {
                        "!doc": "The days of the month that the event occurs, as an array of number objects. \nValues can be from 1 to 31 and from -1 to -31. This parameter is only valid for \nrecurrence rules of type \n[RECURRENCEFREQUENCY_MONTHLY](Titanium.Calendar.RECURRENCEFREQUENCY_MONTHLY).\n",
                        "!type": "[numder]"
                    }
                }
            },
            "SPAN_FUTUREEVENTS": {
                "!doc": "A [save](Titanium.Calendar.Event.save)/[remove](Titanium.Calendar.Event.remove) event value, \nindicating modifications to this event instance should also affect future instances of this event.\n",
                "!type": "numder"
            },
            "allAlerts": {
                "!doc": "All alerts in selected calendars.",
                "!type": "+Array<Titanium.Calendar.Alert>"
            },
            "Alert": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Calendar.Alert",
                "!doc": "An object that represents a single alert for an event in an calendar.",
                "prototype": {
                    "eventId": {
                        "!doc": "Identifier of the event for which this alert is set.",
                        "!type": "numder"
                    },
                    "begin": {
                        "!doc": "Start date/time for the corresponding event.",
                        "!type": "+Date"
                    },
                    "end": {
                        "!doc": "End date/time for the corresponding event.",
                        "!type": "+Date"
                    },
                    "alarmTime": {
                        "!doc": "Date/time at which this alert alarm is set to trigger.",
                        "!type": "+Date"
                    },
                    "state": {
                        "!doc": "The current state of the alert.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "relativeOffset": {
                        "!doc": "The offset from the start of an event, at which the alarm fires.",
                        "!type": "numder"
                    },
                    "minutes": {
                        "!doc": "Reminder notice period in minutes, that determines how long prior to the event this alert \nshould trigger.\n",
                        "!type": "numder"
                    },
                    "id": {
                        "!doc": "Identifier of this alert.",
                        "!type": "string"
                    },
                    "absoluteDate": {
                        "!doc": "The absolute date for the alarm.",
                        "!type": "+Date"
                    }
                }
            },
            "STATE_SCHEDULED": {
                "!doc": "Alert scheduled status.",
                "!type": "numder"
            },
            "requestEventsAuthorization": {
                "!doc": "If authorization is unknown, will bring up a dialog requesting permission.",
                "!type": "fn(callback: +Callback<EventsAuthorizationResponse>)"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Calendar",
            "AVAILABILITY_TENTATIVE": {
                "!doc": "Event has a tentative availability setting.",
                "!type": "numder"
            },
            "STATE_FIRED": {
                "!doc": "Alert fired state.",
                "!type": "numder"
            },
            "METHOD_EMAIL": {
                "!doc": "Reminder email delivery method.",
                "!type": "numder"
            },
            "STATUS_TENTATIVE": {
                "!doc": "Event tentative status.",
                "!type": "numder"
            },
            "selectableCalendars": {
                "!doc": "All calendars selected within the native calendar app, which may be a subset of `allCalendars`. \n",
                "!type": "+Array<Titanium.Calendar.Calendar>"
            },
            "STATUS_CANCELED": {
                "!doc": "Event canceled status.",
                "!type": "numder"
            },
            "METHOD_SMS": {
                "!doc": "Reminder SMS delivery method.",
                "!type": "numder"
            },
            "VISIBILITY_PUBLIC": {
                "!doc": "Event public visibility.",
                "!type": "numder"
            },
            "RECURRENCEFREQUENCY_MONTHLY": {
                "!doc": "Indicates a monthly recurrence rule for a events reccurance frequency.",
                "!type": "numder"
            },
            "AUTHORIZATION_UNKNOWN": {
                "!doc": "A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value \nindicating that the authorization state is unknown.\n",
                "!type": "numder"
            },
            "AVAILABILITY_BUSY": {
                "!doc": "Event has a busy availability setting.",
                "!type": "numder"
            },
            "Calendar": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Calendar.Calendar",
                "!doc": "An object that represents a single calendar.",
                "prototype": {
                    "getEventsInDate": {
                        "!doc": "Gets events that occur on a specified date.",
                        "!type": "fn(year: numder, month: numder, day: numder) -> +Array<Titanium.Calendar.Event>"
                    },
                    "name": {
                        "!doc": "Display name of this calendar.",
                        "!type": "string"
                    },
                    "getEventsInMonth": {
                        "!doc": "Gets events that occur during a specified month.",
                        "!type": "fn(year: numder, month: numder) -> +Array<Titanium.Calendar.Event>"
                    },
                    "selected": {
                        "!doc": "Indicates whether the calendar is selected.",
                        "!type": "bool"
                    },
                    "getEventsBetweenDates": {
                        "!doc": "Gets events that occur between two dates.",
                        "!type": "fn(date1: +Date, date2: +Date) -> +Array<Titanium.Calendar.Event>"
                    },
                    "getEventsInYear": {
                        "!doc": "Gets all events that occur during a specified year.",
                        "!type": "fn(year: numder) -> +Array<Titanium.Calendar.Event>"
                    },
                    "getEventById": {
                        "!doc": "Gets the event with the specified identifier.",
                        "!type": "fn(id: numder) -> +Titanium.Calendar.Event"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "hidden": {
                        "!doc": "Indicates whether this calendar can be edited or deleted.",
                        "!type": "bool"
                    },
                    "id": {
                        "!doc": "Identifier of this calendar. Available only in iOS 5.0 and above.",
                        "!type": "string"
                    },
                    "createEvent": {
                        "!doc": "Creates an event in this calendar.",
                        "!type": "fn(properties: +Dictionary<Titanium.Calendar.Event>) -> +Titanium.Calendar.Event"
                    }
                }
            },
            "SPAN_THISEVENT": {
                "!doc": "A [save](Titanium.Calendar.Event.save)/[remove](Titanium.Calendar.Event.remove) event value, \nindicating modifications to this event instance should affect only this instance.\n",
                "!type": "numder"
            },
            "defaultCalendar": {
                "!doc": "Calendar that events are added to by default, as specified by user settings.\n",
                "!type": "+Titanium.Calendar.Calendar"
            },
            "METHOD_ALERT": {
                "!doc": "Reminder alert delivery method.",
                "!type": "numder"
            },
            "eventsAuthorization": {
                "!doc": "Returns an authorization constant indicating if the application has access to the events in the EventKit.",
                "!type": "numder"
            },
            "STATE_DISMISSED": {
                "!doc": "Alert dismissed state.",
                "!type": "numder"
            },
            "AUTHORIZATION_RESTRICTED": {
                "!doc": "A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value \nindicating that the application is not authorized to use events in the Calendar.\nthe user cannot change this application's status.\n",
                "!type": "numder"
            },
            "getCalendarById": {
                "!doc": "Gets the calendar with the specified identifier.",
                "!type": "fn(id: string) -> +Titanium.Calendar.Calendar"
            },
            "RECURRENCEFREQUENCY_WEEKLY": {
                "!doc": "Indicates a weekly recurrence rule for a events reccurance frequency.",
                "!type": "numder"
            },
            "allEditableCalendars": {
                "!doc": "All calendars known to the native calendar app that can add, edit, and \ndelete items in the calendar.\n",
                "!type": "+Array<Titanium.Calendar.Calendar>"
            },
            "STATUS_NONE": {
                "!doc": "Event has no status.",
                "!type": "numder"
            },
            "AVAILABILITY_NOTSUPPORTED": {
                "!doc": "Availability settings are not supported by the event's calendar.",
                "!type": "numder"
            },
            "Event": {
                "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Calendar.Event",
                "!doc": "An object that represents a single event in a calendar.",
                "prototype": {
                    "isDetached": {
                        "!doc": "Boolean value that indicates whether an event is a detached instance of a \nrepeating event.\n",
                        "!type": "bool"
                    },
                    "addRecurrenceRule": {
                        "!doc": "Adds a recurrence rule to the recurrence rule array.",
                        "!type": "fn(rule: +Titanium.Calendar.RecurrenceRule)"
                    },
                    "createRecurenceRule": {
                        "!doc": "Creates an recurrence pattern for a recurring event.\nAll of the properties for the recurrence rule must be set during creation. \nThe recurrence rule properties cannot be modified.\n",
                        "!type": "fn(data: +Dictionary<Titanium.Calendar.RecurrenceRule>) -> +Titanium.Calendar.RecurrenceRule"
                    },
                    "refresh": {
                        "!doc": "Updates the event's data with the current information in the Calendar database.",
                        "!type": "fn() -> bool"
                    },
                    "recurenceRule": {
                        "!doc": "Recurrence rule associated with the event. (Available in iOS 4.0 through iOS 5.1.)",
                        "!type": "+Titanium.Calendar.RecurrenceRule"
                    },
                    "id": {
                        "!doc": "Identifier of this event.",
                        "!type": "string"
                    },
                    "end": {
                        "!doc": "End date/time of this event.",
                        "!type": "+Date"
                    },
                    "title": {
                        "!doc": "Title of this event.",
                        "!type": "string"
                    },
                    "alerts": {
                        "!doc": "Alarms associated with the calendar item, as an array of <Titanium.Calendar.Alert> objects.",
                        "!type": "+Array<Titanium.Calendar.Alert>"
                    },
                    "availability": {
                        "!doc": "Availability of this event.",
                        "!type": "numder"
                    },
                    "!proto": "Titanium.Proxy.prototype",
                    "location": {
                        "!doc": "Location of this event.",
                        "!type": "string"
                    },
                    "createReminder": {
                        "!doc": "Creates a reminder for this event.",
                        "!type": "fn(data: +Dictionary<Titanium.Calendar.Reminder>) -> +Titanium.Calendar.Reminder"
                    },
                    "save": {
                        "!doc": "Saves changes to an event permanently.",
                        "!type": "fn(span: numder) -> bool"
                    },
                    "status": {
                        "!doc": "Status of this event.",
                        "!type": "numder"
                    },
                    "begin": {
                        "!doc": "Start date/time of this event.",
                        "!type": "+Date"
                    },
                    "description": {
                        "!doc": "Description of this event.",
                        "!type": "string"
                    },
                    "extendedProperties": {
                        "!doc": "Extended properties of this event.",
                        "!type": "+Dictionary"
                    },
                    "recurenceRules": {
                        "!doc": "The recurrence rules for the calendar item. (Available in iOS 5.1 and above.)",
                        "!type": "+Array<Titanium.Calendar.RecurrenceRule>"
                    },
                    "visibility": {
                        "!doc": "Visibility of this event.",
                        "!type": "numder"
                    },
                    "setExtendedProperty": {
                        "!doc": "Sets the value of the specified extended property.",
                        "!type": "fn(name: string, value: string)"
                    },
                    "allDay": {
                        "!doc": "Indicates whether this event is all day.",
                        "!type": "bool"
                    },
                    "notes": {
                        "!doc": "Notes for this event.",
                        "!type": "string"
                    },
                    "getExtendedProperty": {
                        "!doc": "Gets the value of the specified extended property.",
                        "!type": "fn(name: string) -> string"
                    },
                    "reminders": {
                        "!doc": "Existing reminders for this event.",
                        "!type": "+Array<Titanium.Calendar.Reminder>"
                    },
                    "remove": {
                        "!doc": "Removes an event from the event store.",
                        "!type": "fn(span: numder) -> bool"
                    },
                    "removeRecurenceRule": {
                        "!doc": "Removes a recurrence rule to the recurrence rule array.",
                        "!type": "fn(rule: +Titanium.Calendar.RecurrenceRule)"
                    },
                    "createAlert": {
                        "!doc": "Creates an alert for this event.",
                        "!type": "fn(data: +Dictionary<Titanium.Calendar.Alert>) -> +Titanium.Calendar.Alert"
                    },
                    "hasAlarm": {
                        "!doc": "Indicates whether an alarm is scheduled for this event.",
                        "!type": "bool"
                    }
                }
            },
            "allCalendars": {
                "!doc": "All calendars known to the native calendar app.",
                "!type": "+Array<Titanium.Calendar.Calendar>"
            },
            "AVAILABILITY_FREE": {
                "!doc": "Event has a free availability setting.",
                "!type": "numder"
            }
        },
        "Event": {
            "source": {
                "!doc": "Source object that fired the event.",
                "!type": "+Object"
            },
            "!doc": "The base type for all Titanium events.",
            "cancelBubble": {
                "!doc": "Set to true to stop the event from bubbling.",
                "!type": "bool"
            },
            "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Event",
            "bubbles": {
                "!doc": "True if the event will try to bubble up if possible.",
                "!type": "bool"
            },
            "type": {
                "!doc": "Name of the event fired.",
                "!type": "string"
            }
        }
    },
    "CloudPhotosResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPhotosResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "photos": {
                "!doc": "Set of `photos` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "ReadyStatePayload": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ReadyStatePayload",
        "!doc": "An Object describing the current ready state. See [onreadystatechange](Titanium.Network.HTTPClient.onreadystatechange) for more information.",
        "readyState": {
            "!doc": "The state for which `onreadystatechange` was invoked. Set to one of `Titanium.Network.HTTPClient` ready-state constants",
            "!type": "numder"
        }
    },
    "PushNotificationConfig": {
        "success": {
            "!doc": "Callback function called when the push registration is successfully completed.\n",
            "!type": "+Callback<PushNotificationSuccessArg>"
        },
        "!doc": "Simple object for specifying push notification options to\n[registerForPushNotifications](Titanium.Network.registerForPushNotifications).\n",
        "callback": {
            "!doc": "Callback function invoked upon receiving a new push notification.",
            "!type": "+Callback<PushNotificationData>"
        },
        "error": {
            "!doc": "Callback function called when an error occurs during registration.\n",
            "!type": "+Callback<PushNotificationErrorArg>"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PushNotificationConfig",
        "types": {
            "!doc": "Array of `NOTIFICATION_TYPE` constants that the application would like to receive.",
            "!type": "[numder]"
        }
    },
    "ReadCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ReadCallbackArgs",
        "!doc": "Argument passed to the read callback when an asynchronous [read](Titanium.Stream.read) operation\nfinishes.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "errorState": {
                "!doc": "Whether an error was encountered. Set to 1 in the case of an error, 0\notherwise.\n",
                "!type": "numder"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded.",
                "!type": "bool"
            },
            "errorDescription": {
                "!doc": "Text description of the error.",
                "!type": "string"
            },
            "source": {
                "!doc": "Stream being read.",
                "!type": "+Titanium.IOStream"
            },
            "!proto": "ErrorResponse.prototype",
            "bytesProcessed": {
                "!doc": "Number of bytes processed, or -1 in the event of an error or end of stream.",
                "!type": "numder"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "CloudACLsCheckResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudACLsCheckResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "permission": {
                "!doc": "Dictionary of permissions.",
                "!type": "+Dictionary"
            }
        }
    },
    "MapRouteType": {
        "name": {
            "!doc": "Route name.",
            "!type": "string"
        },
        "color": {
            "!doc": "Color to use when drawing the route, as a color name or hex triplet.\n",
            "!type": "string"
        },
        "!doc": "Simple object defining a map route.",
        "width": {
            "!doc": "Line width to use when drawing the route.",
            "!type": "numder"
        },
        "points": {
            "!doc": "Array of map points making up the route.",
            "!type": "[+MapPointType]"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MapRouteType"
    },
    "CloudChatsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudChatsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "chats": {
                "!doc": "Set of `chats` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "MediaQueryType": {
        "isCompilation": {
            "!doc": "Filter by whether or not the item is a compilation. Value should be a Boolean.",
            "!type": "+MediaQueryInfoType"
        },
        "albumTitle": {
            "!doc": "The album title to filter on. Value should be a String.",
            "!type": "+MediaQueryInfoType"
        },
        "!doc": "A specifier for a media library query. By default, filters perform an exact match.",
        "title": {
            "!doc": "The title to filter on. Value should be a String.",
            "!type": "+MediaQueryInfoType"
        },
        "mediaType": {
            "!doc": "The media type to filter on.",
            "!type": "+MediaQueryInfoType"
        },
        "genre": {
            "!doc": "The genre to filter on. Value should be a String.",
            "!type": "+MediaQueryInfoType"
        },
        "albumArtist": {
            "!doc": "The album artist to filter on. Value should be a String.",
            "!type": "+MediaQueryInfoType"
        },
        "composer": {
            "!doc": "The composer to filter on. Value should be a String.",
            "!type": "+MediaQueryInfoType"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MediaQueryType",
        "artist": {
            "!doc": "The artist to filter on. Value should be a String.",
            "!type": "+MediaQueryInfoType"
        },
        "grouping": {
            "!doc": "A constant that specifies the ordering of the result array.",
            "!type": "numder"
        }
    },
    "Gradient": {
        "endPoint": {
            "!doc": "End point for the gradient.",
            "!type": "+Point"
        },
        "backfillEnd": {
            "!doc": "Set to `true` to continue filling with the final color beyond the `endPoint`.",
            "!type": "bool"
        },
        "!doc": "A simple object defining a color gradient.",
        "backfillStart": {
            "!doc": "Set to `true` to continue filling with the starting color beyond the `startPoint`.",
            "!type": "bool"
        },
        "startRadius": {
            "!doc": "For a radial gradient, the radius at the `startPoint`.",
            "!type": "numder"
        },
        "endRadius": {
            "!doc": "For a radial gradient, the radius at the `endPoint`.",
            "!type": "numder"
        },
        "colors": {
            "!doc": "An array of colors, as a color name or hex triplet.\n",
            "!type": "[string]"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Gradient",
        "type": {
            "!doc": "Type of gradient, either 'linear' or 'radial'.",
            "!type": "string"
        },
        "startPoint": {
            "!doc": "Start point for the gradient.",
            "!type": "+Point"
        }
    },
    "MapPointType": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MapPointType",
        "!doc": "Simple object representing a point on the map.",
        "longitude": {
            "!doc": "Longitude value of the map point, in decimal degrees.",
            "!type": "numder"
        },
        "latitude": {
            "!doc": "Latitude value of the map point, in decimal degrees.",
            "!type": "numder"
        }
    },
    "BoundaryIdentifier": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/BoundaryIdentifier",
        "!doc": "Dictionary to specify a boundary identifier for <Titanium.UI.iOS.CollisionBehavior.addBoundary>.",
        "point2": {
            "!doc": "End point for the boundary",
            "!type": "+Point"
        },
        "identifier": {
            "!doc": "Arbitrary identifier for the boundary",
            "!type": "string"
        },
        "point1": {
            "!doc": "Start point for the boundary",
            "!type": "+Point"
        }
    },
    "CloudUsersSecureResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudUsersSecureResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "expiresIn": {
                "!doc": "Indicates the number of seconds before the access token expires.",
                "!type": "numder"
            },
            "!proto": "CloudResponse.prototype",
            "accessToken": {
                "!doc": "Identifies the current access token when using 3-Legged OAuth.",
                "!type": "string"
            }
        }
    },
    "showStatusBarParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/showStatusBarParams",
        "!doc": "Dictionary of options for the <Titanium.UI.iPhone.showStatusBar> method.",
        "animated": {
            "!doc": "Determines whether to animate the dialog as it is shown.",
            "!type": "bool"
        },
        "animationStyle": {
            "!doc": "Style of the animation.",
            "!type": "numder"
        }
    },
    "DocumentViewerOptions": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/DocumentViewerOptions",
        "!doc": "A simple object for specifying options when showing or dismissing a <Titanium.UI.iOS.DocumentViewer>.",
        "animated": {
            "!doc": "Indicates whether to animate the transition.",
            "!type": "bool"
        },
        "view": {
            "!doc": "Anchors the options menu to the specified view.",
            "!type": "+Titanium.UI.View"
        }
    },
    "CloudClientsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudClientsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "ip_address": {
                "!doc": "IP address of client.",
                "!type": "string"
            },
            "location": {
                "!doc": "Location of client.",
                "!type": "+Dictionary"
            }
        }
    },
    "!name": "titanium",
    "transitionAnimationParam": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/transitionAnimationParam",
        "!doc": "Dictionary specifying the transition animation used with the <Titanium.UI.iOS.createTransitionAnimation> method.\nOnly supported on iOS 7 and later.\n",
        "duration": {
            "!doc": "Length of the transition in milliseconds.",
            "!type": "numder"
        },
        "transitionFrom": {
            "!doc": "Animation to hide the current window.",
            "!type": "+Titanium.UI.Animation"
        },
        "tranistionTo": {
            "!doc": "Animation to show the new window.",
            "!type": "+Titanium.UI.Animation"
        }
    },
    "AcceptDict": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/AcceptDict",
        "!doc": "Options object for the [accept](Titanium.Network.Socket.TCP.accept) method.",
        "timeout": {
            "!doc": "Timeout, in milliseconds, for all `write` operations.",
            "!type": "numder"
        },
        "error": {
            "!doc": "Callback to be fired when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.",
            "!type": "+Callback<ErrorCallbackArgs>"
        }
    },
    "PushNotificationErrorArg": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PushNotificationErrorArg",
        "!doc": "A simple object passed to the \n[registerForPushNotifications](Titanium.Network.registerForPushNotifications) error callback.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns a non-zero value.",
                "!type": "numder"
            },
            "!proto": "FailureResponse.prototype",
            "type": {
                "!doc": "The value of this string is always \"remote\".",
                "!type": "string"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `false`.",
                "!type": "bool"
            }
        }
    },
    "CloudStatusesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudStatusesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "statuses": {
                "!doc": "Set of `statuses` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "Dictionary": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Dictionary",
        "!doc": "Plain JavaScript object."
    },
    "clearTimeout": {
        "!doc": "Cancels a one-time timer.",
        "!type": "fn(timerId: numder)"
    },
    "CloudKeyValuesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudKeyValuesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "keyvalues": {
                "!doc": "Set of `keyvalues` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "MediaQueryInfoType": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MediaQueryInfoType",
        "!doc": "A full query descriptor for a filtering predicate.",
        "exact": {
            "!doc": "Whether or not the predicate is for an exact match.  The default is `true`.",
            "!type": "bool"
        },
        "value": {
            "!doc": "The value for the given predicate. See the descriptions in <MediaQueryType> for information about which properties require which values.",
            "!type": "numder"
        }
    },
    "JSON": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Global.JSON",
        "!doc": "Global JSON object providing the [parse](Global.JSON.parse) and [stringify](Global.JSON.stringify) methods.",
        "stringify": {
            "!doc": "Produces a JSON text from a JavaScript value.",
            "!type": "fn(value: +Object, replacer: +Callback, space: numder) -> string"
        },
        "parse": {
            "!doc": "Parses a JSON text to produce an object or array.",
            "!type": "fn(text: string, reviver: +Callback) -> +Object"
        }
    },
    "CloudResponse": {
        "code": {
            "!doc": "Error code, if any returned.",
            "!type": "numder"
        },
        "success": {
            "!doc": "Indicates whether the request succeeded.",
            "!type": "bool"
        },
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "meta": {
            "!doc": "Meta data, if any returned.",
            "!type": "+Dictionary"
        },
        "error": {
            "!doc": "Indicates whether the request failed.",
            "!type": "bool"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudResponse",
        "message": {
            "!doc": "Error message, if any returned.",
            "!type": "string"
        }
    },
    "PumpCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PumpCallbackArgs",
        "!doc": "Argument passed to the callback each time the \n[pump](Titanium.Stream.pump) operation has new data to deliver.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "errorState": {
                "!doc": "Whether an error was encountered. Set to 1 in the case of an error, 0\notherwise.\n",
                "!type": "numder"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded.",
                "!type": "bool"
            },
            "buffer": {
                "!doc": "Buffer object holding the data currently being pumped to the handler method.",
                "!type": "+Titanium.Buffer"
            },
            "totalBytesProcessed": {
                "!doc": "Total number of bytes read from the stream so far, \nincluding the data passed to this current invocation of the handler.\n",
                "!type": "numder"
            },
            "source": {
                "!doc": "Stream being read from.",
                "!type": "+Titanium.IOStream"
            },
            "!proto": "ErrorResponse.prototype",
            "bytesProcessed": {
                "!doc": "Number of bytes being passed to this invocation of the handler, or \n-1 in the event of an error or end of stream.\n",
                "!type": "numder"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            },
            "errorDescription": {
                "!doc": "Text description of the error.",
                "!type": "string"
            }
        }
    },
    "GeocodedAddress": {
        "city": {
            "!doc": "City name.",
            "!type": "string"
        },
        "postalCode": {
            "!doc": "Postal code. On iOS, use `zipcode`.",
            "!type": "string"
        },
        "countryCode": {
            "!doc": "Country code. On iOS, use `country_code`.",
            "!type": "string"
        },
        "latitude": {
            "!doc": "Latitude of the geocoded point.",
            "!type": "string"
        },
        "!doc": "Simple object representing a place, returned in the callback from the \n[reverseGeocoder](Titanium.Geolocation.reverseGeocoder) method.\n",
        "address": {
            "!doc": "Full address.",
            "!type": "string"
        },
        "zipcode": {
            "!doc": "Postal code. On Android, use `postalCode`.",
            "!type": "string"
        },
        "longitude": {
            "!doc": "Longitude of the geocoded point.",
            "!type": "string"
        },
        "region2": {
            "!doc": "Not used.",
            "!type": "string"
        },
        "region1": {
            "!doc": "First line of region.",
            "!type": "string"
        },
        "street": {
            "!doc": "Street name, without street address.",
            "!type": "string"
        },
        "country_code": {
            "!doc": "Country code. Same as `country_code`.",
            "!type": "string"
        },
        "street1": {
            "!doc": "Street name.",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/GeocodedAddress",
        "country": {
            "!doc": "Country name.",
            "!type": "string"
        },
        "displayAddress": {
            "!doc": "Display address. Identical to `address`.",
            "!type": "string"
        }
    },
    "TableViewEdgeInsets": {
        "right": {
            "!doc": "Value specifying the right insets for the enclosing scroll view of the table.",
            "!type": "numder"
        },
        "bottom": {
            "!doc": "Value specifying the bottom insets for the enclosing scroll view of the table.",
            "!type": "numder"
        },
        "!doc": "The parameter for [setContentInsets](Titanium.UI.TableView.setContentInsets) method.",
        "top": {
            "!doc": "Value specifying the top insets for the enclosing scroll view of the table.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/TableViewEdgeInsets",
        "left": {
            "!doc": "Value specifying the left insets for the enclosing scroll view of the table.",
            "!type": "numder"
        }
    },
    "CameraMediaItemType": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CameraMediaItemType",
        "!doc": "A media object from the camera or photo gallery.",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0.",
                "!type": "numder"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `true`.",
                "!type": "bool"
            },
            "media": {
                "!doc": "The media object, as a [Blob](Titanium.Blob).",
                "!type": "+Titanium.Blob"
            },
            "mediaType": {
                "!doc": "The type of media, either `MEDIA_TYPE_PHOTO` or `MEDIA_TYPE_VIDEO` defined in <Titanium.Media>.",
                "!type": "string"
            },
            "!proto": "SuccessResponse.prototype",
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            },
            "cropRect": {
                "!doc": "Simple object defining the user's selected crop rectangle, or `null` if the user has not edited the photo.",
                "!type": "+CropRectType"
            }
        }
    },
    "ListViewAnimationProperties": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ListViewAnimationProperties",
        "!doc": "A simple object for specifying the animation properties to use when inserting or deleting\nsections or cells, or scrolling the list.\n",
        "position": {
            "!doc": "Specifies what position to scroll the selected cell to.",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Whether this list change should be animated. Ignored if any `animationStyle` value is specified.",
            "!type": "bool"
        },
        "animationStyle": {
            "!doc": "Type of animation to use for cell insertions and deletions.",
            "!type": "numder"
        }
    },
    "ReverseGeocodeResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ReverseGeocodeResponse",
        "!doc": "Simple object returned in the callback from the \n[reverseGeocoder](Titanium.Geolocation.reverseGeocoder) method.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "!proto": "ErrorResponse.prototype",
            "places": {
                "!doc": "An array of reverse-geocoded addresses matching the requested location.",
                "!type": "[+GeocodedAddress]"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "shadowDict": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/shadowDict",
        "!doc": "Dictionary describing the shadow effect for text.",
        "offset": {
            "!doc": "Dictionary with the properties `width` and `height` used as the horizontal\nand vertical offset of the shadow, respectively.\n",
            "!type": "+Dictionary"
        },
        "color": {
            "!doc": "Color name or hex triplet specifying the color of the shadow.",
            "!type": "string"
        },
        "blurRadius": {
            "!doc": "Specifies the blur radius of the shadow.",
            "!type": "numder"
        }
    },
    "setInterval": {
        "!doc": "Executes a function repeatedly with a fixed time delay between each call to that function.",
        "!type": "fn(function: +Callback, delay: numder) -> numder"
    },
    "MusicLibraryOptionsType": {
        "allowMultipleSelections": {
            "!doc": "Set to `true` to allow the user to select multiple items from the library.",
            "!type": "bool"
        },
        "success": {
            "!doc": "Function to call when the music library selection is made.",
            "!type": "+Callback<MusicLibraryResponseType>"
        },
        "!doc": "Simple object for specifying options to [openMusicLibrary](Titanium.Media.openMusicLibrary).",
        "cancel": {
            "!doc": "Function to call if the user presses the cancel button.",
            "!type": "+Callback<FailureResponse>"
        },
        "autohide": {
            "!doc": "Specifies that the library should be hidden automatically after media selection is completed.",
            "!type": "bool"
        },
        "error": {
            "!doc": "Function to call upon receiving an error.",
            "!type": "+Callback<FailureResponse>"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MusicLibraryOptionsType",
        "animated": {
            "!doc": "Boolean if the dialog should be animated when showing and hiding.",
            "!type": "bool"
        },
        "mediaTypes": {
            "!doc": "An array of media type constants defining selectable media.",
            "!type": "numder"
        }
    },
    "CloudPushSchedulesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushSchedulesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "push_schedules": {
                "!doc": "Array of [schedules push notifications](http://docs.appcelerator.com/arrowdb/latest/#!/api/PushSchedules), if any exist.",
                "!type": "[+Object]"
            }
        }
    },
    "CloudEventOccurrencesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudEventOccurrencesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "event_occurrences": {
                "!doc": "Set of `event` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "launchOptions": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/launchOptions",
        "!doc": "Dictionary describing the arguments passed to the application on startup.\nUse the [getArguments](Titanium.App.getArguments) method to retrieve the launch options.\n",
        "url": {
            "!doc": "This key indicates that the application was launched in order to open\nthe specified URL.\n",
            "!type": "string"
        },
        "launchOptionsLocationKey": {
            "!doc": "If set to `true`, this key indicates that the application was launched in response to an\nincoming location event.\n",
            "!type": "bool"
        },
        "source": {
            "!doc": "This key indicates that the application was launched by another\napplication with the specified bundle ID.\n",
            "!type": "string"
        }
    },
    "decodeURIComponent": {
        "!doc": "Replaces each escape sequence in the specified string, created using the `encodedURI` \nmethod, with the character that it represents. \n",
        "!type": "fn(encodedURI: string) -> string"
    },
    "CloudPushNotificationErrorArg": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationErrorArg",
        "!doc": "A simple object passed to the [retrieveDeviceToken](Modules.CloudPush.retrieveDeviceToken) error callback.\n",
        "error": {
            "!doc": "Description of the error.",
            "!type": "string"
        }
    },
    "WriteStreamCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/WriteStreamCallbackArgs",
        "!doc": "Argument passed to the callback when an asynchronous\n[writeStream](Titanium.Stream.writeStream) operation finishes.\n",
        "prototype": {
            "toStream": {
                "!doc": "Stream being written to.",
                "!type": "+Titanium.IOStream"
            },
            "errorDescription": {
                "!doc": "Text description of the error.",
                "!type": "string"
            },
            "fromStream": {
                "!doc": "Stream being read from.",
                "!type": "+Titanium.IOStream"
            },
            "errorState": {
                "!doc": "Whether an error was encountered. Set to 1 in the case of an error, 0\notherwise.\n",
                "!type": "numder"
            },
            "!proto": "ErrorResponse.prototype",
            "bytesProcessed": {
                "!doc": "Number of bytes processed, or -1 in the event of an error or end of stream.",
                "!type": "numder"
            }
        }
    },
    "contentOffsetOption": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/contentOffsetOption",
        "!doc": "Optional parameter for [setContentOffset](Titanium.UI.ScrollView.setContentOffset) method.",
        "animated": {
            "!doc": "Determines whether the scroll view's content area change is animated.",
            "!type": "bool"
        }
    },
    "LocationCoordinates": {
        "floor": {
            "!doc": "The floor of the building on which the user is located. Available in iOS 8.0 and later.",
            "!type": "+LocationCoordinatesFloor"
        },
        "!doc": "Simple object holding the data for a location update.",
        "altitude": {
            "!doc": "Altitude of the location update, in meters.",
            "!type": "numder"
        },
        "longitude": {
            "!doc": "Longitude of the location update, in decimal degrees.",
            "!type": "numder"
        },
        "latitude": {
            "!doc": "Latitude of the location update, in decimal degrees.",
            "!type": "numder"
        },
        "timestamp": {
            "!doc": "Timestamp for this location update, in milliseconds.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/LocationCoordinates",
        "altitudeAccuracy": {
            "!doc": "Vertical accuracy of the location update, in meters.",
            "!type": "numder"
        },
        "speed": {
            "!doc": "Current speed in meters/second. On iOS, a negative value indicates that the \nheading data is not valid.\n",
            "!type": "numder"
        },
        "heading": {
            "!doc": "Compass heading, in degrees. May be unknown if device is not moving. On \niOS, a negative value indicates that the heading data is not valid.\n",
            "!type": "numder"
        },
        "accuracy": {
            "!doc": "Accuracy of the location update, in meters.",
            "!type": "numder"
        }
    },
    "ActivityResult": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ActivityResult",
        "!doc": "Simple object passed to the\n[startActivityForResult](Titanium.Android.Activity.startActivityForResult) callback.\n",
        "resultCode": {
            "!doc": "Integer result code that the started activity passed to\n[setResult](Titanium.Android.Activity.setResult).\n",
            "!type": "numder"
        },
        "requestCode": {
            "!doc": "Unique, automatically generated integer request code.\n",
            "!type": "numder"
        },
        "intent": {
            "!doc": "Intent that can contain data returned to the caller. Data can be attached to\nthe intent as \"extras\").\n",
            "!type": "+Titanium.Android.Intent"
        }
    },
    "CloudUsersSecureDialog": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudUsersSecureDialog",
        "!doc": "Properties for the modal dialog used in 3-Legged OAuth",
        "title": {
            "!doc": "Defines the title for the dialog.",
            "!type": "string"
        }
    },
    "CloudFriendsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudFriendsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "users": {
                "!doc": "Set of `user` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "TableViewAnimationProperties": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/TableViewAnimationProperties",
        "!doc": "A simple object for specifying the animation properties to use when inserting or deleting rows, or scrolling the table.",
        "position": {
            "!doc": "Specifies what position to scroll the selected row to.",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Whether this table change should be animated. Ignored if any `animationStyle` value is specified.",
            "!type": "bool"
        },
        "animationStyle": {
            "!doc": "Type of animation to use for row insertions and deletions.",
            "!type": "numder"
        }
    },
    "CloudChatGroupsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudChatGroupsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "chat_groups": {
                "!doc": "Set of `chat_groups` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "FacebookGraphResponsev1": {
        "success": {
            "!doc": "Indicates if the request succeeded.",
            "!type": "bool"
        },
        "!doc": "Argument passed to the graph API callback, in response to a\n[requestWithGraphPath](Titanium.Facebook.requestWithGraphPath) call.\n",
        "result": {
            "!doc": "JSON response returned by Facebook.",
            "!type": "string"
        },
        "error": {
            "!doc": "Error message, if request failed.",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/FacebookGraphResponsev1",
        "path": {
            "!doc": "Graph API path of the original request.",
            "!type": "string"
        }
    },
    "ThumbnailResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ThumbnailResponse",
        "!doc": "Simple object passed to the thumbnail callback in response to the\n[requestThumbnailImagesAtTimes](Titanium.Media.VideoPlayer.requestThumbnailImagesAtTimes)\nmethod.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "image": {
                "!doc": "Thumbnail image, as a `Blob`.",
                "!type": "+Titanium.Blob"
            },
            "!proto": "ErrorResponse.prototype",
            "time": {
                "!doc": "Time offset for the thumbnail, in seconds.",
                "!type": "numder"
            }
        }
    },
    "PushNotificationData": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PushNotificationData",
        "!doc": "A simple object representing a push notification.",
        "data": {
            "!doc": "The `userinfo` dictionary passed to the Apple Push Notification Service.",
            "!type": "+Dictionary"
        },
        "inBackground": {
            "!doc": "Boolean indicating if notification was received while app was in background. \nThis property became available in Titanium Mobile 3.1.0 for iOS.\n",
            "!type": "bool"
        }
    },
    "YQLResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/YQLResponse",
        "!doc": "Properties passed to a yql callback to report a success or failure.",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "message": {
                "!doc": "Error message, if any returned. Use `error` instead",
                "!type": "string"
            },
            "!proto": "ErrorResponse.prototype",
            "data": {
                "!doc": "The data payload received from the YQL.",
                "!type": "+Object"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "GradientColorRef": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/GradientColorRef",
        "!doc": "A simple object consisting of a color and an offset.",
        "color": {
            "!doc": "Color value at this point in the gradient, as a color name or hex triplet.\n",
            "!type": "string"
        },
        "offset": {
            "!doc": "Offset of this color in the gradient, from 0 (start) to 1 (end).",
            "!type": "numder"
        }
    },
    "closeWindowParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/closeWindowParams",
        "!doc": "Dictionary of options for the <Titanium.UI.Window.close> method.",
        "activityExitAnimation": {
            "!doc": "Animation resource to use for the outgoing activity (heavyweight window).",
            "!type": "numder"
        },
        "animated": {
            "!doc": "Determines whether to use an animated effect when the window is closed.\n",
            "!type": "bool"
        },
        "activityEnterAnimation": {
            "!doc": "Animation resource to use for the incoming activity.",
            "!type": "numder"
        }
    },
    "CloudLikesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudLikesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "likes": {
                "!doc": "Set of `like` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "animationOption": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/animationOption",
        "!doc": "Optional parameter for [setShowMasterInPortrait](Titanium.UI.iOS.SplitWindow.setShowMasterInPortrait) and \n[setMasterIsOverlayed](Titanium.UI.iOS.SplitWindow.setMasterIsOverlayed) methods.\n",
        "animated": {
            "!doc": "Determines whether the change is animated.",
            "!type": "bool"
        }
    },
    "Ti": {
        "!proto": "Titanium"
    },
    "CloudPhotoCollectionsPhotosResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPhotoCollectionsPhotosResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "photos": {
                "!doc": "Set of `photos` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "ErrorResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ErrorResponse",
        "!doc": "Properties used in any event or callback which needs to report a success or failure.",
        "code": {
            "!doc": "Error code. Returns 0 if `success` is `true`.",
            "!type": "numder"
        },
        "success": {
            "!doc": "Indicates if the operation succeeded.",
            "!type": "bool"
        },
        "error": {
            "!doc": "Error message, if any returned.",
            "!type": "string"
        }
    },
    "showParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/showParams",
        "!doc": "Dictionary of options for the <Titanium.UI.OptionDialog.show> method.",
        "animated": {
            "!doc": "Determines whether to animate the dialog as it is shown.",
            "!type": "bool"
        },
        "rect": {
            "!doc": "Positions the arrow of the option dialog relative to the attached view's dimensions.",
            "!type": "+Dimension"
        },
        "view": {
            "!doc": "View to which to attach the dialog.",
            "!type": "+Titanium.UI.View"
        }
    },
    "CreateStreamArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CreateStreamArgs",
        "!doc": "Argument passed to [createStream](Titanium.Stream.createStream).",
        "mode": {
            "!doc": "Mode to open the stream in.",
            "!type": "numder"
        },
        "source": {
            "!doc": "Object that the stream will read from or write to.",
            "!type": "+Titanium.Blob"
        }
    },
    "DecodeNumberDict": {
        "!doc": "Named parameters for <Titanium.Codec.decodeNumber>.",
        "source": {
            "!doc": "Buffer to decode.",
            "!type": "+Titanium.Buffer"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/DecodeNumberDict",
        "position": {
            "!doc": "Index in the `source` buffer of the first byte of data to decode.",
            "!type": "numder"
        },
        "type": {
            "!doc": "The encoding type to use.",
            "!type": "string"
        },
        "byteOrder": {
            "!doc": "byte order to decode with.",
            "!type": "numder"
        }
    },
    "FailureResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/FailureResponse",
        "!doc": "Properties used in any event or callback which needs to report a failure.",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns a non-zero value.",
                "!type": "numder"
            },
            "!proto": "ErrorResponse.prototype",
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `false`.",
                "!type": "bool"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "ForwardGeocodeResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ForwardGeocodeResponse",
        "!doc": "Simple object returned in the callback from the \n[forwardGeocoder](Titanium.Geolocation.forwardGeocoder) method.\n\nNote that Android includes a number of extra fields.\n",
        "prototype": {
            "city": {
                "!doc": "City name.",
                "!type": "string"
            },
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "street": {
                "!doc": "Street name, without street address.",
                "!type": "string"
            },
            "countryCode": {
                "!doc": "Country code.",
                "!type": "string"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded.",
                "!type": "bool"
            },
            "street1": {
                "!doc": "Street name.",
                "!type": "string"
            },
            "address": {
                "!doc": "Full address.",
                "!type": "string"
            },
            "longitude": {
                "!doc": "Longitude of the geocoded address.",
                "!type": "string"
            },
            "region2": {
                "!doc": "Not used.",
                "!type": "string"
            },
            "region1": {
                "!doc": "First line of region.",
                "!type": "string"
            },
            "!proto": "ErrorResponse.prototype",
            "postalCode": {
                "!doc": "Postal code.",
                "!type": "string"
            },
            "country_code": {
                "!doc": "Country code. Same as `countryCode`.",
                "!type": "string"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            },
            "latitude": {
                "!doc": "Latitude of the geocoded address.",
                "!type": "string"
            },
            "country": {
                "!doc": "Country name.",
                "!type": "string"
            },
            "displayAddress": {
                "!doc": "Display address. Identical to `address`.",
                "!type": "string"
            },
            "accuracy": {
                "!doc": "Estimated accuracy of the geocoding, in meters.",
                "!type": "numder"
            }
        }
    },
    "AcceptedCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/AcceptedCallbackArgs",
        "!doc": "Argument object passed to the [accepted](Titanium.Network.Socket.TCP.accepted)\ncallback when a listener accepts a connection.\n",
        "inbound": {
            "!doc": "Socket which represents the inbound connection.",
            "!type": "+Titanium.Network.Socket.TCP"
        },
        "socket": {
            "!doc": "Socket which received the connection.",
            "!type": "+Titanium.Network.Socket.TCP"
        }
    },
    "CloudEventsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudEventsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "events": {
                "!doc": "Set of `event` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "ListViewMarkerProps": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ListViewMarkerProps",
        "!doc": "The parameter for [setMarker](Titanium.UI.ListView.setMarker) and [addMarker](Titanium.UI.ListView.addMarker) methods.",
        "sectionIndex": {
            "!doc": "The sectionIndex of the reference item.",
            "!type": "numder"
        },
        "itemIndex": {
            "!doc": "The itemIndex of the reference item.",
            "!type": "numder"
        }
    },
    "ContactsAuthorizationResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ContactsAuthorizationResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "ErrorResponse.prototype"
        }
    },
    "PreviewImageError": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PreviewImageError",
        "!doc": "The parameter passed to the `error` callback of <PreviewImageOptions>.",
        "prototype": {
            "code": {
                "!doc": "Error code, if applicable.",
                "!type": "numder"
            },
            "message": {
                "!doc": "Description of the error.",
                "!type": "string"
            },
            "!proto": "FailureResponse.prototype",
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `false`.",
                "!type": "bool"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/Global",
    "ConnectedCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ConnectedCallbackArgs",
        "!doc": "Argument object passed to the [connected](Titanium.Network.Socket.TCP.connected) callback when the socket connects.",
        "socket": {
            "!doc": "Socket instance that has been connected.",
            "!type": "+Titanium.Network.Socket.TCP"
        }
    },
    "CloudMessagesResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudMessagesResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "messages": {
                "!doc": "Set of `message` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "NotificationParams": {
        "category": {
            "!doc": "String identifier of category of actions to be displayed for an interactive\nnotification (only for iOS 8 and above).\n",
            "!type": "string"
        },
        "sound": {
            "!doc": "Path to the sound file to play when notification occurs, relative to the `Resources` folder.\n",
            "!type": "string"
        },
        "repeat": {
            "!doc": "Interval to repeat the notification. One of `weekly`, `daily`, `yearly,` `monthly`.",
            "!type": "string"
        },
        "!doc": "Dictionary object of parameters used to create a notification using \n<Titanium.App.iOS.scheduleLocalNotification>.\n",
        "alertLaunchImage": {
            "!doc": "Image to display instead of `Default.png` when launching the application.",
            "!type": "string"
        },
        "alertBody": {
            "!doc": "Alert message to display.",
            "!type": "string"
        },
        "date": {
            "!doc": "Date and time for the notification to occur.",
            "!type": "+Date"
        },
        "userInfo": {
            "!doc": "Data to pass to the application with the notification event.",
            "!type": "+Dictionary"
        },
        "alertAction": {
            "!doc": "Alert button text ('Open', by default) or slider text ('slide to unlock...', by default)\nto display.\n",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/NotificationParams",
        "timezone": {
            "!doc": "Timezone of the date configured for the notification. If not set, the system timezone is used.\n",
            "!type": "string"
        },
        "badge": {
            "!doc": "Application badge value.",
            "!type": "numder"
        }
    },
    "CloudPushNotificationsShowChannelResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationsShowChannelResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "devices": {
                "!doc": "Dictionary containing counts of devices subscribed to a push channel, grouped by platform.",
                "!type": "+Dictionary"
            }
        }
    },
    "ImageAsCroppedDict": {
        "width": {
            "!doc": "Width to crop this image to.",
            "!type": "numder"
        },
        "!doc": "Simple object used to specify options for [imageAsCropped](Titanium.Blob.imageAsCropped).",
        "height": {
            "!doc": "Height to crop this image to.",
            "!type": "numder"
        },
        "y": {
            "!doc": "Top coordinate of the cropped rectangle within the source image.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ImageAsCroppedDict",
        "x": {
            "!doc": "Left coordinate of the cropped rectangle within the source image.",
            "!type": "numder"
        }
    },
    "daysOfTheWeekDictionary": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/daysOfTheWeekDictionary",
        "!doc": "Dictionary containing `daysOfWeek` and `week`.",
        "daysOfWeek": {
            "!doc": "The day of the week. Values are from 1 to 7, with Sunday being 1.",
            "!type": "numder"
        },
        "week": {
            "!doc": "The week number of the day of the week.\nValues range from -53 to 53. A negative value indicates a value from the end of \nthe range. 0 indicates the week number is irrelevant.\n",
            "!type": "numder"
        }
    },
    "CloudPhotoCollectionsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPhotoCollectionsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "collections": {
                "!doc": "Set of `collections` objects, if any exist.",
                "!type": "[+Dictionary]"
            }
        }
    },
    "alert": {
        "!doc": "Displays a pop-up alert dialog with the passed in `message`.",
        "!type": "fn(message: string)"
    },
    "PreviewImageOptions": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PreviewImageOptions",
        "!doc": "Options passed to <Titanium.Media.previewImage>.",
        "image": {
            "!doc": "The image to preview. Must be a blob based on a file, such as from <Titanium.Filesystem.File.read>.",
            "!type": "+Titanium.Blob"
        },
        "success": {
            "!doc": "Function to be called back if the preview succeeds. No info is passed.",
            "!type": "+Callback<Object>"
        },
        "error": {
            "!doc": "Function called back if the preview fails. Check the `message` property of passed back parameter.",
            "!type": "+Callback<PreviewImageError>"
        }
    },
    "ReferenceInsets": {
        "right": {
            "!doc": "Right inset.",
            "!type": "numder"
        },
        "bottom": {
            "!doc": "Bottom inset.",
            "!type": "numder"
        },
        "!doc": "Dictionary to specify edge insets for <Titanium.UI.iOS.CollisionBehavior.referenceInsets>.",
        "top": {
            "!doc": "Top inset.",
            "!type": "numder"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ReferenceInsets",
        "left": {
            "!doc": "Left inset.",
            "!type": "numder"
        }
    },
    "UserNotificationSettings": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/UserNotificationSettings",
        "!doc": "Dictionary object of parameters used to register the application with local notifications using\nthe <Titanium.App.iOS.registerUserNotificationSettings> method.\n\nTo retrieve the current notification settings, use the\n<Titanium.App.iOS.currentUserNotificationSettings> property.\n",
        "categories": {
            "!doc": "Set of categories of user notification actions required by the applicaiton to use.",
            "!type": "+Array<Titanium.App.iOS.UserNotificationCategory>"
        },
        "types": {
            "!doc": "Notification types to use.",
            "!type": "[numder]"
        }
    },
    "ErrorCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ErrorCallbackArgs",
        "!doc": "Object passed to the error callback when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.",
        "prototype": {
            "errorCode": {
                "!doc": "The error code of the error (potentially system-dependent).",
                "!type": "numder"
            },
            "!proto": "FailureResponse.prototype",
            "socket": {
                "!doc": "Socket that experienced the error.",
                "!type": "+Titanium.Network.Socket.TCP"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded. Returns `false`.",
                "!type": "bool"
            },
            "code": {
                "!doc": "Error code. Returns a non-zero value.",
                "!type": "numder"
            }
        }
    },
    "MediaScannerResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MediaScannerResponse",
        "!doc": "Simple object passed to the [scanMediaFiles](Titanium.Media.Android.scanMediaFiles) callback.",
        "uri": {
            "!doc": "URI to the file if it was scanned and added to the media library, or `null`\nif the file was not added.\n",
            "!type": "string"
        },
        "path": {
            "!doc": "Path to the media file that was scanned.",
            "!type": "string"
        }
    },
    "WriteCallbackArgs": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/WriteCallbackArgs",
        "!doc": "Argument passed to the write callback when an asynchronous\n[write](Titanium.Stream.write) operation\nfinishes.\n",
        "prototype": {
            "code": {
                "!doc": "Error code. Returns 0 if `success` is `true`.",
                "!type": "numder"
            },
            "errorState": {
                "!doc": "Whether an error was encountered. Set to 1 in the case of an error, 0\notherwise.\n",
                "!type": "numder"
            },
            "success": {
                "!doc": "Indicates if the operation succeeded.",
                "!type": "bool"
            },
            "errorDescription": {
                "!doc": "Text description of the error.",
                "!type": "string"
            },
            "source": {
                "!doc": "Stream being written to.",
                "!type": "+Titanium.IOStream"
            },
            "!proto": "ErrorResponse.prototype",
            "bytesProcessed": {
                "!doc": "Number of bytes processed, or -1 in the event of an error or end of stream.",
                "!type": "numder"
            },
            "error": {
                "!doc": "Error message, if any returned.",
                "!type": "string"
            }
        }
    },
    "CloudObjectsResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudObjectsResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "classname": {
                "!doc": "Set of `classname` objects, if any exist.",
                "!type": "[+Dictionary]"
            },
            "!proto": "CloudResponse.prototype"
        }
    },
    "CloudPushNotificationSuccessArg": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationSuccessArg",
        "!doc": "A simple object passed to the [retrieveDeviceToken](Modules.CloudPush.retrieveDeviceToken) success callback.\n",
        "deviceToken": {
            "!doc": "The device token which this device was registered for.",
            "!type": "string"
        }
    },
    "ServiceIntentOptions": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/ServiceIntentOptions",
        "!doc": "Options passed to <Titanium.Android.createServiceIntent>.",
        "startMode": {
            "!doc": "One of the `START_` constants from <Titanium.Android> to specify the \"stickiness\" of the Service when Android shuts down the host application.",
            "!type": "numder"
        },
        "url": {
            "!doc": "URL for the service's JavaScript.",
            "!type": "string"
        }
    },
    "MediaAuthorizationResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/MediaAuthorizationResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully or erroneously.",
        "prototype": {
            "!proto": "ErrorResponse.prototype"
        }
    },
    "EncodeStringDict": {
        "destPosition": {
            "!doc": "Index in the `dest` buffer of the first byte of the encoded string.",
            "!type": "numder"
        },
        "charset": {
            "!doc": "Character encoding to use when encoding this string to bytes.",
            "!type": "string"
        },
        "dest": {
            "!doc": "Destination buffer.",
            "!type": "+Titanium.Buffer"
        },
        "!doc": "Named parameters for <Titanium.Codec.encodeString>.",
        "sourceLength": {
            "!doc": "Number of characters in `source` to encode.",
            "!type": "numder"
        },
        "sourcePosition": {
            "!doc": "Position in `source` to start encoding.",
            "!type": "numder"
        },
        "source": {
            "!doc": "Source string to encode.",
            "!type": "string"
        },
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/EncodeStringDict"
    },
    "PopoverParams": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/PopoverParams",
        "!doc": "Dictionary of options for <Titanium.UI.iPad.Popover.show> and <Titanium.UI.iPad.Popover.hide>.",
        "animated": {
            "!doc": "Indicates whether to animate showing or hiding the popover.",
            "!type": "bool"
        },
        "rect": {
            "!doc": "Sets the arrow position of the popover relative to the attached view object's dimensions\nwhen showing the popover.\n",
            "!type": "+Dimension"
        },
        "view": {
            "!doc": "Attaches the popover to the specified view when showing the popover.",
            "!type": "+Titanium.UI.View"
        }
    },
    "encodeURIComponent": {
        "!doc": "Replaces each special character in the specified string with the equivalent URI escape \nsequence. Useful for encoding URIs.\n",
        "!type": "fn(string: string) -> string"
    },
    "CloudPushNotificationsQueryChannelResponse": {
        "!url": "http://docs.appcelerator.com/titanium/latest/#!/api/CloudPushNotificationsQueryChannelResponse",
        "!doc": "Argument passed to the callback when a request finishes successfully.",
        "prototype": {
            "!proto": "CloudResponse.prototype",
            "push_channels": {
                "!doc": "Array of `push_channel` names, if any exist.",
                "!type": "[string]"
            }
        }
    }
}