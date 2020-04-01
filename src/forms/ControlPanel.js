import { Elements, Form } from 'katejs/lib/client';
/*
  Функции

 */
export default class ControlPanel extends Form {
  constructor(args) {
    super(args);
    this.elements = [
      {
        type: Elements.LABEL,
        title: 'Hello world',
      },
    ];
  }
}
