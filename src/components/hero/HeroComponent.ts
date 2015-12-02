import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from 'components/hero/Hero';
import {HeroService} from 'components/hero/HeroService';

@Component({
	selector: 'list-hero',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	templateUrl: 'components/hero/hero.html',
	styleUrls: ["components/hero/hero.css"]
})

export class HeroComponent {
	public title;
	public heroes;
	public selectedHero;

	constructor(heroService: HeroService) {
		this.title = 'Tour of Heroes';
		this.heroes = heroService.getHeroes();
		this.selectedHero = Hero;
	}

	public onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	public getSelectedClass(hero: Hero) {
		return { 'selected': hero === this.selectedHero };
	}

}
