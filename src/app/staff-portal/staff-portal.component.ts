import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-staff-portal',
  templateUrl: './staff-portal.component.html',
  styleUrls: ['./staff-portal.component.css']
})
export class StaffPortalComponent implements OnInit {
  shifts = [
    { workingDays: 'Mon-Fri', shift: 'Morning' },
    { workingDays: 'Mon-Wed, Fri', shift: 'Evening' },
    { workingDays: 'Tue-Thu', shift: 'Night' }
  ];

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('capturedImage') capturedImage!: ElementRef<HTMLImageElement>;

  capturedImageUrl: string | null = null;

  ngOnInit() {
    this.startVideo();
  }

  startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const videoElement = this.video.nativeElement;
        videoElement.srcObject = stream;
        videoElement.play();
      })
      .catch(err => console.error('Error accessing webcam: ', err));
  }

  captureImage() {
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');
    if (context) {
      context.drawImage(this.video.nativeElement, 0, 0, canvasElement.width, canvasElement.height);
      this.capturedImageUrl = canvasElement.toDataURL('image/png');
    }
  }
}
