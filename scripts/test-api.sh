npx aws-api-gateway-cli-test --username='admin@example.com' --password='P@ssword1!' --user-pool-id='us-east-1_5RQjLOJGB' --app-client-id='3b5tvoa43ud935qlkrq0b1vi27' --cognito-region='us-east-1' --identity-pool-id='us-east-1:cd366e1b-dd3f-4f2e-b841-6f3579e80c83' --invoke-url='https://5aureajoha.execute-api.us-east-1.amazonaws.com/dev' --api-gateway-region='us-east-1' --path-template='/rate' --method='POST' --body='{"movieId":1, "rating":5}'

jr$ aws cognito-idp admin-confirm-sign-up --region us-east-1 --user-pool-id us-east-1_5RQjLOJGB --usernmae admin@example.com
--usernmae admin@example.com

aws cognito-idp sign-up   --region us-east-1     --username admin@example.com --client-id 3b5tvoa4
3ud935qlkrq0b1vi27 --password P@ssword1!