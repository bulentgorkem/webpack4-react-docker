
#!/bin/bash

PROJECT_ID=cdn-demo-221916
ZONE=europe-west2-c

gcloud beta container --project "$PROJECT_ID" \
clusters create "standard-cluster-1" --zone "$ZONE" 
--username "admin" --cluster-version "1.9.7-gke.7"  \ 
--machine-type "g1-small" --image-type "COS" --disk-type "pd-standard" \
--disk-size "100" \
--scopes "https://www.googleapis.com/auth/compute","https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \
--num-nodes "2" --enable-cloud-logging --enable-cloud-monitoring \
--network "projects/$PROJECT_ID/global/networks/default" \
--subnetwork "projects/$PROJECT_ID/regions/europe-west2/subnetworks/default" \
--addons HorizontalPodAutoscaling,HttpLoadBalancing,KubernetesDashboard \
--enable-autoupgrade --enable-autorepair