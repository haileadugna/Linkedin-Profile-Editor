import { Component } from '@angular/core';
import { EditorService } from '../services/editor.service';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent {

  constructor(private editorService:EditorService) { }

  headline: string = "";
  about: string = "";
  expirence: string = "";
  UpdateAbout: string = "";
  UpdateHeadline: string = "";
  UpdateExpirence: string = "";

  // Initialize the copied status
  copiedStatus: { [key: string]: boolean } = {};

  copyText(event: Event, key: string) {
    const button = event.target as HTMLButtonElement;
    const paragraph = button.previousElementSibling as HTMLParagraphElement;
    
    const range = document.createRange();
    range.selectNode(paragraph);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    
    document.execCommand('copy');
    
    window.getSelection()?.removeAllRanges();

    // Set the copied status for the respective section
    this.copiedStatus[key] = true;

    // Reset the copied status after a certain duration if needed
    setTimeout(() => {
      this.copiedStatus[key] = false;
    }, 2000);
  }

  // Define isCopied method outside of copyText
  isCopied(key: string): boolean {
    return this.copiedStatus[key] || false;
  }

  sharedAbout() {
    this.editorService.getProfileAbout(this.about).subscribe(UpdateAbout=>{
      this.UpdateAbout = this.about;
      this.about = "";
    });
  }

  sharedHeadline() {
    this.editorService.getProfileHeader(this.headline).subscribe(UpdateHeadline=>{
      this.UpdateHeadline = this.headline;
      this.headline = "";
    });
  }

  sharedExpirence() {
    this.editorService.getProfileExpirence(this.expirence).subscribe(UpdateExpirence=>{
      this.UpdateExpirence = this.expirence;
      this.expirence = "";
    });
  }
}
