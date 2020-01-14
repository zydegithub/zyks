class Service {
  constructor (serviceUrl) {
    if (!serviceUrl) return;
    this.client = new HproseHttpClient(serviceUrl);
  }

  getData (methodName, args, successFlag = true) {
    this._validateParams(methodName);
    return new Promise((resolve, reject) => {
      let resultHandler = (result) => {
        try {
          // let resultJson = JSON.parse(result);
          if (!successFlag) {
            resolve(result.result);
            return;
          }
          resolve(result);
        } catch (err) {
          resolve(result);
        }
      };
      let rejectHandler = (error) => {
        if (error) {
          reject(error);
        }
      };
      if (args === undefined) {
        this.client.invoke(methodName, resultHandler, rejectHandler);
      } else {
        if (args instanceof Array) {
          this.client.invoke(methodName, ...args, resultHandler, rejectHandler);
        } else {
          this.client.invoke(methodName, args, resultHandler, rejectHandler);
        }
      }
    });
  }

  _validateParams (methodName) {
    if (!this.client) throw new Error('Hprose客户端实例未生成！');
    if (!methodName) throw new Error('请求方法名不可为空！');
    if (typeof (methodName) !== 'string') throw new TypeError('请求方法名类型为‘' + typeof (methodName) + '’，也必须是字符串');
  }
}

export default Service;
