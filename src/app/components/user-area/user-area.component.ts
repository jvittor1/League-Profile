import { Component, Input } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { userInitialize } from 'src/app/common/userInitialize';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent {
  @Input() user: IUser = userInitialize();

  faCopy = faCopy;
}
