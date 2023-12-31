// A minimal CSS framework: you can research
// and choose others, or use none at all.
import '@picocss/pico'

// Our stylesheet.
import './style.css'
import './hero-animation';
import './hero-animation.css';
import './background-animation.css';
import './background-animation.js';
// We can import raw code fragments for samples, like this:
import fragment from './code-fragments/fragment.js?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;

// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
