var sass = require('node-sass');
var {sass_expect_no_error,sass_expect,sass_dump} = require('./utils')


test ('grid mixins',(done)=>{

  sass.render({data: "@import 'src/mixin/grid'; .test{@include grid}"}, sass_expect_no_error(done))

});



test ('grid mixins',()=>{
  let expected = '.test{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;width:100%;}'

  sass.render({data: "@import 'src/mixin/grid'; .test{@include grid}"}, sass_expect(expected))
});

test ('grid component',(done)=>{

  sass.render({data: "@import 'src/components/grid'; "}, sass_expect_no_error(done))

});
