var sass = require('node-sass');
var {sass_expect_no_error,sass_expect,sass_dump} = require('./utils')


test ('flex mixins',(done)=>{

//  sass.render({data: "@import 'src/mixin/flex';"}, sass_expect_no_error(done))
  sass.render({data: "@import 'src/mixin/flex'; .test{@include flex}"}, sass_expect_no_error(done))

});



test ('flex mixins',()=>{
  let expected = '.test{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}'

  sass.render({data: "@import 'src/mixin/flex'; .test{@include flex}"}, sass_expect(expected))
});

test ('flex mixins',()=>{
  let expected = '.test{size:0.85714rem;}'

  sass.render({data: "@import 'src/mixin/rem'; .test{size:remify(14,12)}"},sass_expect(expected))
});
