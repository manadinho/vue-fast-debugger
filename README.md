# fast-debugger

By using `Fast Debugger`, you can expedite the process of troubleshooting NodeJS code and resolving issues.
First install `Fast Debugger` desktop application according your operating system.
Now you are ready to receive log data from `Laravel`, `Vue` or `Node` projects.

## download desktop application
[mac](https://drive.google.com/file/d/1H5w6VxHysvQiOa-jqNHPYD_QJ5shfb6h/view?usp=share_link).
[windows](https://drive.google.com/file/d/1Qka8i_sho0fMh6jtlnyPs2SqmQfnwGBl/view?usp=share_link).
[linux](https://drive.google.com/file/d/1gMa93ujkEUpCzPdUkxivNilvNxkVQqZv/view?usp=share_link).


## installation

    npm i vue-fast-debugger --save-dev
    
## Usage

To use Fast Debugger first add the plugin to your Vue.js application:

```js
import Vue from 'vue';
import FastDebuggerPlugin from 'my-vue-package';

Vue.use(FastDebuggerPlugin);
```

You can now use the $fast method in your Vue.js components

```js
export default {
  mounted() {
    this.$fast('FAST DEBUGGER IS WORKING');
  }
};
```

You can specify flag to identify your specific log by chainig `flag()` method

```js
export default {
  mounted() {
    this.$fast('FAST DEBUGGER IS WORKING').flag('FLAG TO IDENTIFY');
  }
};
```

On log data you can see file name and line number from the `fast()` method is called. You can open file in `VSCODE` by simply clicking on file name.
