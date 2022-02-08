function trace() {
    try {
      throw new Error('myError');
    } catch (e) {
      console.log(e.stack);
    }
  }
  
  function b() {
    trace();
  }
  
  function a() {
    b(3, 4, '\n\n', undefined, {});
  }
  
  a('first call, firstarg');