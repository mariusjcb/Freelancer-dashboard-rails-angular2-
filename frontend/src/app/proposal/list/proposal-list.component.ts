import { Component } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(12, "Andrei Costescu", "http://iliemarius.ro/", "Swift", 200, 130, 4, "andrei@demo.ro")
  proposalTwo: Proposal = new Proposal(15, "Stefan Buzoianu", "http://iliemarius.ro/", "Obj-C", 412, 144, 5, "bz@demo.ro")
  proposalThree: Proposal = new Proposal(17, "Andrei Avram", "http://iliemarius.ro/", "Cartofi prajiti", 200, 130, 4, "avram.andrei@demo.ro")

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
