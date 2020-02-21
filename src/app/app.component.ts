import { Component, OnInit } from '@angular/core';
import { AuthConstants } from "../services/CommonServices/config/auth-constants";
import { LStorageService} from "../services/CommonServices/localStorage/lstorage.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private localstorage : LStorageService) {}
  title = 'eiotc';
  selectedUrl: string='assets/img/iotchallenge.png';
  intervalId = 0;
  message = '';
  countDownDate = new Date(2020, 4, 17, 8, 0, 0).getTime();
  days = {
    x: 0,
    y: 0
  };
  hours = {
    x: 0,
    y: 0
  };
  minutes = {
    x: 0,
    y: 0
  };
  seconds = {
    x: 0,
    y: 0
  };

  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;


  ngOnInit() {
    this.localstorage.getToken();
    this.start();
    this.particle()
  }
  
  start() { this.countDown(); }

  private countDown() {
    this.intervalId = window.setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days.x = Math.floor(distance / (1000 * 60 * 60 * 24 * 10));
      this.days.y = Math.floor(distance / (1000 * 60 * 60 * 24)) % 10;
      this.hours.x = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 10));
      this.hours.y = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) % 10;
      this.minutes.x = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 10));
      this.minutes.y = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) % 10;
      this.seconds.x = Math.floor((distance % (1000 * 60)) / 10000);
      this.seconds.y = Math.floor((distance % (1000 * 60)) / 1000) % 10;

    }, 1000);


  }
  particle() {
    this.style = {
      'position': 'fixed',
      'width': '100%',
      'height': '879px',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.params = {


      particles: {

        number: {
          "value": 500,
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        color: {
          "value": "#ffffff"
        },
        shape: {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        opacity: {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        size: {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        line_linked: {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        move: {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      interactivity: {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          onclick: {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        modes: {
          "grab": {
            "distance": 300,
            "line_linked": {
              "opacity": 1
            }
          },
          bubble: {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          repulse: {
            "distance": 200
          },
          push: {
            "particles_nb": 4
          },
          remove: {
            "particles_nb": 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  }
}
