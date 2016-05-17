Git提交时的代码校验（ESLint）
1、首先全局安装eslint：npm install -g eslint
2、编写eslint的配置文件.eslintrc，将文件放到项目根目录下。（git提交时会引用这个配置文件，文件内容是eslint的校验规则）
3、编写pre-commit 文件。将文件放到 projectName/.git/hooks目录下（此目录为隐藏目录），在git 提交代码时会触发此脚本，进行js 文件校验。

图一：pre-commit 文件位置
4、git 提交代码时，如果不符合代码规范，提示如下：

图二：git bash 错误提示

图三：webstrom 错误提示
5、gulp 也有eslint的插件 gulp-eslint。安装：npm install gulp-eslint --save-dev，
（经测试，项目目录还需再次安装 eslint：npm install eslint --save-dev）
Eslint有一个默认的配置文件 eslint.json。我们项目中的.eslintrc 的配置项会覆盖eslint.json 的部分配置。而git 提交时只使用 .eslintrc 的校验规则，没有默认配置，所以使用 gulp-eslint 时校验会更严格些。

图四：eslint.json 文件


如果不需要使用 eslint.json 中的默认配置，需要增加配置："reset":true

图五：不使用eslint.json 的默认配置

图六：gulp 校验结果和 pre-commit 校验结果保持一致

6、在gulp 中也编写了一个简单任务，将项目中的 .eslint-pre-commit-hook 文件拷贝到.git/hooks 下。
7、疑问：采用gulp 构建时，有几个配置项不能正常使用。Git 提交时可以正常校验。
Quotes,
max-statements-per-line,
space-unary-ops,
key-spacing,
keyword-spacing,
no-empty-function


8、参考：http://eslint.cn/docs/rules/
