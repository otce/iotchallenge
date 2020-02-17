import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  onShowModel(){
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swal.fire({
          title: 'All done!',
          html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
}
