import { join } from 'lodash-es';
import { add } from '@/utils';
import './styles/index.css';

function component() {
  const element = document.createElement('div');
  console.log(add(1, 2));

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
