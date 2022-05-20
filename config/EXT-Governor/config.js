var defaultConfig = {
  module: 'EXT-Governor',
  disabled: false,
  config: {
    debug: false,
    sleeping: "powersave",
    working: "ondemand"
  }
}

var schema = {
  "title": "EXT-Governor",
  "description": "Properties for EXT-Governor plugin",
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "title": "Plugin name",
      "default": "EXT-Governor"
    },
    "disabled": {
      "type": "boolean",
      "title": "Disable the plugin",
      "default": false
    },
    "config": {
      "type": "object",
      "title": "Configuration",
      "properties": {
        "debug": {
          "type": "boolean",
          "title": "Enable debug mode",
          "default": false
        },
        "sleeping": {
          "type": "string",
          "title": "Name of the governor when screen is in sleeping state",
          "default": "powersave",
          "enum": [ "ondemand", "powersave", "performance", "conservative" , "userspace"  ]
        },
        "working": {
          "type": "string",
          "title": "Name of the governor when screen is actived",
          "default": "ondemand",
          "enum": [ "ondemand", "powersave", "performance", "conservative" , "userspace"  ]
        },
      }
    }
  },
  "required": ["module"]
}

var fr = {
  "description": "Propriété du plugin EXT-Governor",
  "properties": {
    "module": {
      "title": "Nom du Plugin",
    },
    "disabled": {
      "title": "Désactive le plugin"
    },
    "config": {
      "title": "Configuration",
      "properties": {
        "debug": {
          "title": "Active le mode debug"
        },
        "sleeping": {
          "title": "Nom du gouverneur lorsque l'écran est en état de veille"
        },
        "working": {
          "title": "Nom du gouverneur lorsque l'écran est allumé"
        }
      }
    }
  }
}

var nl = {
  "description": "Properties for EXT-Governor plugin",
  "properties": {
    "module": {
      "title": "Plugin name"
    },
    "disabled": {
      "title": "Disable the plugin"
    },
    "config": {
      "title": "Configuration",
      "properties": {
        "debug": {
          "title": "Enable debug mode"
        },
        "sleeping": {
          "title": "Name of the governor when screen is in sleeping state"
        },
        "working": {
          "title": "Name of the governor when screen is actived"
        }
      }
    }
  }
}

exports.default = defaultConfig
exports.schema = schema
exports.fr = fr
exports.nl = nl
