var defaultConfig = {
  module: "EXT-Background",
  disabled: false,
  config: {
    model: "jarvis",
    myImage: null
  }
}

var schema = {
  "title": "EXT-Background",
  "description": "Properties for EXT-Background plugin",
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "title": "Plugin name",
      "default": "EXT-Background"
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
        "model": {
          "type": "string",
          "title": "Choose your model",
          "default": "jarvis",
          "enum": ["jarvis", "lego", "old", "cortana"]
        },
        "myImage": {
          "type": ["string", "null"],
          "title": "Choose your personal image, if don't want model",
          "default": null
        }
      },
      "required": ["model"]
    }
  },
  "required": ["config","module"]
}

var fr = {
  "description": "Propriété pour le plugin EXT-Background",
  "properties": {
    "module": {
      "title": "Nom du plugin",
    },
    "disabled": {
      "title": "Désactiver le plugin"
    },
    "config": {
      "title": "Configuration",
      "properties": {
        "model": {
          "title": "Choisissez votre modèle"
        },
        "myImage": {
          "title": "Choisissez votre image personnelle, si vous ne voulez pas de modèle"
        }
      }
    }
  }
}

var nl = {
  "description": "Eigenschappen van de EXT-Background plugin",
  "properties": {
    "module": {
      "title": "Plugin naam"
    },
    "disabled": {
      "title": "De plugin uitschakelen"
    },
    "config": {
      "title": "Instellingen",
      "properties": {
        "model": {
          "title": "Kies uw model"
        },
        "myImage": {
          "title": "Kies zelf een afbeelding, als je geen model wilt"
        }
      }
    }
  }
}

exports.default = defaultConfig
exports.schema = schema
exports.fr = fr
exports.nl = nl
