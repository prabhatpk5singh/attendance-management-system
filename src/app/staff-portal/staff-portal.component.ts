import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-staff-portal',
  templateUrl: './staff-portal.component.html',
  styleUrls: ['./staff-portal.component.css']
})
export class StaffPortalComponent implements OnInit {
  @ViewChild('video', { static: true }) video!: ElementRef;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;
  roster: any[] = [];
  attendanceMessage: string = '';
  capturedImage: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.loadRoster();
    if (isPlatformBrowser(this.platformId)) {
      this.initWebcam();
    }
  }

  loadRoster() {
    // Mock data
    this.roster = [
      { name: 'Prabhat Roshan', workingDays: 'Mon-Fri', shift: 'Morning' },
      { name: 'Deepak Singh', workingDays: 'Mon-Wed, Fri', shift: 'Evening' },
      { name: 'Karan Sharma', workingDays: 'Tue-Thu', shift: 'Night' },
    ];
  }

  initWebcam() {
    const videoElement = this.video.nativeElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoElement.srcObject = stream;
        videoElement.play();
      }).catch(error => {
        console.error('Error accessing webcam: ', error);
      });
    } else {
      console.error('Webcam not supported in this environment');
    }
  }

  capture() {
    const context = this.canvas.nativeElement.getContext('2d');
    context.drawImage(this.video.nativeElement, 0, 0, 320, 240);
    this.capturedImage = this.canvas.nativeElement.toDataURL('image/png');
    this.attendanceMessage = 'Attendance marked successfully!';
  }
}
