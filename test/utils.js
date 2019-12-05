const c = require ('@geekagency/composite-js')

const sass_expect_no_error = done=> (err,res)=> (err==null) ? done(): console.log(err)

const sass_callback = fn => done => (err,res)=>  (err==null) ? done(fn(res.css)): console.error(err)



const buffer_tostring = buffer=> buffer.toString('utf8')
const css_minify = string => string.replace(/[\s\n]*/g,'');

const dump=c.compose(css_minify,buffer_tostring)

const sass_dump = sass_callback(dump)(console.log)
const sass_expect = expected => sass_callback(dump)(str=>expect(str).toBe(expected))


module.exports = {
  sass_expect_no_error,
  sass_callback,
  sass_expect,
  sass_dump

}
