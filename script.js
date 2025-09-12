
        AOS.init();
        feather.replace();
        
        document.getElementById('checkButton').addEventListener('click', function() {
            const urlInput = document.getElementById('urlInput').value;
            if(urlInput) {
                // Show loading state
                this.innerHTML = '<i data-feather="loader" class="w-5 h-5 mr-2 animate-spin"></i>Analyzing...';
                feather.replace();
                
                // Simulate API call
                setTimeout(() => {
                    // Show results
                    document.getElementById('resultsSection').style.display = 'block';
                    
                    // Update UI with mock data
                    const domain = urlInput.replace(/(https?:\/\/)?(www\.)?/, '').split('/')[0];
                    document.getElementById('domainDisplay').textContent = domain;
                    
                    // Random trust score for demo
                    const trustScore = Math.floor(Math.random() * 100);
                    document.getElementById('trustBar').style.width = trustScore + '%';
                    
                    // Update other fields
                    document.getElementById('domainAge').textContent = 
                        Math.floor(Math.random() * 5) + 1 + ' years';
                    
                    const reputations = ['Poor', 'Fair', 'Good', 'Excellent'];
                    document.getElementById('reputationScore').textContent = 
                        reputations[Math.floor(Math.random() * reputations.length)];
                    
                    // Reset button
                    this.innerHTML = '<i data-feather="search" class="w-5 h-5 mr-2"></i>Analyze Link';
                    feather.replace();
                    
                    // Scroll to results
                    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
                }, 1500);
            }
        });
