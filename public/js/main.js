const articles = document.getElementById('articles');

if (articles) {
    articles.addEventListener('click', (e) => {
        if (e.target.className === 'btn btn-danger delete-article') {
            if (confirm('Are you sure?')) {
                const id = e.target.getAttribute('data-id');

                fetch(`/article/delete/${id}`, {
                    method: 'DELETE'
                  }).then(res => window.location.reload());

                }
        }

        if (e.target.className === 'check-box mark-article') {
            const id = e.target.getAttribute('data-id');
            
            fetch(`/article/mark/${id}`, {
                method: 'PUT'
            }).then(res => window.location.reload());
        }
    });
  }