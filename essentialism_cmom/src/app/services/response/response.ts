export class Response {
  data: Map<string, any>;
  // keys = [
  //   ['id', Date.now()],
  //   ['datestamp', new Date().toISOString()],
  //   ['participant', -1],
  //   ['block', ''],
  //   ['action', ''],
  //   ['response', '']
  // ];

  constructor(input?) {
    this.data = new Map();
    this.data.set('id', input ? input.id : Date.now().toString().concat('C'));
    this.data.set('datestamp', input ? input.datestamp : new Date().toISOString());
    this.data.set('participant', input ? input.participant : -1);
    this.data.set('block', input ? input.block : '');
    this.data.set('action', input ? input.action : '');
    this.data.set('response', input ? input.response : '');

    // const remainder = [];
    for (const key in input) {
      if (!this.data.get(key)) {
        this.data.set(key, input[key]);
      }
    }
  }
  // could also validate -

  // TODO by initializing from objects in indexeddb vs arrays, order is not guaranteed

  // returns header string - call this first
  getCSVHeader() {
    const keys = Array.from(this.data.keys());
    let output = keys.reduce((accum, current, idx) => {
      if (current === 'block') {
        return accum;
      }

      if (idx === 1) {
        accum = accum + ',';
      }
      return accum + current + ',';
    });
    output += '\n';

    return output;
  }

  // why is header/toCSV separate? -- tocsv being run on each response obj and header only once

  // returns csv formatted version of the object (excluding header)
  toCSV() {
    const keys = Array.from(this.data.keys());
    const values = Array.from(this.data.values());

    const output = keys.reduce((accum, cur, idx) => {
      let temp = '';
      try {
        console.log(accum, cur, idx, 'inside to CSV');
        if (idx === 1) {
          accum = values[idx - 1].toString() + ',';
        }

        if (keys[idx] === 'block') {
          return accum;
        }

        if (values[idx] === Object(values[idx])) {
          temp = JSON.stringify(values[idx]);
        } else {
          temp = values[idx].toString();

          if (idx === 2) {
            temp = values[idx].toString().concat('C');
          }

          if (temp.indexOf(',') !== -1) {
            temp = '"' + temp + '"';
          }
        }
      } catch (e) {
        if (e instanceof TypeError) {
          if (e.message.indexOf('Cannot read property') !== -1) {
            console.error('Oops, looks like we are missing some data: ' + cur + ' is empty or malformed in the row: ' + this.data);
          }
        }
        console.error('re-throwing exception for further diagnosis');
        throw e;
      }
      // for values that are lists - todo move thhis to their toString()

      return (accum += temp + ',');
    });

    return output;
  }

  toJSON() {
    // this.data.forEach((v,k) => { z[k] = v; });

    const keys = Array.from(this.data.keys());
    const out = {};

    keys.map((cur, idx) => {
      out[cur] = this.data[cur];
    });

    return JSON.stringify(out);
  }

  fromJSON(json) {
    const res = JSON.parse(json);
    const keys = Array.from(this.data.keys());

    keys.map((cur, idx) => {
      this.data[cur] = res[cur];
    });
  }
}
