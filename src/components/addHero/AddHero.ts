import {bootstrap, Component, NgZone, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from 'components/hero/Hero';
import {HeroService} from 'components/hero/HeroService';

@Component({
	selector: 'add-hero',
	templateUrl: 'components/addHero/addHero.html',
	directives: [CORE_DIRECTIVES]
})

class AddHeroComponent {

	constructor(private heroService: HeroService, private ngZone: NgZone) {

	}

	addHero(newHero) {
		if (newHero.value) {
			this.heroService.addHero(new Hero(11, newHero.value));
			newHero.value = null; // clear the newHero textbox
			this.ngZone.run(() => {console.log('Outside Done!') });
		}
	}
}

bootstrap(AddHeroComponent, [HeroService]);