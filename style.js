
document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the default way
            
            const memberId = document.getElementById('memberId').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            if (!memberId || !password) {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
                return;
            }
            // List of valid credentials
            const validCredentials = [
                { memberId: "cftp-ms-0167", password: "12345678" },
                { memberId: "ipstudio", password: "Dara12369874" },
                { memberId: "poohdi", password: "poohdi" }
                // Add more credentials as neede
            ];
    
            // Validate the credentials
            const isValid = validCredentials.some(cred => cred.memberId === memberId && cred.password === password);

            if (isValid) {
                // Save the memberId if "Remember me" is checked
                if (rememberMe) {
                    localStorage.setItem('memberId', memberId);
                } else {
                    localStorage.removeItem('memberId');
                }
                
                // Redirect to home.html
                window.location.href = 'home.html';
            } else {
                alert('รหัสประจำตัวสมาชิกพรรคหรือรหัสผ่านไม่ถูกต้อง');
            }
        });

        // Optional: Load saved memberId if available
        window.addEventListener('load', function() {
            const savedMemberId = localStorage.getItem('memberId');
            if (savedMemberId) {
                document.getElementById('memberId').value = savedMemberId;
                document.getElementById('rememberMe').checked = true;
            }
        });
