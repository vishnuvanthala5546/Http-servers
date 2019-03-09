import {Component} from '@angular/core';
import {ServerService} from './server.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Http Server';

  servers = [
    {
      name: 'TestServer',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'LiveServer',
      capacity: 100,
      id: this.generateId()
    }
  ];

  onSave() {
    this.serverService.storeservers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  constructor(private serverService: ServerService) {
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
    console.log(this.servers);
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
