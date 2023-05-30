import { join } from 'lodash-es';
import { add } from '@/utils';
import './styles/index.css';

function component() {
  const element = document.createElement('div');
  console.log(add(1, 2));
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
