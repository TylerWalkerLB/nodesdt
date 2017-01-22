import co from 'co';
import views from 'co-views';

/**
 * Returns fully compiled HTML from templates using the ejs style
 *
 * @param markup    --> ReactDOM.renderToString();
 * @param template  --> .ejs file within the /views directory
 * @param title     --> Page title
 * @returns {Promise}
 */
export default function returnView(markup, template = 'basic', title = 'Whitetail - Website Performance Analysis') {

    return new Promise((resolve, reject) => {

        co(function *(){

            let render = views(__dirname + '/../../../views', {
                ext: 'ejs'
            });

            render(template,
                {
                    markup: markup,
                    title: title
                }
            ).then(res => {
                resolve(res);
            }).catch(err => {
                reject(new Error(err));
            });

        });
    });
}
