export default class Execution {
    constructor(
      public id: number,                // execution id
      public project_id: number,        // execution relates to which project id      
      public source: string,            // 'jenkins' | 'local'
      public jenkins_url: string,       // 'jenkins url'
      public result: string,            // json string of result
      public dated: Date,             // when it was executed
    ) {}
  }