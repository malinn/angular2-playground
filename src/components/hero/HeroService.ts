import {Hero} from './hero';
import {HEROES} from './mockHeroes';
export class HeroService {

	private heroes: Array<Hero>;

	constructor() {
		this.heroes = HEROES;
	}

	getHeroes() {
		return this.heroes;
	}

	addHero(hero: Hero) {
		this.heroes.push(hero);
	}

}