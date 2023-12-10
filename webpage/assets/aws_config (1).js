const awsConfig = {
      aws_iot_endpoint: 'a10czwrave0bb5-ats.iot.us-east-1.amazonaws.com',
      aws_iot_policy_name: 'DLTCognitoAuthIoTPolicyB8FDFE53_35wssM0PchuE',
      cw_dashboard: 'https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:',
      ecs_dashboard: 'https://us-east-1.console.aws.amazon.com/ecs/home?region=us-east-1#/clusters/AYGOStackProject/tasks',
      aws_project_region: 'us-east-1',
      aws_cognito_region: 'us-east-1',
      aws_cognito_identity_pool_id: 'us-east-1:0c6aedd4-af7e-4a36-8d42-9c42666ce782',
      aws_user_pools_id: 'us-east-1_iVGhLCcne',
      aws_user_pools_web_client_id: '7bh931pc8q0p8m988t8g8o94rr',
      oauth: {},
      aws_cloud_logic_custom: [
          {
              name: 'dlts',
              endpoint: 'https://xy43x1ed8c.execute-api.us-east-1.amazonaws.com/prod',
              region: 'us-east-1'
          }
      ],
      aws_user_files_s3_bucket: 'aygostackproject-dlttestrunnerstoragedltscenarios-1nclkjmunmtph',
      aws_user_files_s3_bucket_region: 'us-east-1',
  }