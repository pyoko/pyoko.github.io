import styles from '../scss/styles.scss';
import Typed from 'typed.js';

(function() {
	var typedAnime = new Typed(
	'#typed',
	{
		strings: [
			'Web Developer',
			'Web Programmer',
			'Software Engineer'
		],
		typeSpeed: 50,
	    backSpeed: 50,
	    backDelay: 3000,
	    cursorChar: '',
	    loop: true,
	});

	document.querySelector('.scroll-me-down').addEventListener('click', function(ev) {
		document.querySelector('.page-headline').scrollIntoView({ 
		  behavior: 'smooth' 
		});
	});
})();