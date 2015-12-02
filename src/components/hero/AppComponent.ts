import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from 'components/hero/Hero';
import {HeroService} from 'components/hero/HeroService';
import {HeroComponent} from 'components/hero/HeroComponent';
import {AddHero} from 'components/addHero/AddHero';

@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	templateUrl: 'components/hero/app.html',
	styleUrls: ["components/hero/app.css"],
	directives: [HeroComponent, AddHero]
})

class AppComponent {

}

bootstrap(AppComponent, [HeroService]);
