var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3026628613219966,
        "pitch": -0.07128209187290047,
        "fov": 1.3813713029262302
      },
      "linkHotspots": [
        {
          "yaw": 0.032086647861127915,
          "pitch": -0.21695348113615864,
          "rotation": 13.351768777756625,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8292072403097102,
          "pitch": 0.15690301954978736,
          "title": "Welcome!<br>",
          "text": "To Engineering!<br>"
        },
        {
          "yaw": 1.1430589492234873,
          "pitch": -0.3725956586560386,
          "title": "Tree<br>",
          "text": "Its a tree<br>"
        },
        {
          "yaw": -0.0018675540480685981,
          "pitch": -0.4940415192304055,
          "title": "Tree<br>",
          "text": "Just a tree<br>"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.08044726010224856,
        "pitch": -0.2571988020136686,
        "fov": 1.3813713029262302
      },
      "linkHotspots": [
        {
          "yaw": 0.09441517238179209,
          "pitch": 0.15459034283696838,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": 3.04525119684338,
          "pitch": 0.23139187502312453,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08044726010224856,
          "pitch": -0.2571988020136686,
          "title": "Engineering building<br>",
          "text": "building for engineering students<br>"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.776949564257361,
        "pitch": -0.13947458387363199,
        "fov": 1.3813713029262302
      },
      "linkHotspots": [
        {
          "yaw": -3.065734572315389,
          "pitch": 0.29071776469373845,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3977312983987247,
          "pitch": -0.2710493860464567,
          "title": "The old cafe<br>",
          "text": "It's been replaced by another cafe.<br>"
        },
        {
          "yaw": -2.251257522382902,
          "pitch": 0.043480902907163,
          "title": "?<br>",
          "text": "I'm not sure where this goes <br>"
        },
        {
          "yaw": -3.085440662722762,
          "pitch": -0.24064248896520368,
          "title": "2nd floor<br>",
          "text": "Never been in the building not sure whats up there<br>"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
