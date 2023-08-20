export default class Project {
    constructor(
      public id: number,
      public name: string,
      public desc: string,
      public source: string,          // 'jenkins' | 'xml' | 'local'
      public jenkins_url: string,
      public jenkins_user: string,
      public jenkins_password: string,
      public isActive: boolean,       // true | false
      public created: Date,
      public last_executed: Date,
      public last_updated: Date
    ) {}
  }