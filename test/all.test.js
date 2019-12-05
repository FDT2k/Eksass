var sass = require('node-sass');

var {sass_expect_no_error,sass_expect,sass_dump} = require('./utils')

test ('all',()=>{

  sass.render({file: "src/all.scss"},sass_expect_no_error)
});
