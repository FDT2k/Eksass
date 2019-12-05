var sass = require('node-sass');

var {sass_expect_no_error,sass_expect,sass_dump} = require('./utils')

test ('rems',()=>{
  let expected = '.test{size:0.85714rem;}'

  sass.render({data: "@import 'src/mixin/rem'; .test{size:remify(14,12)}"},sass_expect(expected))
});
test ('rems',()=>{
  let expected = '.test{size:0.85714rem;}'

  sass.render({data: "@import 'src/mixin/rem'; .test{size:rem14(12)}"},sass_expect(expected))
});



test ('rems',()=>{
  let expected = '.test{size:4.57143rem;}'

  sass.render({data: "@import 'src/mixin/rem'; .test{size:rem14(64)}"},sass_expect(expected))
});
