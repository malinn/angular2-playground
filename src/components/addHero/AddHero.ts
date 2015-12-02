import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from 'components/hero/Hero';
import {HeroService} from 'components/hero/HeroService';

@Component({
	selector: 'add-hero',
	templateUrl: 'components/addHero/addHero.html',
	directives: [CORE_DIRECTIVES]
})

export class AddHero {

	constructor(private heroService: HeroService) {

	}

	addHero(newHero) {
		if (newHero.value) {
			this.heroService.addHero(new Hero(11, newHero.value));
			newHero.value = null; // clear the newHero textbox
		}
	}
}

